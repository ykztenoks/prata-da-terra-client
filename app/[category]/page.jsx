import axios from "axios";
import Product from "../../components/Product.jsx";
async function fetchByCategory(category) {
  if (category === "aneis") category = "anel";
  if (category === "colares") category = "colar";
  const res = await axios.get(`http://127.0.0.1:8080/products/${category}`);

  if (res.status !== 200) {
    throw new Error("Erro ao buscar produtos por categoria");
  }

  return res.data;
}

export default async function category({ params }) {
  const products = await fetchByCategory(params.category);

  return (
    <div className="flex flex-wrap p-8 gap-8 w-full overflow-hidden justify-center">
      {products.map((product, i) => (
        <Product product={product} key={i} />
      ))}
    </div>
  );
}
