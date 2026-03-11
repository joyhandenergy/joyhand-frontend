"use client";

import React, { use } from "react";
import { blogPosts } from "@/data";
import Link from "next/link";
import { PiArrowLeft, PiCalendarBlank, PiUser, PiArrowRight } from "react-icons/pi";
import { PortableText } from "@portabletext/react";
import PageHeader from "@/components/pageHeader/PageHeader";
import "../blog.css";

/**
 * CUSTOM PORTABLE TEXT COMPONENTS
 */
const blogContentComponents = {
  block: {
    h2: ({ children }) => <h2 className="blog-content__h2">{children}</h2>,
    h3: ({ children }) => <h3 className="blog-content__h3">{children}</h3>,
    normal: ({ children }) => <p className="blog-content__p">{children}</p>,
  },
  list: {
    bullet: ({ children }) => <ul className="blog-content__ul">{children}</ul>,
  },
  listItem: {
    bullet: ({ children }) => <li className="blog-content__li">{children}</li>,
  },
};

export default function BlogDetailsPage({ params: paramsPromise }) {
  const params = use(paramsPromise);
  const { slug } = params;

  const blogPost = blogPosts.find(
    (post) => post.slug.toLowerCase().trim() === slug.toLowerCase().trim()
  );

  if (!blogPost) {
    return (
      <main className="blog-details-notfound">
        <div className="container">
          <h1 className="blog-details-notfound__title">404</h1>
          <h2 className="blog-details-notfound__subtitle">Article Not Found</h2>
          <Link href="/blog" className="btn btn--secondary">Return to Insights</Link>
        </div>
      </main>
    );
  }

  // --- LOGIC TO PREVENT EMPTY CONTENT ---
  const isPortableText = Array.isArray(blogPost.content) && 
                         typeof blogPost.content[0] === 'object' && 
                         blogPost.content[0] !== null;

  return (
    <article className="blog-details">
      <PageHeader 
        title={blogPost.title} 
        pageImage={blogPost.image || "/images/solarImg/panel.home.jpg"} 
      />

      <div className="container blog-details__container">
        <Link href="/blog" className="blog-details__back">
          <PiArrowLeft weight="bold" /> Back to Insights Catalog
        </Link>

        <div className="blog-details__main-layout">
          <div className="blog-details__body">
            
            <div className="blog-details__meta-row">
              <span className="blog-details__meta-item">
                <PiUser weight="bold" /> JoyHand Engineering
              </span>
              <span className="blog-details__meta-item">
                <PiCalendarBlank weight="bold" /> {new Date().toLocaleDateString()}
              </span>
              {blogPost.category && <span className="solar-badge">{blogPost.category}</span>}
            </div>

            <div className="blog-details__content">
              {/* Conditional Rendering: 
                  If data is PortableText (from CMS), use the component.
                  If data is simple strings (from local data), map them. */}
              {isPortableText ? (
                <PortableText 
                  value={blogPost.content} 
                  components={blogContentComponents} 
                />
              ) : (
                blogPost.content.map((paragraph, index) => (
                  <p key={index} className="blog-content__p">{paragraph}</p>
                ))
              )}
            </div>
          </div>

          <aside className="blog-details__sidebar">
            <div className="sidebar-card sidebar-card--cta">
              <h4 className="sidebar-card__title">Need a Custom Solution?</h4>
              <p className="sidebar-card__text">
                Consult with our engineering team for high-performance OEM/ODM solar and battery storage platforms.
              </p>
              <Link href="/contact" className="btn btn--primary sidebar-card__btn">
                Talk to an Expert <PiArrowRight weight="bold" />
              </Link>
            </div>

            <div className="sidebar-card sidebar-card--white">
              <h4 className="sidebar-card__title" style={{ color: "var(--secondary-color)" }}>
                Technical Categories
              </h4>
              <ul className="sidebar-card__list">
                <li>Solar Storage Systems</li>
                <li>Lithium Battery Tech</li>
                <li>Electric Mobility Power</li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}
