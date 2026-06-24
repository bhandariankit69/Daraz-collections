import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <Link
      to={`/product/${product.id}`}
      style={{
        textDecoration: "none",
        color: "inherit",
      }}
    >
      <div
        style={{
          border: "1px solid #e0e0e0",
          borderRadius: "12px",
          overflow: "hidden",
          backgroundColor: "#fff",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          transition: "0.3s",
          cursor: "pointer",
        }}
      >
        {/* Product Image */}
        <img
          src={product.thumbnail}
          alt={product.title}
          style={{
            width: "100%",
            height: "220px",
            objectFit: "cover",
          }}
        />

        {/* Product Details */}
        <div style={{ padding: "15px" }}>
          <h3
            style={{
              fontSize: "18px",
              marginBottom: "10px",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {product.title}
          </h3>

          {/* Rating */}
          <p style={{ color: "#f39c12", margin: "5px 0" }}>
            ⭐ {product.rating || 4.5}
          </p>

          {/* Price */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <span
              style={{
                fontSize: "22px",
                fontWeight: "bold",
                color: "#e53935",
              }}
            >
              ${product.price}
            </span>

            <span
              style={{
                textDecoration: "line-through",
                color: "#888",
              }}
            >
              ${Math.round(product.price * 1.2)}
            </span>
          </div>

          {/* Add to Cart Button */}
          <button
            style={{
              width: "100%",
              marginTop: "15px",
              padding: "10px",
              border: "none",
              borderRadius: "8px",
              backgroundColor: "#1976d2",
              color: "white",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;