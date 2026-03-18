import { blogPosts } from "@/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
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
        pageImage={blogPost.image || "/images/solarImg/panel.home.jpg"} 
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
                <PiUser size={14} /> JoyHand Sourcing Team
              </span>
              <span className="blog-details__meta-item">
                <PiCalendarBlank size={14} /> {formattedDate}
              </span>
              <span className="blog-details__meta-item">
                <PiClock size={14} /> {blogPost.readTime || "5 min read"}
              </span>
            </div>

            <div className="blog-details__content">
              {blogPost.content.map((paragraph, index) => (
                <p key={index} className="blog-details__paragraph">{paragraph}</p>
              ))}
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
              <h4 className="sidebar-card__title">Need Help Sourcing?</h4>
              <p className="sidebar-card__text">
                Connect with our team to find vetted manufacturers for your specific product requirements.
              </p>
              <Link href="/contact" className="btn btn--primary sidebar-card__btn">
                Talk to an Expert <PiArrowRight size={16} />
              </Link>
            </div>

            <div className="sidebar-card sidebar-card--white">
              <div className="sidebar-card__icon">
                <PiShieldCheck size={24} />
              </div>
              <h4 className="sidebar-card__title">Sourcing Categories</h4>
              <ul className="sidebar-card__list">
                <li>Battery Storage Systems</li>
                <li>Solar Inverters</li>
                <li>EV Charging Infrastructure</li>
                <li>Portable Power Stations</li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}