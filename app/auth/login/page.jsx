"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthContext } from "../../../context/authContext";
import Link from "next/link";
import api from "../../../lib/api";

export default function Login() {
  const [userdata, setUserdata] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState(null);
  const { authorize, setUserData } = useAuthContext();
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const res = await api.post("/user/login", userdata);

      setUserData(res.data.user);
      authorize(res.data.token);

      localStorage.setItem("authToken", res.data.token);
      if (res.data.user.role === "ADMIN") {
        router.push("/admin/products/create");
      } else {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
      console.log(error.response.data.msg);
      setMessage(error.response.data.msg);
    }
  }

  return (
    <section>
      <div className="flex flex-col items-center justify-center  pb-8 mx-auto md:h-[85vh] lg:py-0">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold  "
        ></a>
        <div className="w-full  rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight  md:text-2xl ">
              Entre na sua conta
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              onSubmit={(e) => handleSubmit(e)}
            >
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium  "
                >
                  Seu email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className=" border border-gray-300  sm:text-sm rounded-lg focus:ring-verde focus:border-verde block w-full p-2.5 "
                  placeholder="name@company.com"
                  required
                  onChange={(e) =>
                    setUserdata((prev) => ({
                      ...prev,
                      [e.target.name]: e.target.value,
                    }))
                  }
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium  "
                >
                  Senha
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className=" border border-gray-300  sm:text-sm rounded-lg focus:ring-verde focus:border-verde block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  onChange={(e) =>
                    setUserdata((prev) => ({
                      ...prev,
                      [e.target.name]: e.target.value,
                    }))
                  }
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start"></div>
                {message ? <p>{message}</p> : null}
                <a
                  href="#"
                  className="text-sm font-medium text-verde hover:underline dark:text-primary-500"
                >
                  Esqueceu sua senha?
                </a>
              </div>
              <button
                type="submit"
                className="w-full text-gray-950 bg-verde hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-verde dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Sign in
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Não tem uma conta?{" "}
                <Link
                  href="/auth/signup"
                  className="font-medium text-verde hover:underline dark:text-primary-500"
                >
                  Cadastre-se!
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
