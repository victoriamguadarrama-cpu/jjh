import { useCart } from "../../store/CartContext";
import "./OrderSummary.css";

export default function OrderSummary() {
  const { menuSelections, getMenuTotal, clearMenuSelections } = useCart();
  const items = Object.values(menuSelections);
  const total = getMenuTotal();

  function buildMailto() {
    const subject = encodeURIComponent(
      "Catering Menu Inquiry — Off Premise Catering",
    );
    const itemList = items
      .map(
        (i) =>
          `  • ${i.name}${i.price > 0 ? ` ($${i.price}/pp)` : " (included)"}`,
      )
      .join("\n");
    const body = encodeURIComponent(
      `Hello,\n\nI am interested in catering and have selected the following menu items:\n\n${itemList}\n\nEstimated per-person cost (food selections): $${total.toFixed(2)}/pp\n\nPlease contact me to discuss availability, final pricing, and event details.\n\nThank you!`,
    );
    return `mailto:victoria@cafesabor.com?subject=${subject}&body=${body}`;
  }

  return (
    <div className="order-summary">
      <div className="order-summary_header">
        <h3>Your Selection</h3>
        <span className="order-summary_count">
          {items.length} item{items.length !== 1 ? "s" : ""}
        </span>
      </div>

      {items.length === 0 ? (
        <p className="order-summary_empty">
          Click items from the menu to add them to your selection.
        </p>
      ) : (
        <>
          <ul className="order-summary_list">
            {items.map((item) => (
              <li key={item.id} className="order-summary_item">
                <span>{item.name}</span>
                <span>{item.price > 0 ? `$${item.price}` : "Incl."}</span>
              </li>
            ))}
          </ul>
          <div className="order-summary_total">
            <span>Est. Per Person</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <p className="order-summary_disclaimer">
            Prices shown are per person for food selections. Final pricing
            includes staffing, rentals, and service — contact us for a full
            quote.
          </p>
          <a
            href={buildMailto()}
            className="btn-primary order-summary_email-btn"
          >
            Send Inquiry
          </a>
          <button
            className="order-summary_clear"
            onClick={clearMenuSelections}
          >
            Clear All
          </button>
        </>
      )}
    </div>
  );
}
