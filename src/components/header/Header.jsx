"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  PiPhone,
  PiEnvelopeSimple,
  PiList,
  PiCaretDownBold,
  PiX
} from "react-icons/pi";
import PopUpModal from "../contactForm/PopUpModal";
import "./Header.css";

const links = [
  { name: "About Us", href: "/about_Us" },
  {
    name: "Products",
    href: "/products",
    subLinks: [
      { name: "Electric Mobility", href: "/products?category=Electric%20Mobility" },
      { name: "Storage Battery", href: "/products?category=Storage%20Battery" },
      { name: "Solar Inverters", href: "/products?category=Solar%20Inverters" }
    ]
  },
  { name: "Services", href: "/services" },
  { name: "Contact Us", href: "/contact_Us" },
  { name: "Blog", href: "/blog" }
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const pathName = usePathname();

  // Handle scroll effect for glassmorphism sharpening
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking a link
  const closeMenu = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  const handleMobileDropdown = (name, e) => {
    if (window.innerWidth <= 992) {
      e.preventDefault();
      setActiveDropdown(activeDropdown === name ? null : name);
    }
  };

  return (
    <>
      <header className={`header ${scrolled ? "header--scrolled" : ""}`}>
        
        {/* TOP BAR - Dark Premium Style */}
        <div className="header__top">
          <div className="container header__top-container">
            <div className="header__contact">
              <a href="tel:+8613060850617" className="header__contact-item">
                <PiPhone size={14} />
                <span>+86 130 6085 0617</span>
              </a>
              <a href="mailto:info@joyhand.com" className="header__contact-item">
                <PiEnvelopeSimple size={14} />
                <span>info@joyhand.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* MAIN NAV - Glassmorphism Style */}
        <div className="header__main">
          <div className="container header__main-container">
            
            {/* LOGO */}
            <Link href="/" className="header__logo" onClick={closeMenu}>
              <Image
                src="/logos/joyhand-logo.png"
                alt="JOYHAND Logo"
                width={150}
                height={50}
                className="header__logo-img"
                priority
              />
            </Link>

            {/* DESKTOP NAV */}
            <nav className="header__nav">
              {links.map((link, idx) => (
                <div key={idx} className="header__nav-item">
                  <Link
                    href={link.href}
                    className={`header__nav-link ${
                      pathName === link.href ? "header__nav-link--active" : ""
                    }`}
                  >
                    {link.name}
                    {link.subLinks && <PiCaretDownBold className="header__nav-icon" />}
                  </Link>

                  {link.subLinks && (
                    <ul className="header__dropdown">
                      {link.subLinks.map((sub, sIdx) => (
                        <li key={sIdx}>
                          <Link
                            href={sub.href}
                            className="header__dropdown-link"
                          >
                            {sub.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </nav>

            {/* ACTIONS */}
            <div className="header__actions">
              <button
                className="btn btn--outline header__cta-desktop"
                onClick={() => setIsModalOpen(true)}
              >
                Get a Quote
              </button>

              <button 
                className="header__mobile-toggle" 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle Menu"
              >
                {isMenuOpen ? <PiX size={32} /> : <PiList size={32} />}
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE OVERLAY MENU - Dark Premium Theme */}
        <div className={`header__mobile-menu ${isMenuOpen ? "header__mobile-menu--open" : ""}`}>
          <nav className="header__mobile-nav">
            {links.map((link, idx) => (
              <div key={idx} className="header__mobile-item">
                <div
                  className="header__mobile-link-wrapper"
                  onClick={(e) => link.subLinks && handleMobileDropdown(link.name, e)}
                >
                  <Link
                    href={link.href}
                    className="header__mobile-link"
                    onClick={() => !link.subLinks && closeMenu()}
                  >
                    {link.name}
                  </Link>

                  {link.subLinks && (
                    <PiCaretDownBold
                      className={`header__mobile-caret ${
                        activeDropdown === link.name ? "header__mobile-caret--open" : ""
                      }`}
                    />
                  )}
                </div>

                {link.subLinks && (
                  <ul className={`header__mobile-sub ${
                    activeDropdown === link.name ? "header__mobile-sub--open" : ""
                  }`}>
                    {link.subLinks.map((sub, sIdx) => (
                      <li key={sIdx}>
                        <Link
                          href={sub.href}
                          className="header__mobile-sub-link"
                          onClick={closeMenu}
                        >
                          {sub.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            <button
              className="btn btn--primary mt-4 w-full"
              style={{ width: '100%' }}
              onClick={() => {
                closeMenu();
                setIsModalOpen(true);
              }}
            >
              Get a Quote
            </button>
          </nav>
        </div>
      </header>

      <PopUpModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        mode="quote"
      />
    </>
  );
}
