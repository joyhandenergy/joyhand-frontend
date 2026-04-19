"use client";
import Image from "next/image";
import Link from "next/link";
import { 
  PiYoutubeLogo, 
  PiTiktokLogo, 
  PiInstagramLogo,
  PiFacebookLogo,
  PiPinterestLogo,
  PiGlobe,
  PiFactory,
  PiBuilding
} from "react-icons/pi";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  const globalOffices = [
    {
      name: "USA - Headquarters",
      location: "Montgomery, AL",
      address: "445 Dexter Avenue, Suite 4050, Montgomery, AL 36104",
      icon: <PiBuilding size={14} />,
      link: "https://maps.google.com/?q=445+Dexter+Avenue+Suite+4050+Montgomery+AL+36104"
    },
    {
      name: "China - Manufacturing Facility",
      location: "Guangzhou, Guangdong",
      address: "No. 7, Nansha District, Guangzhou 511400, Guangdong, China",
      icon: <PiFactory size={14} />,
      link: "https://maps.google.com/?q=No.+7,+Nansha+District,+Guangzhou+511400,+Guangdong,+China",
      featured: true
    },
    {
      name: "Australia - Pacific Office",
      location: "Melbourne, VIC",
      address: "157 A'Beckett Street, Melbourne VIC 3000, Australia",
      icon: <PiGlobe size={14} />,
      link: "https://maps.google.com/?q=157+A%27Beckett+Street+Melbourne+VIC+3000"
    },
    {
      name: "Nigeria - Africa Office",
      location: "Lagos, Nigeria",
      address: "New Mandilas International Market, Trade Fair, Ojo, Lagos, Nigeria",
      icon: <PiGlobe size={14} />,
      link: "https://maps.google.com/?q=Trade+Fair+Ojo+Lagos+Nigeria"
    }
  ];

  return (
    <footer className="footer">
      <div className="container footer__container">
        {/* BRAND SECTION */}
        <div className="footer__brand">
          <Link href="/" className="footer__logo" aria-label="JoyHand Energy – Manufacturer">
            <Image 
              src="/images/logos/joyhandLogo.png" 
              className="footer__logo-img"
              alt="JoyHand Energy – Premium Battery & E‑Mobility Manufacturer"
              width={150} 
              height={50} 
              priority 
              style={{ 
                filter: "brightness(0) invert(1)", 
                display: "block",
                height: "auto" 
              }}
            />
          </Link>
          <p className="footer__description">
            ISO 9001:2025 certified manufacturer of premium energy storage systems, 
            solar inverters, and electric mobility solutions. Direct OEM/ODM supply 
            for global distributors.
          </p>
          <div className="footer__social">
            <a 
              href="https://www.youtube.com/@JoyHandSolar" 
              className="footer__social-link" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="YouTube"
            >
              <PiYoutubeLogo size={18} />
            </a>
            <a 
              href="https://www.tiktok.com/@joyhandsolar" 
              className="footer__social-link" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="TikTok"
            >
              <PiTiktokLogo size={18} />
            </a>
            <a 
              href="https://www.facebook.com/JoyHandEnergy" 
              className="footer__social-link" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Facebook"
            >
              <PiFacebookLogo size={18} />
            </a>
            <a 
              href="https://www.instagram.com/joyhandenergy/" 
              className="footer__social-link" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Instagram"
            >
              <PiInstagramLogo size={18} />
            </a>
            <a 
              href="https://www.pinterest.com/joyhandenergy/" 
              className="footer__social-link" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Pinterest"
            >
              <PiPinterestLogo size={18} />
            </a>
        </div>
        </div>

        {/* SOLUTIONS COLUMN */}
        <div className="footer__column">
          <h4 className="footer__title">Solutions</h4>
          <ul className="footer__list">
            <li><Link href="/products/solutions/storage-batteries" className="footer__link">Storage Batteries</Link></li>
            <li><Link href="/products/solutions/solar-inverters" className="footer__link">Solar Inverters</Link></li>
            <li><Link href="/products/solutions/portable-power-stations" className="footer__link">Portable Power Stations</Link></li>
            <li><Link href="/products/solutions/electric-mobility" className="footer__link">Electric Mobility</Link></li>
          </ul>
        </div>

        {/* COMPANY COLUMN */}
        <div className="footer__column">
          <h4 className="footer__title">Company</h4>
          <ul className="footer__list">
            <li><Link href="/about-us" className="footer__link">About Us</Link></li>
            <li><Link href="services" className="footer__link">Manufacturing Capabilities</Link></li>
            <li><Link href="/blog" className="footer__link">Industry Insights</Link></li>
            <li><Link href="/contact-us" className="footer__link">Contact Us</Link></li>
          </ul>
        </div>

        {/* GLOBAL OFFICES COLUMN */}
        <div className="footer__column">
          <h4 className="footer__title">Global Presence</h4>
          <ul className="footer__list">
            {globalOffices.map((office, idx) => (
              <li key={idx} className="footer__global-office">
                <a 
                  href={office.link} 
                  className="footer__global-link" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={`${office.name} - ${office.address}`}
                >
                  <span className="footer__global-icon">{office.icon}</span>
                  <div>
                    <strong className="footer__global-name">{office.name}</strong>
                    <span className="footer__global-location">{office.location}</span>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="footer__bottom">
        <div className="container footer__bottom-container">
          <div className="footer__legal-links">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
            <Link href="/cookie-policy">Cookie Policy</Link>
          </div>
          <p className="footer__copyright">© {year} JoyHand Energy. All Rights Reserved.</p>
          <p className="footer__credit">
            ISO 9001:2025 Certified Manufacturer | USA | China | Australia | Nigeria
          </p>
        </div>
      </div>
    </footer>
  );
}