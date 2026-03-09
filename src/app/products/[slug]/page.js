"use client";

import React, { useState, use } from "react";
import Image from "next/image";
import Link from "next/link";
import { CaretLeft, CaretRight, ArrowLeft } from "phosphor-react";
import { productData } from "@/data";
import "../Products.css"; // only one import

const ProductDetailsPage = ({ params: paramsPromise }) => {
  const params = use(paramsPromise);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Find product by slug
  const product = productData.find((p) => p.slug === params.slug);

  // Custom "Product Not Found"
  if (!product) {
    return (
      <main className="product-details-notfound">
        <div className="container text-center">
          <h1>Product Not Found</h1>
          <p>
            Sorry, the product you are looking for doesn’t exist or may have been removed.
          </p>
          <Link href="/products" className="btn btn--primary">
            Back to Products
          </Link>
        </div>
      </main>
    );
  }

  // Image gallery handlers
  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === product.images.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };

  return (
    <main className="product-details">
      <div className="container">
        {/* Back Button */}
        <Link href="/products" className="product-details__back-link">
          <ArrowLeft size={18} /> Back to Catalog
        </Link>

        <div className="product-details__grid">
          {/* Image Gallery */}
          <section className="product-details__gallery">
            <div className="product-details__main-viewer">
              <Image
                src={product.images[currentIndex]}
                alt={product.title}
                fill
                priority
                className="product-details__main-img"
              />

              <div className="product-details__controls">
                <button onClick={handlePrev} className="product-details__nav-btn">
                  <CaretLeft size={24} weight="bold" />
                </button>
                <button onClick={handleNext} className="product-details__nav-btn">
                  <CaretRight size={24} weight="bold" />
                </button>
              </div>
            </div>

            {/* Thumbnails */}
            <div className="product-details__thumbnails">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  className={`product-details__thumb-btn ${
                    currentIndex === idx ? "product-details__thumb-btn--active" : ""
                  }`}
                  onClick={() => setCurrentIndex(idx)}
                >
                  <Image src={img} alt={`${product.title} thumbnail`} width={80} height={80} />
                </button>
              ))}
            </div>
          </section>

          {/* Product Information */}
          <section className="product-details__info">
            <span className="product-details__category-tag">{product.category}</span>
            <h1 className="product-details__title">{product.title}</h1>
            <p className="product-details__description">{product.description}</p>

            {/* Technical Specs */}
            <div className="product-details__specs">
              <h3 className="product-details__specs-heading">Technical Specifications</h3>
              <div className="product-details__specs-table">
                {product.specifications.map((spec, idx) => (
                  <div key={idx} className="product-details__spec-row">
                    <span className="product-details__spec-label">{spec.label}</span>
                    <span className="product-details__spec-value">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="product-details__actions">
              <button className="btn btn--primary product-details__cta">
                Request Technical Datasheet
              </button>
              <button className="btn btn--secondary product-details__cta">
                Inquire for Bulk Pricing
              </button>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default ProductDetailsPage;