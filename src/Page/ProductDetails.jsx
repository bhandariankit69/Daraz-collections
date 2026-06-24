import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState({});
  const [loading,setLoading]=useState(true);

  useEffect(() => {
    setLoading(true);

    axios.get(`https://dummyjson.com/products/${id}`)
    //   .then((response) => response.json())
    //   .then((data) => {
         .then(res=>setProduct(res.data))
        .finally(()=>setLoading(false));
        // setProduct(data);
    
  },[id]);

 if (loading) return (<p>Loading...</p>);
  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "40px auto",
        padding: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "40px",
          flexWrap: "wrap",
          backgroundColor: "#fff",
          padding: "30px",
          borderRadius: "15px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
        }}
      >
        {/* Product Image */}
        <div style={{ flex: "1" }}>
          <img
            src={product.thumbnail}
            alt={product.title}
            style={{
              width: "100%",
              maxWidth: "450px",
              borderRadius: "10px",
            }}
          />
        </div>

        {/* Product Info */}
        <div style={{ flex: "1" }}>
          <h1>{product.title}</h1>

          <p
            style={{
              color: "#f39c12",
              fontSize: "18px",
            }}
          >
            ⭐ {product.rating}
          </p>

          <h2
            style={{
              color: "#e53935",
              margin: "20px 0",
            }}
          >
            ${product.price}
          </h2>

          <p
            style={{
              color: "green",
              fontWeight: "bold",
            }}
          >
            In Stock
          </p>

          <p
            style={{
              lineHeight: "1.8",
              marginTop: "15px",
            }}
          >
            {product.description}
          </p>

          <p>
            <strong>Category:</strong> {product.category}
          </p>

          <div
            style={{
              display: "flex",
              gap: "15px",
              marginTop: "30px",
            }}
          >
            <button
              style={{
                padding: "12px 30px",
                border: "none",
                borderRadius: "8px",
                backgroundColor: "#ff9800",
                color: "white",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              Add to Cart
            </button>

            <button
              style={{
                padding: "12px 30px",
                border: "none",
                borderRadius: "8px",
                backgroundColor: "#1976d2",
                color: "white",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  )};


export default ProductDetails;