import React from "react";
import Link from "next/link";
import Image from "next/image";
import "../../app/blog/blog.css";

const BlogCard = ({ title, image, description, slug }) => {
  return (
    <article className="blog-card">

      <Link href={`/blog/${slug}`} className="blog-card__image-wrapper">
        <Image
          src={image || "/images/fallback.jpg"}
          alt={title}
          fill
          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
          className="blog-card__image"
        />
      </Link>

      <div className="blog-card__body">

        <h3 className="blog-card__title">{title}</h3>

        <p className="blog-card__description">
          {description}
        </p>

        <Link href={`/blog/${slug}`} className="blog-card__button">
          Read Article →
        </Link>

      </div>

    </article>
  );
};

export default BlogCard;