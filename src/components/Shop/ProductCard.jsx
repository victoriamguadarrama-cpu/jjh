import "./ProductCard.css";

export default function ProductCard({ product }) {
  return (
    <a href={`/shop/${product.id}`} className="product-card">
      <div className="product-card_img-wrap">
        <img
          src={`/images/${product.image}`}
          alt={product.title}
          onError={(e) => {
            e.target.style.display = "none";
          }}
        />
        <div className="product-card_overlay">
          <span>View Details</span>
        </div>
      </div>
      <div className="product-card_info">
        <p className="product-card_category">{product.color}</p>
        <h3 className="product-card_name">{product.title}</h3>
        <p className="product-card_price">${product.price}.00</p>
      </div>
    </a>
  );
}
