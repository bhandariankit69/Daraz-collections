import { useContext, useEffect, useState } from "react";
import Navbar from "../Component/Navbar";
import Hero from "../Component/Hero";
import ProductCard from "../Component/ProductCard";
import { AuthContext } from "../Component/context";

function Home() {
  const [products, setProducts] = useState([]);
  const siteName = useContext(AuthContext);


  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
      });
  }, []);

  return (
    <>
      <Navbar />
      <Hero />

      <div style={{ padding: "20px" }}>
        <h2
          style={{
            marginBottom: "20px",
            fontSize: "28px",
            textAlign: "center",
          }}
        >
          Featured Products
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
            gap: "20px",
          }}
        >
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;