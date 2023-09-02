import axios from "axios";
import Product from "../../components/Product";
async function fetchProducts() {
  const res = await axios.get("http://127.0.0.1:8080/products");
  console.log(res.status);
  if (res.status !== 200) {
    throw new Error("Erro ao buscar produtos");
  }
  return res.data;
}

async function catalogo() {
  const products = await fetchProducts();
  return (
    <div className="flex flex-wrap p-8 gap-8 w-full overflow-hidden justify-center">
      {products.map((product, i) => (
        <Product product={product} key={i} />
      ))}
    </div>
  );
}

export default catalogo;
