import { useState, useEffect } from "react";
import { useCart } from "../../store/CartContext";
import "./ProductDetail.css";

export default function ProductDetail({ productId }) {
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [added, setAdded] = useState(false);
  const { addToCart } = useCart();

  useEffect(() => {
    const cached = sessionStorage.getItem("opc-products");
    if (cached) {
      const products = JSON.parse(cached);
      setProduct(products.find((p) => p.id === productId) || null);
    } else {
      fetch(`http://localhost:3001/products/${productId}`)
        .then((r) => r.json())
        .then(setProduct);
    }
  }, [productId]);

  if (!product) return <div className="detail-loading">Loading…</div>;

  function handleAdd() {
    if (!selectedSize) return;
    addToCart(product, selectedSize, product.color);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  return (
    <div className="detail page-enter">
      <div className="container">
        <a href="/shop" className="detail_back">
          ← Back to Shop
        </a>
        <div className="detail_layout">
          <div className="detail_image">
            <img
              src={`/images/${product.image}`}
              alt={product.title}
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
          </div>
          <div className="detail_info">
            <p className="detail_category">{product.color}</p>
            <h1 className="detail_name">{product.title}</h1>
            <p className="detail_price">${product.price}.00</p>
            <p className="detail_desc">{product.description}</p>
            <div className="detail_options">
              <div className="detail_option-group">
                <label>Size</label>
                <div className="detail_option-btns">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      className={`detail_option-btn${selectedSize === size ? " active" : ""}`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                  {product.specialOrderSizes?.map((size) => (
                    <button
                      key={size}
                      className={`detail_option-btn${selectedSize === size ? " active" : ""}`}
                      onClick={() => setSelectedSize(size)}
                      title="Special order"
                    >
                      {size} *
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <button
              className={`btn-primary detail_add-btn${!selectedSize ? " disabled" : ""}`}
              onClick={handleAdd}
              disabled={!selectedSize}
            >
              {added ? "✓ Added to Cart" : "Add to Cart"}
            </button>
            {!selectedSize && (
              <p className="detail_select-hint">Please select a size</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
