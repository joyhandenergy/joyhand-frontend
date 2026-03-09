"use client";

import Link from "next/link";
import "./PageHeader.css";

const PageHeader = ({ title, pageImage }) => {
  return (
    <section
      className="page-header"
      style={{ backgroundImage: `url(${pageImage})` }}
    >

      <div className="page-header__overlay"></div>

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

          <p className="page-header__description">
            Engineering the future of energy storage and electric mobility systems
          </p>

          <div className="page-header__accent-line"></div>

        </div>

      </div>

    </section>
  );
};

export default PageHeader;