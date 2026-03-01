import { useState } from "react";
import { useCart } from "../../store/CartContext";
import "./Checkout.css";

export default function Checkout() {
  const { cartItems, getCartTotal, clearCart } = useCart();
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    notes: "",
  });

  const items = Object.entries(cartItems);

  // Redirects to cart if somehow they land here with nothing
  if (items.length === 0 && !orderPlaced) {
    return (
      <div className="checkout page-enter">
        <div className="checkout_header">
          <div className="container">
            <h1 className="checkout_title">Checkout</h1>
          </div>
        </div>
        <div className="container checkout_body">
          <div className="checkout_empty">
            <p>Your cart is empty.</p>
            <a href="/shop" className="btn-primary">Browse the Shop</a>
          </div>
        </div>
      </div>
    );
  }

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    // Simulate a brief processing delay for UX
    setTimeout(() => {
      clearCart();
      setOrderPlaced(true);
      setSubmitting(false);
    }, 800);
  }

  if (orderPlaced) {
    return (
      <div className="checkout page-enter">
        <div className="checkout_header">
          <div className="container">
            <h1 className="checkout_title">Order Received!</h1>
            <p className="checkout_sub">Thanks, {form.name}!</p>
          </div>
        </div>
        <div className="container checkout_body">
          <div className="checkout_confirmation">
            <p>We'll be reaching out to <strong>{form.email}</strong> shortly to confirm your order and arrange payment.</p>
            <a href="/shop" className="btn-primary">Back to Shop</a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout page-enter">
      <div className="checkout_header">
        <div className="container">
          <h1 className="checkout_title">Checkout</h1>
          <p className="checkout_sub">Almost there — just a few details so we can reach you.</p>
        </div>
      </div>

      <div className="container checkout_body">
        <div className="checkout_layout">

          {/* Contact Form */}
          <div className="checkout_form-section">
            <h2 className="checkout_section-title">Your Information</h2>
            <form className="checkout_form" onSubmit={handleSubmit}>
              <div className="checkout_field">
                <label htmlFor="name">Full Name *</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Jane Smith"
                />
              </div>

              <div className="checkout_field">
                <label htmlFor="email">Email Address *</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="jane@example.com"
                />
              </div>

              <div className="checkout_field">
                <label htmlFor="phone">Phone Number *</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  placeholder="(435) 555-0100"
                />
              </div>

              <div className="checkout_field">
                <label htmlFor="notes">Order Notes</label>
                <textarea
                  id="notes"
                  name="notes"
                  value={form.notes}
                  onChange={handleChange}
                  placeholder="Any special requests or questions?"
                  rows={4}
                />
              </div>

              <button
                type="submit"
                className="btn-primary"
                disabled={submitting}
              >
                {submitting ? "Placing Order…" : "Place Order"}
              </button>
              <a href="/cart" className="btn-secondary">Back to Cart</a>
            </form>
          </div>

          {/* Order Summary */}
          <div className="checkout_summary">
            <h2 className="checkout_section-title">Order Summary</h2>
            <div className="checkout_items">
              {items.map(([key, item]) => (
                <div key={key} className="checkout_item">
                  <div className="checkout_item-info">
                    <p className="checkout_item-title">{item.product.title}</p>
                    <p className="checkout_item-meta">
                      Size: {item.size} · Color: {item.color} · Qty: {item.quantity}
                    </p>
                  </div>
                  <p className="checkout_item-price">${item.product.price * item.quantity}.00</p>
                </div>
              ))}
            </div>
            <div className="checkout_total">
              <span>Total</span>
              <span>${getCartTotal()}.00</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}