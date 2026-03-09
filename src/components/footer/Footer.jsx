"use client";
import Image from "next/image";
import Link from "next/link";
import { PiXLogo, PiFacebookLogo, PiInstagramLogo, PiLinkedinLogo, PiEnvelopeSimple, PiPhone, PiMapPin } from "react-icons/pi";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__container">
        {/* BRAND SECTION */}
        <div className="footer__brand">
          <Link href="/" className="footer__logo">
            <Image src="/logos/joyhand-logo.png" alt="JOYHAND Logo" width={150} height={50} />
          </Link>
          <p className="footer__description">
            Leading the transition to sustainable energy with high-performance solar batteries 
            and smart power storage solutions for homes and businesses.
          </p>
          <div className="footer__social">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="Facebook"><PiFacebookLogo size={24} /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="Instagram"><PiInstagramLogo size={24} /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="LinkedIn"><PiLinkedinLogo size={24} /></a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="X"><PiXLogo size={24} /></a>
          </div>
        </div>

        {/* NAVIGATION COLUMN */}
        <div className="footer__column">
          <h4 className="footer__title">Quick Links</h4>
          <ul className="footer__list">
            <li><Link href="/" className="footer__link">Homepage</Link></li>
            <li><Link href="/about-us" className="footer__link">About Us</Link></li>
            <li><Link href="/products" className="footer__link">Solar Batteries</Link></li>
            <li><Link href="/products" className="footer__link">Solar Inverter</Link></li>
            <li><Link href="/services" className="footer__link">Our Services</Link></li>
            <li><Link href="/blog" className="footer__link">Energy Blog</Link></li>
          </ul>
        </div>

        {/* CONTACT COLUMN */}
        <div className="footer__column">
          <h4 className="footer__title">Contact Us</h4>
          <ul className="footer__list">
            <li className="footer__contact-item">
              <PiEnvelopeSimple size={20} className="footer__icon" />
              <a href="mailto:info@joyhand.com">info@joyhand.com</a>
            </li>
            <li className="footer__contact-item">
              <PiPhone size={20} className="footer__icon" />
              <a href="tel:+8613060850617">+86 130 6085 0617</a>
            </li>
            <li className="footer__contact-item">
              <PiMapPin size={20} className="footer__icon" />
              <span>2530 E South Blvd, Montgomery, AL, USA</span>
            </li>
          </ul>
        </div>

        {/* LEGAL COLUMN */}
        <div className="footer__column">
          <h4 className="footer__title">Legal</h4>
          <ul className="footer__list">
            <li><Link href="/privacy" className="footer__link">Privacy Policy</Link></li>
            <li><Link href="/terms" className="footer__link">Terms of Service</Link></li>
            <li><Link href="/cookies" className="footer__link">Cookie Policy</Link></li>
          </ul>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="footer__bottom">
        <div className="container footer__bottom-container">
          <p className="footer__copyright">© {year} JOYHAND Energy. All Rights Reserved.</p>
          <p className="footer__credit">Powered by Beraki Digital</p>
        </div>
      </div>
    </footer>
  );
}
