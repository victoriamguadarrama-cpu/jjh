import { useState, useEffect } from "react";
import "./Home.css";

const galleryImages = [
  { src: "/images/gallery/buffet.avif", alt: "Catering buffet spread" },
  { src: "/images/gallery/cake.avif", alt: "Elegant celebration cake" },
  { src: "/images/gallery/chicken.avif", alt: "Plated chicken entrée" },
  { src: "/images/gallery/table.avif", alt: "Event table setting" },
  { src: "/images/gallery/chip.avif", alt: "Chip" },
  { src: "/images/gallery/creme_brule.avif", alt: "Crème brûlée dessert" },
  { src: "/images/gallery/fruit_cup.avif", alt: "Fruit cup arrangement" },
  { src: "/images/gallery/steak.avif", alt: "Plated steak entrée" },
  { src: "/images/gallery/crepes.avif", alt: "Fresh crepes" },
  { src: "/images/gallery/dessert_cart.avif", alt: "Dessert cart display" },
  { src: "/images/gallery/tacos.avif", alt: "Taco spread" },
  { src: "/images/gallery/dessert1.avif", alt: "Dessert presentation" },
  { src: "/images/gallery/dessert2.avif", alt: "Dessert selection" },
  { src: "/images/gallery/donuts.avif", alt: "Donut display" },
  { src: "/images/gallery/fruit.avif", alt: "Fresh fruit display" },
  { src: "/images/gallery/lava_cakes.avif", alt: "Chocolate lava cakes" },
  { src: "/images/gallery/cheese_fruit.avif", alt: "Cheese and fruit charcuterie board" },
  { src: "/images/gallery/cake2.avif", alt: "Decorated celebration cake" }
];

const VISIBLE = 3;
const totalGroups = Math.ceil(galleryImages.length / VISIBLE);

export default function Home() {
  const [group, setGroup] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setGroup((prev) => (prev + 1) % totalGroups);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const visibleImages = galleryImages.slice(
    group * VISIBLE,
    group * VISIBLE + VISIBLE,
  );

  return (
    <div className="home page-enter">
      {/* Hero */}
      <section className="hero">
        <div className="hero_overlay" />
        <div className="container hero_content">
          <p className="hero_eyebrow">Full-Service Catering · Logan, Utah</p>
          <h1 className="hero_title">
            Culinary Excellence
            <br />
            <em>For Every Occasion</em>
          </h1>
          <p className="hero_sub">
            Weddings, corporate gatherings, and celebrations — crafted with
            fresh, seasonal ingredients and legendary service.
          </p>
          <div className="hero_actions">
            <a href="/menu" className="btn-primary">
              Build Your Menu
            </a>
            <a href="/shop" className="btn-primary">
              Café Sabor Shop
            </a>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="gallery">
        <div className="container">
          <p className="gallery_eyebrow">A Taste of What We Do</p>
          <h2 className="gallery_title">Crafted for Every Occasion</h2>
          <div className="gallery_grid">
            {visibleImages.map((img) => (
              <div key={img.src} className="gallery_card">
                <img src={img.src} alt={img.alt} />
              </div>
            ))}
          </div>
          <div className="gallery_dots">
            {Array.from({ length: totalGroups }).map((_, i) => (
              <button
                key={i}
                className={`gallery_dot${i === group ? " active" : ""}`}
                onClick={() => setGroup(i)}
                aria-label={`Go to group ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features strip */}
      <section className="features">
        <div className="container features_grid">
          <div className="feature">
            <div className="feature_icon">✦</div>
            <h3>Custom Menus</h3>
            <p>
              Every event is unique. Browse our full menu and build a selection
              tailored to your guests.
            </p>
          </div>
          <div className="feature">
            <div className="feature_icon">✦</div>
            <h3>Legendary Service</h3>
            <p>
              We believe "good enough" isn't good enough. Our team brings
              professionalism to every detail.
            </p>
          </div>
          <div className="feature">
            <div className="feature_icon">✦</div>
            <h3>Idaho & Utah</h3>
            <p>
              Proudly serving events across northern Utah and southern Idaho
              from our Logan base.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
