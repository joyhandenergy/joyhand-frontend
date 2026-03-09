"use client";

import React, { use } from "react";
import { blogPosts } from "@/data";
import Link from "next/link";
import "../blog.css";

export default function BlogDetailsPage({ params: paramsPromise }) {
  const params = use(paramsPromise);
  const { slug } = params;

  const blogPost = blogPosts.find(
    (post) => post.slug.toLowerCase().trim() === slug.toLowerCase().trim()
  );

  // Blog Not Found using Not Found style
  if (!blogPost) {
    return (
      <div className="notFoundContainer">
        <div className="notFoundContent">
          <h1>404</h1>
          <h2>Blog Not Found</h2>
          <p>Sorry, the blog post you are looking for doesn’t exist or may have been removed.</p>
          <Link href="/blog" className="backHomeBtn">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <article className="blog-details-wrapper">
      <div className="container mt-6 mb-8">
        <div className="blog-details__main-layout">
          <div className="blog-details__body">
            <div className="blog-details__meta mb-2">
              {blogPost.category && <span className="solar-badge">{blogPost.category}</span>}
            </div>
            <div className="blog-details__content">
              {blogPost.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          <aside className="blog-details__sidebar">
            <div className="sidebar-card">
              <h4>Need a Solution?</h4>
              <p>Contact our engineers for custom OEM solar storage.</p>
              <Link href="/contact_Us" className="btn btn--secondary mt-2">Get Started</Link>
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}