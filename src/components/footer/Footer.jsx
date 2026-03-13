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
  PiMapPin 
} from "react-icons/pi";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__container">
        {/* BRAND SECTION */}
        <div className="footer__brand">
          <Link href="/" className="footer__logo">
            {/* Added inline style filter as a fallback and ensured object-fit */}
            <Image 
              src="/logos/joyhand-logo.png" 
              className="footer__logo-img"
              alt="JOYHAND Energy" 
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
            <a href="#" className="footer__social-link" aria-label="X"><PiXLogo size={18} /></a>
            <a href="#" className="footer__social-link" aria-label="Facebook"><PiFacebookLogo size={18} /></a>
          </div>
        </div>

        {/* SOLUTIONS COLUMN */}
        <div className="footer__column">
          <h4 className="footer__title">Platforms</h4>
          <ul className="footer__list">
            <li><Link href="/products?cat=storage" className="footer__link"> Storage Batteries</Link></li>
            <li><Link href="/products?cat=inverters" className="footer__link"> Solar Inverters</Link></li>
            <li><Link href="/products?cat=portable" className="footer__link"> Portable Power</Link></li>
            <li><Link href="/services" className="footer__link"> OEM/ODM Services</Link></li>
          </ul>
        </div>

        {/* COMPANY COLUMN */}
        <div className="footer__column">
          <h4 className="footer__title">Company</h4>
          <ul className="footer__list">
            <li><Link href="/about" className="footer__link">Our Factory</Link></li>
            <li><Link href="/partnership" className="footer__link">Partnership Hub</Link></li>
            <li><Link href="/insights" className="footer__link">Energy Insights</Link></li>
            <li><Link href="/contact" className="footer__link">Contact Support</Link></li>
          </ul>
        </div>

        {/* GLOBAL OFFICE */}
        <div className="footer__column">
          <h4 className="footer__title">Global Office</h4>
          <ul className="footer__list">
            <li className="footer__contact-item">
              <PiMapPin className="footer__icon" />
              <span>Shenzhen Tech Park, China / AL, USA</span>
            </li>
            <li className="footer__contact-item">
              <PiEnvelopeSimple className="footer__icon" />
              <a href="mailto:partnership@joyhand.com">partnership@joyhand.com</a>
            </li>
            <li className="footer__contact-item">
              <PiPhone className="footer__icon" />
              <a href="tel:+8613060850617">+86 130 6085 0617</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-container">
          <div className="footer__legal-links">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </div>
          <p className="footer__copyright">© {year} JOYHAND Energy. All Rights Reserved.</p>
          <p className="footer__credit">Design by Beraki Digital</p>
        </div>
      </div>
    </footer>
  );
}
