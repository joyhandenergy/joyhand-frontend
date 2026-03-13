import Image from "next/image";
import "./TrustSignals.css";
import { partners } from "../../data";

const TrustSignals = () => {
  const scrollingPartners = [...partners, ...partners];

  return (
    <section className="trust">
      <div className="container">

        {/* SECTION HEADER */}
        <header className="trust__header text-center">
          <h2 className="trust__title">Trusted by Leading Energy Partners</h2>
          <p className="trust__subtitle">
            Working with distributors and clean-energy companies worldwide
          </p>
        </header>

        {/* LOGO MARQUEE */}
        <div className="trust__logos">
          <div className="trust__marquee">
            <div className="trust__track">

              {scrollingPartners.map((partner, index) => (
                <div key={index} className="trust__logo-item">

                  <div className="trust__logo-wrapper">
                    <Image
                      src={partner.logo}
                      alt={partner.alt || "Energy partner logo"}
                      fill
                      sizes="140px"
                      className="trust__logo"
                    />
                  </div>

                </div>
              ))}

            </div>
          </div>
        </div>

        {/* STATS */}
        <div className="trust__stats">

          <article className="trust__stat">
            <span className="trust__stat-number">50+</span>
            <p className="trust__stat-label">Wholesale Clients</p>
          </article>

          <article className="trust__stat">
            <span className="trust__stat-number">15MW+</span>
            <p className="trust__stat-label">Solar Capacity Delivered</p>
          </article>

          <article className="trust__stat">
            <span className="trust__stat-number">5,000+</span>
            <p className="trust__stat-label">E-Motorcycles Supplied</p>
          </article>

          <article className="trust__stat">
            <span className="trust__stat-number">12+</span>
            <p className="trust__stat-label">Countries Served</p>
          </article>

        </div>

      </div>
    </section>
  );
};

export default TrustSignals;