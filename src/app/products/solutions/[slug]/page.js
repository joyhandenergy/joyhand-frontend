import { Suspense } from "react";
import { productData, getProductsByCategory, getElectricMobilityProducts } from "@/data";
import ProductCard from "@/components/productCard/ProductCard";
import PageHeader from "@/components/pageHeader/PageHeader";
import Link from "next/link";
import { notFound } from "next/navigation";
import "../../Products.css";

export const revalidate = 3600;

// Define valid solution slugs
const solutionConfig = {
  "storage-batteries": {
    title: "Storage Batteries",
    filterCategory: "battery",
    description: "Wall‑mounted, mobile & rack‑mounted LFP batteries.",
    keywords: "lithium battery, LFP battery, energy storage, solar battery, battery storage system"
  },
  "solar-inverters": {
    title: "Solar Inverters",
    filterCategory: "inverter",
    description: "High‑efficiency hybrid & wall‑mounted inverters.",
    keywords: "solar inverter, hybrid inverter, off-grid inverter, MPPT inverter, power inverter"
  },
  "portable-power-stations": {
    title: "Portable Power Stations",
    filterCategory: "portable-power",
    description: "Rugged, solar‑ready units for emergency & off‑grid.",
    keywords: "portable power station, solar generator, backup power, camping power, emergency power",
    comingSoon: true // Mark as coming soon
  },
  "electric-mobility": {
    title: "Electric Mobility",
    filterCategory: "electric-mobility",
    description: "Electric motorcycles, scooters & e‑bikes.",
    keywords: "electric motorcycle, e-motorcycle, electric scooter, e-bike, electric mobility"
  }
};

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const config = solutionConfig[slug];
  
  if (!config) {
    return { title: "Solution Not Found" };
  }

  return {
    title: `${config.title} Solutions | JoyHand Energy Products`,
    description: config.description,
    keywords: config.keywords,
  };
}

// Generate static paths
export async function generateStaticParams() {
  return Object.keys(solutionConfig).map((slug) => ({
    slug: slug,
  }));
}

// Helper function to get products by category
function getProductsForCategory(filterCategory) {
  if (filterCategory === "battery") {
    return getProductsByCategory("battery");
  }
  if (filterCategory === "inverter") {
    return getProductsByCategory("inverter");
  }
  if (filterCategory === "electric-mobility") {
    return getProductsByCategory("electric-mobility");
  }
  if (filterCategory === "portable-power") {
    // Return empty array - coming soon
    return [];
  }
  return [];
}

async function SolutionContent({ slug }) {
  const config = solutionConfig[slug];
  
  if (!config) {
    notFound();
  }
  
  const products = getProductsForCategory(config.filterCategory);
  const isComingSoon = config.comingSoon || (config.filterCategory === "portable-power");
  
  const solutionLinks = [
    { slug: "storage-batteries", name: "Storage Batteries" },
    { slug: "solar-inverters", name: "Solar Inverters" },
    { slug: "portable-power-stations", name: "Portable Power" },
    { slug: "electric-mobility", name: "Electric Mobility" },
  ];

  const hasProducts = products.length > 0;

  return (
    <main className="products-page">
      <PageHeader 
        title={`${config.title} Solutions`}
        subtitle={config.description}
        pageImage="/images/pageHeadImg/pageheader2.jpg" 
      />

      <section className="products-page__section">
        <div className="container">
          {/* Solution Navigation */}
          <div className="products-page__category-nav">
            <Link 
              href="/products" 
              className="products-page__category-link"
            >
              All Products
            </Link>
            {solutionLinks.map((cat) => (
              <Link
                key={cat.slug}
                href={`/products/solutions/${cat.slug}`}
                className={`products-page__category-link ${
                  slug === cat.slug ? "products-page__category-link--active" : ""
                }`}
              >
                {cat.name}
              </Link>
            ))}
          </div>
          
          {isComingSoon ? (
            <div className="products-page__coming-soon">
              <div className="products-page__coming-soon-content">
                <h3 className="products-page__coming-soon-title">Coming Soon</h3>
                <p className="products-page__coming-soon-text">
                  We are currently building our {config.title.toLowerCase()} solutions catalog. 
                  Check back soon or contact our sourcing team for early access.
                </p>
                <Link href="/contact" className="btn btn--primary">
                  Contact Sourcing Team
                </Link>
              </div>
            </div>
          ) : hasProducts ? (
            <div className="products-page__grid">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="products-page__coming-soon">
              <div className="products-page__coming-soon-content">
                <h3 className="products-page__coming-soon-title">No Products Found</h3>
                <p className="products-page__coming-soon-text">
                  No products available in this category yet. Please check back soon.
                </p>
                <Link href="/contact" className="btn btn--primary">
                  Contact Sourcing Team
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export default async function SolutionsPage({ params }) {
  const { slug } = await params;
  
  return (
    <Suspense fallback={<div className="container mt-3">Loading solutions...</div>}>
      <SolutionContent slug={slug} />
    </Suspense>
  );
}