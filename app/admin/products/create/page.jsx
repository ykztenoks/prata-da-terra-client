"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { isAdmin } from "../../../../lib/isAdmin";
import api from "../../../../lib/api";
import { useAuthContext } from "../../../../context/authContext";

export default function Create() {
  const { userData } = useAuthContext();
  const [newProd, setNewProd] = useState({
    name: "",
    price: 0,
    image: "",
    description: "",
    type: "",
    style: "",
    size: 0,
    stones: "",
    model: "",
    closure: "",
    newCollection: false,
    inStock: false,
    discount: 0,
  });
  const router = useRouter();

  useEffect(() => {
    userData?.role === "ADMIN" ? null : router.push("/");
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const res = await api.post("/products/create", newProd);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    userData && (
      <form
        className="flex flex-col justify-center items-center"
        onSubmit={handleSubmit}
      >
        <label htmlFor="name">Nome do produto</label>
        <input
          type="text"
          name="name"
          onChange={(e) =>
            setNewProd((prev) => ({ ...prev, [e.target.name]: e.target.value }))
          }
        />
        <label htmlFor="price">Preço</label>
        <input
          type="number"
          name="price"
          step="any"
          min={5}
          max={99999}
          onChange={(e) =>
            setNewProd((prev) => ({ ...prev, [e.target.name]: e.target.value }))
          }
        />
        <label htmlFor="image">Imagem</label>
        <input
          type="text"
          name="image"
          onChange={(e) =>
            setNewProd((prev) => ({ ...prev, [e.target.name]: e.target.value }))
          }
        />
        <label htmlFor="description">Descrição</label>
        <input
          type="text"
          name="description"
          onChange={(e) =>
            setNewProd((prev) => ({ ...prev, [e.target.name]: e.target.value }))
          }
        />
        <label htmlFor="type">Tipo</label>
        <select
          name="type"
          onChange={(e) =>
            setNewProd((prev) => ({ ...prev, [e.target.name]: e.target.value }))
          }
        >
          <option value="anel">anel</option>
          <option value="berloque">berloque</option>
          <option value="bracelete">bracelete</option>
          <option value="brinco">brinco</option>
          <option value="colar">colar</option>
          <option value="corrente">corrente</option>
          <option value="pingente">pingente</option>
          <option value="piercing">piercing</option>
          <option value="pulseira">pulseira</option>
          <option value="tornozeleira">tornozeleira</option>
        </select>
        <label htmlFor="style">Estilo</label>
        <input
          type="text"
          name="style"
          onChange={(e) =>
            setNewProd((prev) => ({ ...prev, [e.target.name]: e.target.value }))
          }
        />
        <label htmlFor="size">Tamanho</label>
        <input
          type="number"
          name="size"
          onChange={(e) =>
            setNewProd((prev) => ({ ...prev, [e.target.name]: e.target.value }))
          }
        />
        <label htmlFor="stones">Pedras</label>
        <input
          type="text"
          name="stones"
          onChange={(e) =>
            setNewProd((prev) => ({ ...prev, [e.target.name]: e.target.value }))
          }
        />
        <label htmlFor="model">Modelo</label>
        <input
          type="text"
          name="model"
          onChange={(e) =>
            setNewProd((prev) => ({ ...prev, [e.target.name]: e.target.value }))
          }
        />
        <label htmlFor="closure">Fechadura</label>
        <input
          type="text"
          name="closure"
          onChange={(e) =>
            setNewProd((prev) => ({ ...prev, [e.target.name]: e.target.value }))
          }
        />
        <fieldset>
          <legend>Nova coleção?</legend>

          <input
            type="radio"
            id="Sim"
            name="newCollection"
            value="true"
            onChange={(e) =>
              setNewProd((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
          />
          <label htmlFor="Sim">Sim</label>

          <input
            type="radio"
            id="Não"
            name="newCollection"
            value="false"
            onChange={(e) =>
              setNewProd((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
          />
          <label htmlFor="Não">Não</label>
        </fieldset>
        <fieldset>
          <legend>Em estoque?</legend>

          <input
            type="radio"
            id="Sim"
            name="inStock"
            value="true"
            onChange={(e) =>
              setNewProd((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
          />
          <label htmlFor="Sim">Sim</label>

          <input
            type="radio"
            id="Não"
            name="inStock"
            value="false"
            onChange={(e) =>
              setNewProd((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
          />
          <label htmlFor="Não">Não</label>
        </fieldset>
        <label htmlFor="discount">Desconto</label>
        <input
          type="number"
          name="discount"
          onChange={(e) =>
            setNewProd((prev) => ({ ...prev, [e.target.name]: e.target.value }))
          }
        />
        <button type="submit">Criar!</button>
      </form>
    )
  );
}
