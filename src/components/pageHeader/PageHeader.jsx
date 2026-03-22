"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import "./PageHeader.css";

const PageHeader = ({ title, pageImage, subtitle }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <>
      <section className="page-header">
        {/* Background Image Layer - Using Next.js Image */}
        <div className="page-header__bg-wrapper">
          <Image
            src={pageImage}
            alt={`${title} - JOYHAND Energy`}
            fill
            className={`page-header__bg ${imageLoaded ? 'page-header__bg--loaded' : ''}`}
            priority
            quality={85}
            sizes="100vw"
            onLoad={() => setImageLoaded(true)}
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
            }}
          />
        </div>

        {/* Overlay */}
        <div className="page-header__overlay"></div>

        {/* Glow */}
        <div className="page-header__glow"></div>

        <div className="container page-header__container">
          <div className="page-header__content">
            <nav className="page-header__breadcrumb" aria-label="Breadcrumb">
              <Link href="/" className="page-header__breadcrumb-link">
                Home
              </Link>
              <span className="page-header__breadcrumb-separator" aria-hidden="true">/</span>
              <span className="page-header__breadcrumb-current" aria-current="page">
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
    </>
  );
};

export default PageHeader;