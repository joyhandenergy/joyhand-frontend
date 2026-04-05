"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PiPlayCircle, PiYoutubeLogo, PiArrowRight } from "react-icons/pi";

export default function ProductVideo({ videoId, productName = "this product" }) {
  const [isPlaying, setIsPlaying] = useState(false);

  // If no video ID provided, show a fallback CTA
  if (!videoId) {
    return (
      <div className="product-details__video-fallback">
        <div className="product-details__video-fallback-content">
          <PiYoutubeLogo size={48} className="product-details__video-fallback-icon" />
          <h4 className="product-details__video-fallback-title">Video Coming Soon</h4>
          <p className="product-details__video-fallback-text">
            We are preparing a detailed walkthrough for {productName}.
          </p>
          <Link
            href="https://www.youtube.com/@JoyHandEnergy"
            target="_blank"
            rel="noopener noreferrer"
            className="product-details__video-fallback-link"
          >
            Watch other product videos <PiArrowRight />
          </Link>
        </div>
      </div>
    );
  }

  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <div className="product-details__video-container">
      {!isPlaying ? (
        <div
          className="product-details__video-thumbnail"
          onClick={() => setIsPlaying(true)}
        >
          <Image
            src={thumbnailUrl}
            alt={`${productName} video thumbnail`}
            fill
            className="product-details__video-thumb-img"
            unoptimized
          />
          <div className="product-details__video-play">
            <PiPlayCircle size={48} />
          </div>
        </div>
      ) : (
        <div className="product-details__video-embed">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title={`${productName} product video`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )}
    </div>
  );
}