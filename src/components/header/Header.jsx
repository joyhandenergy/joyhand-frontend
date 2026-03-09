"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import "./Header.css";
import {
  PiPhone,
  PiEnvelopeSimple,
  PiList,
  PiCaretDownBold,
  PiX
} from "react-icons/pi";
import { usePathname } from "next/navigation";

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

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const pathName = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setActiveDropdown(null);
  };

  const handleMobileDropdown = (name, e) => {
    if (window.innerWidth <= 992) {
      e.preventDefault();
      setActiveDropdown(activeDropdown === name ? null : name);
    }
  };

  return (
    <header className="header">

      <div className="header__top">
        <div className="container header__top-container">
          <div className="header__contact">

            <a href="tel:+8613060850617" className="header__contact-item">
              <PiPhone size={18} color="var(--accent-color)" />
              +8613060850617
            </a>

            <a href="mailto:info@joyhand.com" className="header__contact-item">
              <PiEnvelopeSimple size={18} color="var(--accent-color)" />
              info@joyhand.com
            </a>

          </div>
        </div>
      </div>

      <div className="header__main">
        <div className="container header__main-container">

          <Link
            href="/"
            className="header__logo"
            onClick={() => setIsMenuOpen(false)}
          >
            <Image
              src="/logos/joyhand-logo.png"
              alt="JOYHAND Logo"
              width={140}
              height={45}
              className="header__logo-img"
              priority
            />
          </Link>

          <nav className="header__nav">
            {links.map((link, idx) => (
              <div key={idx} className="header__nav-item">

                <Link
                  href={link.href}
                  className={`header__nav-link ${
                    pathName === link.href
                      ? "header__nav-link--active"
                      : ""
                  }`}
                >
                  {link.name}
                  {link.subLinks && <PiCaretDownBold />}
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

          <div className="header__actions">

            <Link
              href="/quote"
              className="btn btn--outline header__cta-desktop"
            >
              Get a Quote
            </Link>

            <button
              className="header__mobile-toggle"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <PiX size={32} /> : <PiList size={32} />}
            </button>

          </div>

        </div>
      </div>

      <div
        className={`header__mobile-menu ${
          isMenuOpen ? "header__mobile-menu--open" : ""
        }`}
      >
        <nav className="header__mobile-nav">

          {links.map((link, idx) => (
            <div key={idx} className="header__mobile-item">

              <div
                className="header__mobile-link-wrapper"
                onClick={(e) =>
                  link.subLinks && handleMobileDropdown(link.name, e)
                }
              >

                <Link
                  href={link.href}
                  className="header__mobile-link"
                  onClick={() =>
                    !link.subLinks && setIsMenuOpen(false)
                  }
                >
                  {link.name}
                </Link>

                {link.subLinks && (
                  <PiCaretDownBold
                    className={`header__mobile-caret ${
                      activeDropdown === link.name
                        ? "header__mobile-caret--open"
                        : ""
                    }`}
                  />
                )}

              </div>

              {link.subLinks && (
                <ul
                  className={`header__mobile-sub ${
                    activeDropdown === link.name
                      ? "header__mobile-sub--open"
                      : ""
                  }`}
                >
                  {link.subLinks.map((sub, sIdx) => (
                    <li key={sIdx}>
                      <Link
                        href={sub.href}
                        className="header__mobile-sub-link"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {sub.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}

            </div>
          ))}

          <Link
            href="/quote"
            className="btn btn--primary mt-4"
            onClick={() => setIsMenuOpen(false)}
          >
            Get a Quote
          </Link>

        </nav>
      </div>

    </header>
  );
};

export default Header;