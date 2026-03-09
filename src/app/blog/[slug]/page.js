"use client";

import React, { use } from "react";
import { blogPosts } from "@/data";
import Link from "next/link";
import Image from "next/image";
import { PiArrowLeft, PiCalendarBlank, PiUser, PiArrowRight } from "react-icons/pi";
import "../blog.css";

export default function BlogDetailsPage({ params: paramsPromise }) {
  const params = use(paramsPromise);
  const { slug } = params;

  const blogPost = blogPosts.find(
    (post) => post.slug.toLowerCase().trim() === slug.toLowerCase().trim()
  );

  if (!blogPost) {
    return (
      <div className="blog-details-notfound">
        <div className="container">
          <h1 className="blog-details-notfound__title">404</h1>
          <h2 className="blog-details-notfound__subtitle">Article Not Found</h2>
          <p className="blog-details-notfound__text">The insights you are looking for may have been archived or moved.</p>
          <Link href="/blog" className="btn btn--secondary">
            Return to Insights
          </Link>
        </div>
      </div>
    );
  }

  return (
    <article className="blog-details">
      {/* Premium Hero Header */}
      <header className="blog-details__header">
        <div className="container">
          <Link href="/blog" className="blog-details__back">
            <PiArrowLeft /> Back to Blog
          </Link>
          <div className="blog-details__hero-content">
             {blogPost.category && <span className="solar-badge">{blogPost.category}</span>}
             <h1 className="blog-details__main-title">{blogPost.title}</h1>
             <div className="blog-details__meta-row">
                <span className="blog-details__meta-item"><PiUser /> JoyHand Engineering</span>
                <span className="blog-details__meta-item"><PiCalendarBlank /> {new Date().toLocaleDateString()}</span>
             </div>
          </div>
        </div>
      </header>

      <div className="container">
        <div className="blog-details__main-layout">
          {/* Main Content Area */}
          <div className="blog-details__body">
            <div className="blog-details__featured-image">
               <Image 
                 src={blogPost.image || "/images/solarImg/panel.home.jpg"} 
                 alt={blogPost.title} 
                 fill 
                 priority
               />
            </div>
            <div className="blog-details__content">
              {blogPost.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Premium Sidebar */}
          <aside className="blog-details__sidebar">
            <div className="sidebar-card sidebar-card--cta">
              <h4 className="sidebar-card__title">Need a Custom Solution?</h4>
              <p className="sidebar-card__text">
                Consult with our engineering team for high-performance OEM/ODM solar and battery storage platforms.
              </p>
              <Link href="/contact" className="btn btn--primary sidebar-card__btn">
                Consult an Expert <PiArrowRight />
              </Link>
            </div>

            <div className="sidebar-card sidebar-card--white">
              <h4 className="sidebar-card__title" style={{color: 'var(--secondary-color)'}}>Categories</h4>
              <ul className="sidebar-card__list">
                <li>Solar Systems</li>
                <li>Battery Storage</li>
                <li>Electric Mobility</li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}
