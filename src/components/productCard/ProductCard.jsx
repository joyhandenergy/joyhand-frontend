"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PiBatteryHigh, PiLightning, PiMotorcycle, PiPlug } from "react-icons/pi";

const ProductCard = ({ product }) => {
  const { name, slug, description, image, category, specifications } = product;

  const getCategoryIcon = () => {
    if (category === "battery") return <PiBatteryHigh className="product-card__category-icon" />;
    if (category === "inverter") return <PiLightning className="product-card__category-icon" />;
    if (category === "electric-mobility") return <PiMotorcycle className="product-card__category-icon" />;
    if (category === "portable-power") return <PiPlug className="product-card__category-icon" />;
    return <PiLightning className="product-card__category-icon" />;
  };

  const getCategoryName = () => {
    if (category === "battery") return "Battery";
    if (category === "inverter") return "Inverter";
    if (category === "electric-mobility") return "Electric Mobility";
    if (category === "portable-power") return "Portable Power";
    return category;
  };

  // Preview specs – max 2 items
  const previewSpecs = [];
  if (specifications) {
    // For batteries
    if (specifications.power) previewSpecs.push({ label: "Power", value: specifications.power });
    else if (specifications.energy) previewSpecs.push({ label: "Capacity", value: specifications.energy });
    else if (specifications.capacity) previewSpecs.push({ label: "Capacity", value: specifications.capacity });

    // For electric mobility
    if (category === "electric-mobility") {
      if (specifications.maxSpeed || specifications.topSpeed) {
        previewSpecs.push({ label: "Top Speed", value: specifications.maxSpeed || specifications.topSpeed });
      } else if (specifications.motor && previewSpecs.length < 2) {
        previewSpecs.push({ label: "Motor", value: specifications.motor });
      }
    } 
    // For inverters and batteries
    else if (category === "battery" || category === "inverter") {
      if (specifications.nominalVoltage) previewSpecs.push({ label: "Voltage", value: specifications.nominalVoltage });
      else if (specifications.dcInput) previewSpecs.push({ label: "Input", value: specifications.dcInput });
    }
    // For portable power stations
    else if (category === "portable-power") {
      if (specifications.ratedPower) previewSpecs.push({ label: "Power", value: specifications.ratedPower });
      else if (specifications.power) previewSpecs.push({ label: "Power", value: specifications.power });
      if (specifications.batteryCapacity) previewSpecs.push({ label: "Capacity", value: specifications.batteryCapacity });
      else if (specifications.capacity) previewSpecs.push({ label: "Capacity", value: specifications.capacity });
    }
  }
  const displayedSpecs = previewSpecs.slice(0, 2);

  return (
    <article className="product-card" itemScope itemType="https://schema.org/Product">
      <Link href={`/products/${slug}`} className="product-card__link" aria-label={`View ${name} details`}>
        <div className="product-card__image-wrapper">
          <Image
            src={image || "/images/placeholder.jpg"}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
            className="product-card__image"
            loading="lazy"
          />
          <meta itemProp="image" content={image} />
        </div>

        <div className="product-card__content">
          <div className="product-card__category">
            {getCategoryIcon()}
            <span className="product-card__category-text">{getCategoryName()}</span>
          </div>

          <h3 className="product-card__title" itemProp="name">{name}</h3>

          <p className="product-card__description" itemProp="description">{description}</p>

          {displayedSpecs.length > 0 && (
            <ul className="product-card__specs">
              {displayedSpecs.map((spec, idx) => (
                <li key={idx} className="product-card__spec">
                  <span className="product-card__spec-label">{spec.label}:</span>
                  <span className="product-card__spec-value">{spec.value}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </Link>

      <div className="product-card__footer">
        <Link href={`/products/${slug}`} className="btn btn--secondary product-card__button">
          View Product
        </Link>
      </div>
    </article>
  );
};

export default ProductCard;