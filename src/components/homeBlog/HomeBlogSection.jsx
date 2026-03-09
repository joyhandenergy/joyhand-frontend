import { blogPosts } from "@/data";
import BlogCard from "@/components/blogCard/BlogCard";
import SectionHeader from "@/components/sectionHeader/SectionHeader";
import Link from "next/link";
import "./HomeBlog.css";

const HomeBlogSection = () => {
  const featuredPosts = blogPosts.slice(0, 4);

  return (
    <section className="home-blog">
      <div className="container">
      <SectionHeader 
        badge="Since 2010" 
        title="Energy Insights"
        subtitle="Technical knowledge powering smarter energy decisions"
      />

        <div className="home-blog__slider-wrapper">
          <div className="home-blog__slider">
            {featuredPosts.map((post) => (
              <article key={post.id} className="home-blog__item">
                <BlogCard
                  title={post.title}
                  image={post.image}
                  description={post.excerpt}
                  slug={post.slug}
                />
              </article>
            ))}
          </div>
        </div>

        <div className="home-blog__footer">
          <Link href="/blog" className="home-blog__link">
            View All Articles →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeBlogSection;
