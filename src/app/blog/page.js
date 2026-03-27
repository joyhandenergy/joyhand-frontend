import { blogPosts } from "@/data";
import BlogCard from "@/components/blogCard/BlogCard";
import PageHeader from "@/components/pageHeader/PageHeader";
import SectionHeader from "@/components/sectionHeader/SectionHeader";
import "./blog.css";

export default function BlogPage() {
  return (
    <main className="blog-page">
      <PageHeader 
        title="Manufacturing & Industry Insights"
        subtitle="Expert knowledge for energy professionals."
        pageImage="/images/pageHeadImg/pageheader-blog.jpg"  // update to a factory or lab image
      />
      
      <section className="blog-section">
        <div className="container">
          <SectionHeader 
            badge="Manufacturing Insights"
            title="From Factory Floor to Global Markets"
            subtitle="Learn how we engineer, test, and deliver high-performance energy solutions – direct from our ISO 9001:2025 certified facility."
          />
          
          <div className="blog-grid">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}