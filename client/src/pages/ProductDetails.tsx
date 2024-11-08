import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../api/productsAPI";
import type { Product } from "../interfaces/Product";

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const getProduct = async () => {
      if (id) {
        const fetchedProduct = await fetchProductById(parseInt(id));
        setProduct(fetchedProduct);
      }
    };
    getProduct();
  }, [id]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "left",
        maxWidth: "800px",
        margin: "0 auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      {product ? (
        <>
          <h2 style={{ color: "#333", marginBottom: "20px" }}>
            {product.title || "Smoked Sausage (Hot, Med, Mild)"}
          </h2>
          <img
            src={
              product.image ||
              "https://m.media-amazon.com/images/I/41FebVLyzRL._SX300_SY300_QL70_FMwebp_.jpg"
            }
            alt={product.title || "Product Image"}
            style={{
              width: "100%",
              height: "auto",
              maxWidth: "400px",
              marginBottom: "20px",
              borderRadius: "8px",
              objectFit: "cover",
            }}
          />
          <p style={{ marginBottom: "10px", color: "#555" }}>
            <strong>Description:</strong>{" "}
            {product.description ||
              "A variety of smoked sausage available in hot, medium, or mild flavors."}
          </p>
          <p style={{ marginBottom: "10px", color: "#555" }}>
            <strong>Price:</strong> $
            {product.price ? product.price.toFixed(2) : "4.00"}
          </p>
          <p style={{ marginBottom: "10px", color: "#555" }}>
            <strong>Category:</strong>{" "}
            {product.category || "No Category Available"}
          </p>
          <p style={{ marginBottom: "10px", color: "#555" }}>
            <strong>SKU:</strong> {product.sku || "smoked"}
          </p>
        </>
      ) : (
        <p style={{ color: "#777" }}>Loading product details...</p>
      )}
    </div>
  );
};

export default ProductDetails;
