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
        subtitle="Expert knowledge for energy professionals"
        pageImage="/images/solarImg/panel.home.jpg" 
      />
      
      <section className="blog-section">
        <div className="container">
          <SectionHeader 
            badge="Knowledge Hub"
            title="Solar & Energy Storage Insights"
            subtitle="Technical guides, market trends, and best practices for solar professionals"
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