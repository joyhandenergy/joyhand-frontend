"use client";

import React, { useState, use } from "react";
import Image from "next/image";
import Link from "next/link";
import { CaretLeft, CaretRight, ArrowLeft, FileText, ChatCenteredDots } from "phosphor-react";
import { productData } from "@/data";
import "../Products.css"; 

const ProductDetailsPage = ({ params: paramsPromise }) => {
  const params = use(paramsPromise);
  const [currentIndex, setCurrentIndex] = useState(0);

  const product = productData.find((p) => p.slug === params.slug);

  if (!product) {
    return (
      <main className="product-details-notfound">
        <div className="container text-center">
          <h1 className="product-details-notfound__title">Product Not Found</h1>
          <Link href="/products" className="btn btn--primary">Back to Catalog</Link>
        </div>
      </main>
    );
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === product.images.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? product.images.length - 1 : prev - 1));
  };

  return (
    <main className="product-details">
      <div className="container">
        <Link href="/products" className="product-details__back-link">
          <ArrowLeft size={18} weight="bold" /> Back to Solutions Catalog
        </Link>

        <div className="product-details__grid">
          {/* VISUAL GALLERY - FULL CONTAINER IMPACT */}
          <section className="product-details__gallery">
            <div className="product-details__viewer">
              <div className="product-details__main-wrapper">
                <Image
                  src={product.images[currentIndex]}
                  alt={product.title}
                  fill
                  priority
                  className="product-details__main-img"
                />
                
                {product.images.length > 1 && (
                  <div className="product-details__arrows">
                    <button onClick={handlePrev} className="product-details__arrow-btn" aria-label="Previous">
                      <CaretLeft size={24} weight="bold" />
                    </button>
                    <button onClick={handleNext} className="product-details__arrow-btn" aria-label="Next">
                      <CaretRight size={24} weight="bold" />
                    </button>
                  </div>
                )}
              </div>

              {/* THUMBNAIL STRIP */}
              <div className="product-details__strip">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    className={`product-details__strip-item ${
                      currentIndex === idx ? "product-details__strip-item--active" : ""
                    }`}
                    onClick={() => setCurrentIndex(idx)}
                  >
                    <Image src={img} alt="Thumbnail" fill className="product-details__strip-img" />
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* INFO BLOCK */}
          <section className="product-details__info">
            <div className="product-details__meta">
              <span className="solar-badge">{product.category}</span>
            </div>
            
            <h1 className="product-details__title">{product.title}</h1>
            <p className="product-details__description">{product.description}</p>

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

            <div className="product-details__actions">
              <button className="btn btn--primary product-details__cta">
                <FileText size={20} weight="fill" /> Request Datasheet
              </button>
              <button className="btn btn--secondary product-details__cta">
                <ChatCenteredDots size={20} weight="fill" /> Bulk Inquiry
              </button>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default ProductDetailsPage;
