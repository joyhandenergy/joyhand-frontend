import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__background">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="hero__video"
        >
          <source src="/videos/heroImg/joyhand-hero-video.mp4" type="video/mp4" />
        </video>

        <div className="hero__overlay"></div>
      </div>

      <div className="container hero__container">
        <div className="hero__content">

          <p className="hero__subtitle">
            OEM & ODM Energy Storage Manufacturer
          </p>

          <h1 className="hero__title">
            <span className="hero__title-line">SOLAR</span>
            <span className="hero__title-line">STORAGE</span>
            <span className="hero__title-line hero__title-line--highlight">
              POWERED
            </span>
          </h1>

          <p className="hero__desc">
            Solar storage systems, lithium battery solutions, and electric
            mobility platforms engineered for global brands.
          </p>

          <button className="btn hero__cta">
            EXPLORE PRODUCTS
          </button>

        </div>
      </div>

      <div className="hero__sun-graphic"></div>
    </section>
  );
}