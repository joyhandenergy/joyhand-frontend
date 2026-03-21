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
  PiX,
  PiArrowRight
} from "react-icons/pi";
import PopUpModal from "../contactForm/PopUpModal";
import "./Header.css";

const links = [
  { name: "About Us", href: "/about_Us" },
  {
    name: "Products",
    href: "/products",
    subLinks: [
      { name: "Storage Batteries", href: "/products/solutions/storage-batteries" },
      { name: "Solar Inverters", href: "/products/solutions/solar-inverters" },
      { name: "Portable Power Stations", href: "/products/solutions/portable-power-stations" },
      { name: "Electric Mobility", href: "/products/solutions/electric-mobility" }
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

  // Handle scroll effect for glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking a link
  const closeMenu = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  // Handle mobile dropdown
  const handleMobileDropdown = (name, e) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false);
        setActiveDropdown(null);
      }
    };
    
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className={`header ${scrolled ? "header--scrolled" : ""}`}>
        
        {/* TOP BAR - Desktop only */}
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

        {/* MAIN NAV */}
        <div className="header__main">
          <div className="container header__main-container">
            
            {/* LOGO */}
            <Link 
              href="/" 
              className="header__logo" 
              onClick={closeMenu}
              aria-label="JoyHand Home"
            >
              <Image
                src="/logos/joyhand-logo.png"
                alt="JOYHAND Energy - Global Sourcing Partner"
                width={150}
                height={50}
                className="header__logo-img"
                priority
              />
            </Link>

            {/* DESKTOP NAV (992px+) */}
            <nav className="header__nav" aria-label="Desktop navigation">
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
                    <ul className="header__dropdown" aria-label={`${link.name} submenu`}>
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
                aria-label="Get a quote"
              >
                Get a Quote
              </button>

              <button 
                className="header__mobile-toggle" 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? <PiX size={32} /> : <PiList size={32} />}
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE OVERLAY MENU */}
        <div 
          className={`header__mobile-menu ${isMenuOpen ? "header__mobile-menu--open" : ""}`}
          aria-hidden={!isMenuOpen}
        >
          <nav className="header__mobile-nav" aria-label="Mobile navigation">
            {links.map((link, idx) => (
              <div key={idx} className="header__mobile-item">
                <div
                  className="header__mobile-link-wrapper"
                  onClick={(e) => link.subLinks && handleMobileDropdown(link.name, e)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      handleMobileDropdown(link.name, e);
                    }
                  }}
                  aria-expanded={activeDropdown === link.name}
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
                      aria-hidden="true"
                    />
                  )}
                </div>

                {link.subLinks && (
                  <ul 
                    className={`header__mobile-sub ${
                      activeDropdown === link.name ? "header__mobile-sub--open" : ""
                    }`}
                    aria-label={`${link.name} submenu`}
                  >
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

            {/* Mobile Contact Info */}
            <div className="header__mobile-contact">
              <a href="tel:+8613060850617" className="header__mobile-contact-item">
                <PiPhone size={18} />
                <span>+86 130 6085 0617</span>
              </a>
              <a href="mailto:info@joyhand.com" className="header__mobile-contact-item">
                <PiEnvelopeSimple size={18} />
                <span>info@joyhand.com</span>
              </a>
            </div>

            <button
              className="btn btn--primary header__mobile-cta"
              onClick={() => {
                closeMenu();
                setIsModalOpen(true);
              }}
            >
              Get a Quote <PiArrowRight />
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