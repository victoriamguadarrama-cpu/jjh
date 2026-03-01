import { useCart } from "../../store/CartContext";
import "./Cart.css";

export default function Cart() {
  const { cartItems, removeFromCart, getCartTotal } = useCart();
  const items = Object.entries(cartItems);

  return (
    <div className="cart page-enter">
      <div className="cart_header">
        <div className="container">
          <h1 className="cart_title">Your Cart</h1>
          <p className="cart_sub">
            {items.length === 0
              ? "Your cart is empty."
              : `${items.length} item${items.length > 1 ? "s" : ""} in your cart`}
          </p>
        </div>
      </div>

      <div className="container cart_body">
        {items.length === 0 ? (
          <div className="cart_empty">
            <p>Looks like you haven't added anything yet.</p>
            <a href="/shop" className="btn-primary">
              Browse the Shop
            </a>
          </div>
        ) : (
          <>
            <div className="cart_items">
              {items.map(([key, item]) => (
                <div key={key} className="cart_item">
                  <div className="cart_item-img">
                    <img
                      src={`/images/${item.product.image}`}
                      alt={item.product.title}
                      onError={(e) => (e.target.style.display = "none")}
                    />
                  </div>
                  <div className="cart_item-info">
                    <h3>{item.product.title}</h3>
                    <p className="cart_item-meta">
                      Size: {item.size} · Color: {item.color}
                    </p>
                    <p className="cart_item-qty">Qty: {item.quantity}</p>
                  </div>
                  <div className="cart_item-right">
                    <p className="cart_item-price">
                      ${item.product.price * item.quantity}.00
                    </p>
                    <button
                      className="cart_remove"
                      onClick={() => removeFromCart(key)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart_summary">
              <div className="cart_total">
                <span>Total</span>
                <span>${getCartTotal()}.00</span>
              </div>
              <p className="cart_note">
                Review your items above, then proceed to checkout to enter your contact details.
              </p>
              <a href="/checkout" className="btn-primary">
                Proceed to Checkout
              </a>
              <a href="/shop" className="btn-secondary">
                Continue Shopping
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
}