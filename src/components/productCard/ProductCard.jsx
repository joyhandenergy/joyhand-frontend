"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ images, title, description, specifications, slug }) => {
  const thumbnail = images?.[0] || "/images/placeholder.jpg";
  const previewSpecs = specifications?.slice(0, 2);

  return (
    <article className="product-card">
      {/* FIXED: Removed /details/ from the path to match your app/products/[slug] structure */}
      <Link 
        href={`/products/${slug}`} 
        className="product-card__link-wrapper" 
        style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column', flexGrow: 1 }}
      >
        <div className="product-card__image-wrapper">
          <Image
            src={thumbnail}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
            className="product-card__image"
          />
        </div>

        <div className="product-card__body">
          <h3 className="product-card__title">{title}</h3>
          <p className="product-card__description">{description}</p>

          {previewSpecs && (
            <ul className="product-card__specs">
              {previewSpecs.map((spec, index) => (
                <li key={index} className="product-card__spec">
                  <span className="product-card__spec-label">{spec.label}:</span>
                  {" "}{spec.value}
                </li>
              ))}
            </ul>
          )}
        </div>
      </Link>

      <div className="product-card__footer" style={{ padding: '0 1rem 1rem' }}>
        <button className="btn btn--secondary product-card__button">
          Request Quote
        </button>
      </div>
    </article>
  );
};

export default ProductCard;