import { productsData } from "../../data/productsData";
import ProductCard from "./ProductCard";
import "./Shop.css";

export default function Shop() {
  const products = productsData;

  const avgPrice = products.length
    ? (products.reduce((s, p) => s + p.price, 0) / products.length).toFixed(2)
    : 0;
  const prices = products.map((p) => p.price);
  const priceRange = products.length
    ? `$${Math.min(...prices)} – $${Math.max(...prices)}`
    : "—";

  return (
    <div className="shop page-enter">
      <div className="shop_header">
        <div className="container">
          <p className="shop_eyebrow">Café Sabor Merchandise</p>
          <h1 className="shop_title">The Shop</h1>
          <p className="shop_sub">
            {products.length} items · Avg price ${avgPrice} · Range {priceRange}
          </p>
        </div>
      </div>

      <div className="shop_body">
        <div className="container">
          <div className="shop_grid">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
