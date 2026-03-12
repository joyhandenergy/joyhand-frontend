"use client";

import Link from "next/link";
import "./PageHeader.css";

const PageHeader = ({ title, pageImage, subtitle }) => {
  return (
    <section
      className="page-header"
      style={{ backgroundImage: `url(${pageImage})` }}
    >

      {/* Overlay */}
      <div className="page-header__overlay"></div>

      {/* Soft energy glow to match hero */}
      <div className="page-header__glow"></div>

      <div className="container page-header__container">

        <div className="page-header__content">

          <nav className="page-header__breadcrumb">
            <Link href="/" className="page-header__breadcrumb-link">
              Home
            </Link>

            <span className="page-header__breadcrumb-separator">/</span>

            <span className="page-header__breadcrumb-current">
              {title}
            </span>
          </nav>

          <h1 className="page-header__title">
            {title}
          </h1>

          {subtitle && (
            <p className="page-header__description">
              {subtitle}
            </p>
          )}

        </div>

      </div>

    </section>
  );
};

export default PageHeader;