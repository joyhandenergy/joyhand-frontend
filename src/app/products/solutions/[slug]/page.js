import { Suspense } from "react";
import { getProductsByCategory } from "@/data";
import ProductCard from "@/components/productCard/ProductCard";
import PageHeader from "@/components/pageHeader/PageHeader";
import Link from "next/link";
import { notFound } from "next/navigation";
import Pagination from "@/components/pagination/Pagination";
import "../../Products.css";

export const revalidate = 3600;

const solutionConfig = {
  "storage-batteries": {
    title: "Storage Batteries",
    image: "/homeImg/energyPlatformImage1.png",
    filterCategory: "battery",
    description: "Wall‑mounted, mobile & rack‑mounted LFP batteries.",
    keywords: "lithium battery, LFP battery, energy storage, solar battery, battery storage system"
  },
  "solar-inverters": {
    title: "Solar Inverters",
    filterCategory: "inverter",
    image: "/homeImg/energyPlatformImage2.png",
    description: "High‑efficiency hybrid & wall‑mounted inverters.",
    keywords: "solar inverter, hybrid inverter, off-grid inverter, MPPT inverter, power inverter"
  },
  "portable-power-stations": {
    title: "Portable Power Stations",
    filterCategory: "portable-power",
    image: "/homeImg/energyPlatformImage3.png",
    description: "Rugged, solar‑ready units for emergency & off‑grid.",
    keywords: "portable power station, solar generator, backup power, camping power, emergency power",
    comingSoon: true
  },
  "electric-mobility": {
    title: "Electric Mobility",
    filterCategory: "electric-mobility",
    image: "/homeImg/energyPlatformImage4.png",
    description: "Electric motorcycles, scooters & e‑bikes.",
    keywords: "electric motorcycle, e-motorcycle, electric scooter, e-bike, electric mobility"
  }
};

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const config = solutionConfig[slug];
  if (!config) return { title: "Solution Not Found" };
  return {
    title: `${config.title} Solutions | JoyHand Energy Products`,
    description: config.description,
    keywords: config.keywords,
  };
}

export async function generateStaticParams() {
  return Object.keys(solutionConfig).map((slug) => ({ slug }));
}

function getProductsForCategory(filterCategory) {
  if (filterCategory === "battery") return getProductsByCategory("battery");
  if (filterCategory === "inverter") return getProductsByCategory("inverter");
  if (filterCategory === "electric-mobility") return getProductsByCategory("electric-mobility");
  return [];
}

const PRODUCTS_PER_PAGE = 12;

async function SolutionContent({ slug, searchParams }) {
  const config = solutionConfig[slug];
  if (!config) notFound();

  const allProducts = getProductsForCategory(config.filterCategory);
  const isComingSoon = config.comingSoon || (config.filterCategory === "portable-power");

  const page = Number(searchParams?.page) || 1;
  const start = (page - 1) * PRODUCTS_PER_PAGE;
  const end = start + PRODUCTS_PER_PAGE;
  const paginatedProducts = allProducts.slice(start, end);
  const totalPages = Math.ceil(allProducts.length / PRODUCTS_PER_PAGE);

  const solutionLinks = [
    { slug: "storage-batteries", name: "Storage Batteries" },
    { slug: "solar-inverters", name: "Solar Inverters" },
    { slug: "portable-power-stations", name: "Portable Power" },
    { slug: "electric-mobility", name: "Electric Mobility" },
  ];

  return (
    <main className="products-page">
      <PageHeader 
        title={`${config.title} Solutions`}
        subtitle={config.description}
        pageImage={config.image}
      />

      <section className="products-page__section">
        <div className="container">
          <div className="products-page__category-nav">
            <Link href="/products" className="products-page__category-link">
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
          ) : paginatedProducts.length > 0 ? (
            <>
              <div className="products-page__grid">
                {paginatedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
              {totalPages > 1 && (
                <Pagination
                  currentPage={page}
                  totalPages={totalPages}
                  baseUrl={`/products/solutions/${slug}`}
                />
              )}
            </>
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

export default async function SolutionsPage({ params, searchParams }) {
  const { slug } = await params;
  return (
    <Suspense fallback={<div className="container mt-3">Loading solutions...</div>}>
      <SolutionContent slug={slug} searchParams={searchParams} />
    </Suspense>
  );
}