export const runtime = 'edge';

import { blogPosts } from "@/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import { 
  PiArrowLeft, 
  PiCalendarBlank, 
  PiUser, 
  PiArrowRight,
  PiFactory,
  PiShieldCheck,
  PiClock
} from "react-icons/pi";
import PageHeader from "@/components/pageHeader/PageHeader";
import "../blog.css";

// Custom serializer to map Portable Text blocks to your existing CSS classes
const components = {
  block: {
    normal: ({ children }) => <p className="blog-details__paragraph">{children}</p>,
    h2: ({ children }) => <h2 className="blog-details__heading h2">{children}</h2>,
    h3: ({ children }) => <h3 className="blog-details__heading h3">{children}</h3>,
    // You can add h4 if needed
  },
  list: {
    bullet: ({ children }) => <ul className="blog-details__list">{children}</ul>,
    number: ({ children }) => <ol className="blog-details__list">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li className="blog-details__list-item">{children}</li>,
    number: ({ children }) => <li className="blog-details__list-item">{children}</li>,
  },
  // If you want to add custom marks (bold, italic) they are handled automatically.
};

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);
  if (!post) return { title: "Article Not Found" };
  return {
    title: `${post.title} | JoyHand Insights`,
    description: post.excerpt,
  };
}

export default async function BlogDetailsPage({ params }) {
  const { slug } = await params;

  const blogPost = blogPosts.find(
    (post) => post.slug.toLowerCase().trim() === slug.toLowerCase().trim()
  );

  if (!blogPost) {
    notFound();
  }

  // Find next and previous posts
  const currentIndex = blogPosts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  // Format date
  const formattedDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <article className="blog-details">
      <PageHeader 
        title={blogPost.title} 
        pageImage={blogPost.image || "/images/pageHeadImg/factory-blog.jpg"} 
      />

      <div className="container blog-details__container">
        <Link href="/blog" className="blog-details__back-link">
          <PiArrowLeft size={16} /> Back to Insights
        </Link>

        <div className="blog-details__grid">
          {/* Main Content */}
          <div className="blog-details__main">
            <div className="blog-details__meta">
              <span className="blog-details__meta-item">
                <PiUser size={14} /> JoyHand Manufacturing Team
              </span>
              <span className="blog-details__meta-item">
                <PiCalendarBlank size={14} /> {formattedDate}
              </span>
              <span className="blog-details__meta-item">
                <PiClock size={14} /> {blogPost.readTime || "5 min read"}
              </span>
            </div>

            <div className="blog-details__content">
              <PortableText value={blogPost.content} components={components} />
            </div>

            {/* Post Navigation */}
            {(prevPost || nextPost) && (
              <div className="blog-details__navigation">
                {prevPost && (
                  <Link href={`/blog/${prevPost.slug}`} className="blog-details__nav-link blog-details__nav-link--prev">
                    <PiArrowLeft className="blog-details__nav-icon" />
                    <div className="blog-details__nav-content">
                      <span className="blog-details__nav-label">Previous</span>
                      <span className="blog-details__nav-title">{prevPost.title}</span>
                    </div>
                  </Link>
                )}
                
                {nextPost && (
                  <Link href={`/blog/${nextPost.slug}`} className="blog-details__nav-link blog-details__nav-link--next">
                    <div className="blog-details__nav-content">
                      <span className="blog-details__nav-label">Next</span>
                      <span className="blog-details__nav-title">{nextPost.title}</span>
                    </div>
                    <PiArrowRight className="blog-details__nav-icon" />
                  </Link>
                )}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="blog-details__sidebar">
            <div className="sidebar-card sidebar-card--cta">
              <div className="sidebar-card__icon">
                <PiFactory size={24} />
              </div>
              <h4 className="sidebar-card__title">Start Your OEM Project</h4>
              <p className="sidebar-card__text">
                Partner with JoyHand for direct factory access, engineering support, and full certification assistance.
              </p>
              <Link href="/contact" className="btn btn--primary sidebar-card__btn">
                Contact Manufacturing Team <PiArrowRight size={16} />
              </Link>
            </div>

            <div className="sidebar-card sidebar-card--white">
              <div className="sidebar-card__icon">
                <PiShieldCheck size={24} />
              </div>
              <h4 className="sidebar-card__title">Key Manufacturing Services</h4>
              <ul className="sidebar-card__list">
                <li>OEM/ODM Battery Packs</li>
                <li>Solar Inverter Assembly</li>
                <li>E‑Mobility Powertrains</li>
                <li>Portable Power Stations</li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}