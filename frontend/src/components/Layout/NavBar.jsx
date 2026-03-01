import { useCart } from "../../store/CartContext";
import "./NavBar.css";

export default function NavBar() {
  const { getCartCount } = useCart();
  const count = getCartCount();
  const path = window.location.pathname;

  return (
    <nav className="navbar">
      <div className="container navbar__inner">
        <a href="/" className="navbar__logo">
          <span className="navbar__logo-opc">Off Premise Catering</span>
          <span className="navbar__logo-sub">& Café Sabor</span>
        </a>
        <ul className="navbar__links">
          <li>
            <a href="/" className={path === "/" ? "active" : ""}>
              Home
            </a>
          </li>
          <li>
            <a href="/about" className={path === "/about" ? "active" : ""}>
              About
            </a>
          </li>
          <li>
            <a href="/menu" className={path === "/menu" ? "active" : ""}>
              Catering Menu
            </a>
          </li>
          <li>
            <a
              href="/shop"
              className={path.startsWith("/shop") ? "active" : ""}
            >
              Café Sabor Shop
            </a>
          </li>
        </ul>
        <button
          className="navbar__cart"
          onClick={() => (window.location.href = "/cart")}
          aria-label="Cart"
        >
          🛒
          {count > 0 && <span className="navbar__cart-badge">{count}</span>}
        </button>
      </div>
    </nav>
  );
}
