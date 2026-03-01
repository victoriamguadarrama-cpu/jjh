import { useState } from "react";
import { menuData } from "../../data/menuData";
import MenuSection from "./MenuSection";
import OrderSummary from "./OrderSummary";
import "./Menu.css";

export default function Menu() {
  const [activeTab, setActiveTab] = useState("appetizers");

  return (
    <div className="menu-page page-enter">
      <div className="menu-page_header">
        <div className="container">
          <h1 className="menu-page_title">Build Your Menu</h1>
          <p className="menu-page_sub">
            Select items from each category. Prices shown are per person. When
            you're done, you can send your selections directly to our
            coordinators!
          </p>
        </div>
      </div>

      <div className="menu-page_tabs">
        <div className="container">
          <div className="menu-tabs">
            {Object.entries(menuData).map(([key, section]) => (
              <button
                key={key}
                className={`menu-tab ${activeTab === key ? "menu-tab--active" : ""}`}
                onClick={() => setActiveTab(key)}
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container">
        <div className="menu-page_body">
          <div className="menu-page_sections">
            <MenuSection
              key={activeTab}
              sectionKey={activeTab}
              section={menuData[activeTab]}
            />
          </div>
          <div className="menu-page_sidebar">
            <OrderSummary />
          </div>
        </div>
      </div>
    </div>
  );
}
