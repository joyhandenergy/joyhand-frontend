import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">

      {/* Background */}
      <div className="hero__background">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="hero__video"
        >
          <source
            src="/videos/heroImg/joyhand-hero-video.mp4"
            type="video/mp4"
          />
        </video>

        <div className="hero__overlay"></div>
      </div>

      {/* Content */}
      <div className="container hero__container">
        <div className="hero__content">

          <p className="hero__subtitle">
            Certified Solar & E-Vehicle OEM/ODM
          </p>

          <h1 className="hero__title">

            <span className="hero__title-line">
              Custom Energy &
            </span>

            <span className="hero__title-line hero__title-line--highlight">
              E-Mobility Solutions
            </span>

          </h1>

          <p className="hero__desc">
            JoyHand is a leading <strong>OEM/ODM supplier</strong> of
            high-performance <strong>lithium-ion batteries</strong>,
            <strong> solar inverters</strong>, and
            <strong> electric motorcycles</strong>. We offer scalable
            private label manufacturing and factory-direct solar
            solutions for global distributors.
          </p>

          <div className="hero__actions">

            <button className="btn hero__cta">
              Explore Products
            </button>

            <button className="btn btn--secondary hero__cta-secondary">
              Request Quote
            </button>

          </div>

        </div>
      </div>

      {/* Animated Graphic */}
      <div className="hero__sun-graphic"></div>

    </section>
  );
}