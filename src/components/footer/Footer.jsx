"use client";
import Image from "next/image";
import Link from "next/link";
import { 
  PiXLogo, 
  PiFacebookLogo, 
  PiInstagramLogo, 
  PiLinkedinLogo, 
  PiEnvelopeSimple, 
  PiPhone, 
  PiMapPin,
  PiGlobe,
  PiFactory,
  PiBuilding
} from "react-icons/pi";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  // Global offices data - matches contact page
  const globalOffices = [
    {
      name: "USA - Headquarters",
      location: "Montgomery, AL",
      icon: <PiBuilding size={14} />,
      link: "https://maps.google.com"
    },
    {
      name: "China - Sourcing Hub",
      location: "Guangzhou",
      icon: <PiFactory size={14} />,
      link: "https://maps.google.com",
      featured: true
    },
    {
      name: "Australia - Pacific Office",
      location: "Melbourne",
      icon: <PiGlobe size={14} />,
      link: "https://maps.google.com"
    },
    {
      name: "Nigeria - Africa Office",
      location: "Lagos",
      icon: <PiGlobe size={14} />,
      link: "https://maps.google.com"
    }
  ];

  return (
    <footer className="footer">
      <div className="container footer__container">
        {/* BRAND SECTION */}
        <div className="footer__brand">
          <Link href="/" className="footer__logo" aria-label="JoyHand Home">
            <Image 
              src="/logos/joyhand-logo.png" 
              className="footer__logo-img"
              alt="JOYHAND Energy - Global Sourcing Partner" 
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
            Your global partner in sustainable energy. Specializing in OEM/ODM sourcing of 
            Tier-1 solar storage and e-mobility solutions from vetted manufacturing partners.
          </p>
          <div className="footer__social">
            <a href="#" className="footer__social-link" aria-label="LinkedIn"><PiLinkedinLogo size={18} /></a>
            <a href="#" className="footer__social-link" aria-label="X (Twitter)"><PiXLogo size={18} /></a>
            <a href="#" className="footer__social-link" aria-label="Facebook"><PiFacebookLogo size={18} /></a>
          </div>
        </div>

        {/* SOLUTIONS COLUMN - Updated with correct links */}
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
            <li><Link href="/about" className="footer__link">About Us</Link></li>
            <li><Link href="/services" className="footer__link">Sourcing Services</Link></li>
            <li><Link href="/blog" className="footer__link">Sourcing Insights</Link></li>
            <li><Link href="/contact" className="footer__link">Contact Us</Link></li>
          </ul>
        </div>

        {/* GLOBAL OFFICES COLUMN - New */}
        <div className="footer__column">
          <h4 className="footer__title">Global Offices</h4>
          <ul className="footer__list">
            {globalOffices.map((office, idx) => (
              <li key={idx} className="footer__global-office">
                <a href={office.link} className="footer__global-link" target="_blank" rel="noopener noreferrer">
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
          </div>
          <p className="footer__copyright">© {year} JOYHAND Energy. All Rights Reserved.</p>
          <p className="footer__credit">
            Global Sourcing Partner | USA | China | Australia | Nigeria
          </p>
        </div>
      </div>
    </footer>
  );
}