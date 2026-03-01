import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer_inner">
        <div className="footer_brand">
          <div className="footer_brand-name">Off Premise Catering</div>
          <p>
            Full-service catering for weddings, corporate events, and
            celebrations across northern Utah and southern Idaho.
          </p>
        </div>
        <div className="footer_links">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/menu">Catering Menu</a>
            </li>
            <li>
              <a href="/shop">Café Sabor Shop</a>
            </li>
          </ul>
        </div>
        <div className="footer_contact">
          <h4>Contact</h4>
          <p>(435) 753-7070</p>
          <p>info@offpremisecatering.com</p>
          <p>Logan, Utah</p>
        </div>
      </div>
      <div className="footer_bottom">
        <p>
          © {new Date().getFullYear()} Off Premise Catering. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
