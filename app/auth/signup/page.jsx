"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import api from "../../../lib/api";
import Link from "next/link";

export default function Signup() {
  const [userdata, setUserdata] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState(null);
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await api.post("/user/signup", userdata);

      router.push("/auth/login");
    } catch (error) {
      console.log(error.response.data.msg);
      setMessage(error.response.data.msg);
    }
  }
  return (
    <section className=" ">
      <div className="flex flex-col items-center justify-center px-6 pb-8 mx-auto md:h-screen lg:py-0">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold  "
        ></a>
        <div className="w-full  rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight  md:text-2xl ">
              Cadastre-se!
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              onSubmit={(e) => handleSubmit(e)}
            >
              <div>
                <label
                  htmlFor="nome"
                  className="block mb-2 text-sm font-medium  "
                >
                  Nome
                </label>
                <input
                  type="text"
                  name="firstName"
                  id="nome"
                  className=" border border-gray-300  sm:text-sm rounded-lg focus:ring-verde focus:border-verde block w-full p-2.5 "
                  placeholder="José"
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
                  htmlFor="sobrenome"
                  className="block mb-2 text-sm font-medium  "
                >
                  Sobrenome
                </label>
                <input
                  type="text"
                  name="lastName"
                  id="sobrenome"
                  className=" border border-gray-300  sm:text-sm rounded-lg focus:ring-verde focus:border-verde block w-full p-2.5 "
                  placeholder="Silva"
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
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium  "
                >
                  Seu email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className=" border   sm:text-sm rounded-lg focus:ring-verde focus:border-verde block w-full p-2.5 "
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
                  className=" border   sm:text-sm rounded-lg focus:ring-verde focus:border-verde block w-full p-2.5 "
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
                {message ? (
                  <p className="text-sm font-medium text-verde hover:underline dark:text-primary-500">
                    {message}
                  </p>
                ) : null}
              </div>
              <button
                type="submit"
                className="w-full text-gray-950 bg-verde hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-verde dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Cadastrar
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Já tem uma conta?{" "}
                <Link
                  href="/auth/login"
                  className="font-medium text-verde hover:underline dark:text-primary-500"
                >
                  Faça o login!
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
