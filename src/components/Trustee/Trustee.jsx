import Image from "next/image";
import "./Trustee.css";
import { partners } from "../../data";

const Trustee = () => {
  const scrollingPartners = [...partners, ...partners];

  return (
    <section className="trustee">
      <div className="container">
        <div className="trustee__content">
          <div className="trustee__header text-center">
            <h3 className="trustee__title">Trusted by</h3>
            <span className="trustee__divider" />
          </div>

          <div className="trustee__marquee">
            <div className="trustee__track">
              {scrollingPartners.map((partner, index) => (
                <div 
                  key={`logo-${index}`} // Unique key using the map index
                  className="trustee__item"
                >
                  <div className="trustee__logo-container">
                    <Image
                      src={partner.logo}
                      alt={partner.alt || "Partner"}
                      fill // Fills the container while maintaining constraints
                      className="trustee__logo"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trustee;
