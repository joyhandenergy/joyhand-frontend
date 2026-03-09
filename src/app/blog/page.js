/* app/blog/page.jsx */
import { blogPosts } from "@/data";
import BlogCard from "@/components/blogCard/BlogCard";
import PageHeader from "@/components/pageHeader/PageHeader";
import SectionHeader from "@/components/sectionHeader/SectionHeader";
import "./blog.css";

export default function BlogPage() {
  return (
    <main className="blog-page">
      <PageHeader 
        title="Industry Insights" 
        pageImage="/images/solarImg/panel.home.jpg" 
      />
      
      <section className="blog-section mt-8 mb-8">
        <div className="container">
          <SectionHeader 
            badge="Stay Updated"
            title="Latest in Solar Tech"
            subtitle="Expert analysis on renewable energy, battery storage, and OEM manufacturing trends."
          />
          
          <div className="blog-page__content">
            {blogPosts.map((post) => (
              <BlogCard
                key={post.id}
                title={post.title}
                image={post.image}
               description={post.excerpt}
                slug={post.slug}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
