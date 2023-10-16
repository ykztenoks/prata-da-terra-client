"use client";
import { useEffect, useState } from "react";
import api from "../../lib/api";
import Loading from "../loading";
import { useAuthContext } from "../../context/authContext";
import { useRouter } from "next/navigation";
export default function Profile() {
  const [user, setUser] = useState(null);
  const router = useRouter();
  const { logout } = useAuthContext();

  useEffect(() => {
    async function getProfile() {
      try {
        const res = await api.get("/user/profile");
        setUser(res.data);
      } catch (error) {
        if (error.response.status === 401) {
          localStorage.clear();
          router.push("/auth/login");
        }
        console.log(error);
      }
    }
    getProfile();
  }, []);

  return (
    <div className="center flex-col">
      {user ? (
        <>
          <h1>Bem vindo, {user.firstName}! 🙂</h1>
          <button
            onClick={logout}
            className="rounded-xl bg-verde p-2 btn-hover"
          >
            Sair da conta
          </button>
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
}
