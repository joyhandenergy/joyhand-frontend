"use client";
import Image from "next/image";
import Link from "next/link";
import { PiXLogo, PiFacebookLogo, PiInstagramLogo, PiLinkedinLogo, PiEnvelopeSimple, PiPhone, PiMapPin, PiArrowRight } from "react-icons/pi";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__container">
        {/* BRAND SECTION */}
        <div className="footer__brand">
          <Link href="/" className="footer__logo">
            {/* Using a light version of logo if background is dark */}
            <Image src="/logos/joyhand-logo.png" alt="JOYHAND Energy" width={150} height={50} priority />
          </Link>
          <p className="footer__description">
            Your global partner in sustainable energy. Specializing in OEM/ODM manufacturing of Tier-1 solar storage and e-mobility solutions.
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
            <li><Link href="/products?cat=storage" className="footer__link"><PiArrowRight /> Storage Batteries</Link></li>
            <li><Link href="/products?cat=inverters" className="footer__link"><PiArrowRight /> Solar Inverters</Link></li>
            <li><Link href="/products?cat=portable" className="footer__link"><PiArrowRight /> Portable Power</Link></li>
            <li><Link href="/services" className="footer__link"><PiArrowRight /> OEM/ODM Services</Link></li>
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
