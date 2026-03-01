import { useCart } from "../../store/CartContext";
import "./MenuSection.css";

const TAG_CLASSES = {
  GF: "tag-gf",
  "GF*": "tag-gf",
  V: "tag-v",
  Vegan: "tag-vegan",
};

export default function MenuSection({ sectionKey, section }) {
  const { toggleMenuSelection, menuSelections } = useCart();

  return (
    <div className="menu-section">
      <h2 className="menu-section_title">{section.label}</h2>
      {section.note && <p className="menu-section_note">{section.note}</p>}
      <div className="menu-section_items">
        {section.items.map((item) => {
          const selected = !!menuSelections[item.id];
          return (
            <button
              key={item.id}
              className={`menu-item${selected ? " menu-item--selected" : ""}`}
              onClick={() => toggleMenuSelection(item)}
            >
              <div className="menu-item_check">{selected ? "✓" : ""}</div>
              <div className="menu-item_body">
                <div className="menu-item_name">
                  {item.name}
                  {item.tags?.map((tag) => (
                    <span key={tag} className={`tag ${TAG_CLASSES[tag] || ""}`}>
                      {tag}
                    </span>
                  ))}
                </div>
                {item.note && (
                  <div className="menu-item_note">{item.note}</div>
                )}
              </div>
              <div className="menu-item_price">
                {item.price > 0 ? `$${item.price}/pp` : "Incl."}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
