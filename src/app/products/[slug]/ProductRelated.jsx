"use client";

import { useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { productData } from "@/data";

export default function ProductRelated({ currentProductId }) {
  const relatedProducts = useMemo(() => {
    // Filter out current product and get 3 random products from all categories
    const otherProducts = productData.filter(p => p.id !== currentProductId);
    const shuffled = [...otherProducts];
    // Use a seeded random based on currentProductId for deterministic shuffling
    const seededRandom = (seed) => {
      const x = Math.sin(seed) * 10000;
      return x - Math.floor(x);
    };
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(seededRandom(currentProductId + i) * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled.slice(0, 3);
  }, [currentProductId]);

  if (relatedProducts.length === 0) return null;

  return (
    <div className="product-details__related">
      <h3 className="product-details__related-title">You May Also Like</h3>
      <div className="product-details__related-grid">
        {relatedProducts.map((product) => (
          <Link key={product.id} href={`/products/${product.slug}`} className="product-details__related-card">
            <div className="product-details__related-img-wrapper">
              <Image src={product.image} alt={product.name} className="product-details__related-img" width={200} height={200} />
            </div>
            <h4 className="product-details__related-name">{product.name}</h4>
            <span className="product-details__related-model">{product.model}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}