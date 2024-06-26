import Product from "../components/Product";
import axios from "axios";
async function fetchProducts() {
  const res = await axios.get(process.env.NEXT_PUBLIC_SERVER_URL + "/products");

  if (res.status !== 200) {
    throw new Error("Erro ao buscar produtos");
  }
  return res.data;
}

async function catalogo() {
  const products = await fetchProducts();
  return (
    <div className="flex flex-wrap p-8 gap-8 w-full overflow-hidden justify-center">
      {products
        .filter((product) => product.inStock)
        .map((product, i) => (
          <Product product={product} key={i} />
        ))}
    </div>
  );
}

export default catalogo;
