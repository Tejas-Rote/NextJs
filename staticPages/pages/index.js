import fs from "fs/promises";
import path from "path";

function HomePage(props) {
  const { products } = props;

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>{product.title}</li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  // here the path directory for nextjs for this file will be root path as it will treat this file as any other root file when building/ rendering
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  return {
    props: {
      // products: [{ id: "p1", title: "product1" }],
      products: data.products,
    },
  };
}

export default HomePage;
