import './About.css';

export default function About() {
  return (
    <div className="about page-enter">

      {/* Hero */}
      <div className="about-hero">
        <div className="container">
          <h1 className="about-hero_title">About Us</h1>
          <p className="about-hero_sub">
            Full-service catering for weddings, corporate events, and celebrations
            across northern Utah and southern Idaho.
          </p>
        </div>
      </div>

      {/* About Us */}
      <section className="about-section">
        <div className="container about-section_inner">
          <div className="about-section_image">
            <img src="/images/about-team.avif" alt="Off Premise Catering" />
          </div>
          <div className="about-section_text">
            <h2>Off Premise Catering</h2>
            <p>
              Based in Logan, UT since 2004, our catering company specializes in creating
              unforgettable experiences for weddings, corporate parties, family gatherings,
              birthdays, and more. Our team is dedicated to providing exceptional service
              and offers a variety of menus to fit your needs.
            </p>
            <p>
              We strive to exceed expectations at every event we cater, so you can sit
              back, relax, and enjoy the celebration while we take care of the details.
              With our 20 years of catering experience, we guarantee that your event
              will be a success.
            </p>
          </div>
        </div>
      </section>

      {/* Our Kitchens */}
      <section className="about-section about-section--dark">
        <div className="container about-section_inner">
          <div className="about-section_text">
            <h2>Our Kitchens</h2>
            <p>
              Our kitchens at the Logan Country Club, Café Sabor, and Super Chix are
              the heart of Off-Premise Catering. With a dedication to sourcing quality
              ingredients, we craft delicious and visually stunning dishes for your events.
            </p>
            <p>
              From menu creation and customization to the final presentation, our team
              ensures every detail is perfect — delivering an unforgettable dining
              experience for you and your guests. Whether it's an intimate gathering or
              a grand celebration, our commitment to excellence remains unwavering.
            </p>
            <div className="about-section_locations">
              <div className="location-pill">Logan Country Club</div>
              <div className="location-pill">Café Sabor</div>
              <div className="location-pill">Super Chix</div>
            </div>
          </div>
          <div className="about-section_image">
            <img src="/images/super-chix-sandwich.avif" alt="Super Chix sandwich" />
          </div>
        </div>
      </section>

    </div>
  );
}