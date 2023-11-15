"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import FileUpload from "../../components/UploadInput";
import { useAuthContext } from "../../../../context/authContext";
import { Image } from "next/dist/client/image-component";
import api from "../../../../lib/api";

export default function Create() {
  const [loading, setLoading] = useState(false);
  const { userData } = useAuthContext();
  const [files, setFiles] = useState([]);
  const [newProd, setNewProd] = useState({
    name: "",
    price: 0,
    images: [],
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
    tags: [],
  });
  const router = useRouter();

  useEffect(() => {
    userData && userData.role === "ADMIN" ? null : router.push("/");
  }, []);

  useEffect(() => {
    console.log(newProd);
  }, [newProd]);

  const handleUpload = async (e) => {
    e.preventDefault();
    setLoading(true);
    const result = [];

    for (const file of files) {
      const formData = new FormData();
      formData.append("picture", file);
      const response = await api.post(
        `/upload/image/${newProd.type}`,
        formData
      );

      result.push(response.data.url);
    }

    setNewProd((prev) => ({ ...prev, images: [...prev.images, ...result] }));
    console.log("result!!!!!!!!!!", result);
    await handleSubmit(result);
    return;
  };

  const handleSubmit = async (images) => {
    try {
      const res = await api.post("/products/create", {
        ...newProd,
        tags: newProd.tags[0].split(","),
        images: images,
      });
      console.log("product created 😮", res.data);
      if (res) {
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log(newProd);
  }, [newProd]);

  return (
    userData && (
      <div className=" flex flex-col lg:flex-row gap-12">
        <div className=" flex flex-col justify-center items-center w-3/3 h-screen lg:w-1/3 ">
          <p className="text-slate-300 text-6xl absolute font-extralight">
            Criar um <br />
            <span className="ml-14 font-[600]">produto</span>
          </p>
          <Image
            width={50}
            height={50}
            loading="lazy"
            unoptimized="true"
            className="md:ml-24 w-80 h-96 object-cover"
            src={"/images/graph.png"}
            alt="product image"
          />
        </div>
        <form
          className="flex center flex-col lg:flex-row gap-10 w-2/3 justify-center items-center "
          onSubmit={handleUpload}
        >
          <div className="center flex-col ">
            <label htmlFor="name" className="self-start pl-4">
              Nome do produto
            </label>
            <input
              type="text"
              required
              name="name"
              onChange={(e) =>
                setNewProd((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }))
              }
              className="w-[80vw] lg:w-[15vw] border m-2"
            />
            <label htmlFor="price" className="self-start pl-4">
              Preço
            </label>
            <input
              type="number"
              name="price"
              step="any"
              min={5}
              max={99999}
              required
              onChange={(e) =>
                setNewProd((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }))
              }
              className="w-[80vw] lg:w-[15vw] border m-2"
            />
            <label htmlFor="description" className="self-start pl-4">
              Descrição
            </label>
            <input
              type="text"
              name="description"
              required
              onChange={(e) =>
                setNewProd((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }))
              }
              className="w-[80vw] lg:w-[15vw] border m-2"
            />
            <label htmlFor="type" className="self-start pl-4">
              Tipo
            </label>
            <select
              name="type"
              onChange={(e) =>
                setNewProd((prev) => ({
                  ...prev,
                  type: e.target.value,
                }))
              }
              required
            >
              <option disabled={true} value="">
                Selecione o tipo
              </option>
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
          </div>
          <div className="center flex-col">
            <label htmlFor="image" className="self-start pl-4">
              Imagem
            </label>
            <FileUpload setFiles={setFiles} files={files} />

            <label htmlFor="style" className="self-start pl-4">
              Estilo
            </label>
            <input
              type="text"
              name="style"
              onChange={(e) =>
                setNewProd((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }))
              }
              className="w-[80vw] lg:w-[15vw] border m-2"
            />
            <label htmlFor="size" className="self-start pl-4">
              Tamanho
            </label>
            <input
              type="number"
              name="size"
              onChange={(e) =>
                setNewProd((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }))
              }
              className="w-[80vw] lg:w-[15vw] border m-2"
            />
            <label htmlFor="stones" className="self-start pl-4">
              Pedras
            </label>
            <input
              type="text"
              name="stones"
              onChange={(e) =>
                setNewProd((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }))
              }
              className="w-[80vw] lg:w-[15vw] border m-2"
            />
            <label htmlFor="model" className="self-start pl-4">
              Modelo
            </label>
            <input
              type="text"
              name="model"
              onChange={(e) =>
                setNewProd((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }))
              }
              className="w-[80vw] lg:w-[15vw] border m-2"
            />
            <label htmlFor="closure" className="self-start pl-4">
              Fechadura
            </label>
            <input
              type="text"
              name="closure"
              onChange={(e) =>
                setNewProd((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }))
              }
              className="w-[80vw] lg:w-[15vw] border m-2"
            />
          </div>
          <div className="center flex-col">
            <legend>Nova coleção?</legend>
            <fieldset className="center text-center">
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
                className="border m-2"
              />
              <label htmlFor="Sim" className="self-start pl-4">
                Sim
              </label>

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
                className=" border m-2"
              />
              <label htmlFor="Não" className="self-start pl-4">
                Não
              </label>
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
                className="border m-2"
              />
              <label htmlFor="Sim" className="self-start pl-4">
                Sim
              </label>

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
                className="border m-2"
              />
              <label htmlFor="Não" className="self-start pl-4">
                Não
              </label>
            </fieldset>
            <label htmlFor="" className="self-start pl-4">
              Tags
            </label>
            <input
              type="text"
              name="tags"
              onChange={(e) =>
                setNewProd((prev) => ({
                  ...prev,
                  tags: [e.target.value],
                }))
              }
              className="w-[80vw] lg:w-[15vw] border m-2"
            />
            <label htmlFor="discount" className="self-start pl-4">
              Desconto
            </label>
            <input
              type="number"
              name="discount"
              onChange={(e) =>
                setNewProd((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }))
              }
              className="w-[80vw] lg:w-[15vw] border m-2"
            />
            {loading ? (
              <div role="status">
                <svg
                  aria-hidden="true"
                  className="w-24 h-24 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-verde"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
            ) : (
              <button type="submit">Criar!</button>
            )}
          </div>
        </form>
      </div>
    )
  );
}
