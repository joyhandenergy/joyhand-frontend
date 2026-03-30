import { Suspense } from "react";
import { productData } from "@/data";
import ProductCard from "@/components/productCard/ProductCard";
import PageHeader from "@/components/pageHeader/PageHeader";
import Link from "next/link";
import "./Products.css";

export const metadata = {
  title: "Energy Products We Manufacture | Batteries, Inverters & More | JoyHand",
  description: "JoyHand manufactures premium LFP batteries, hybrid inverters, portable power stations, and electric mobility solutions. OEM/ODM services from ISO 9001:2025 certified facility.",
  keywords: "energy products, solar batteries, lithium battery, hybrid inverter, portable power, e-motorcycle, OEM manufacturing, ODM services",
};

export const revalidate = 3600;

// Solution navigation links - SEO-friendly URLs
const solutionLinks = [
  { slug: "storage-batteries", name: "Storage Batteries" },
  { slug: "solar-inverters", name: "Solar Inverters" },
  { slug: "portable-power-stations", name: "Portable Power" },
  { slug: "electric-mobility", name: "Electric Mobility" },
];

function ProductsContent() {
  return (
    <main className="products-page">
      <PageHeader 
        title="Products We Manufacture"
        subtitle="LFP batteries, solar inverters, portable power & e‑mobility."
        pageImage="/pageHeadImg/pageheader-products.jpg"  // update to a factory or product assembly image
      />

      <section className="products-page__section">
        <div className="container">
          {/* Solution Navigation */}
          <div className="products-page__category-nav">
            <Link
              href="/products"
              className="products-page__category-link products-page__category-link--active"
            >
              All Products
            </Link>
            {solutionLinks.map((cat) => (
              <Link
                key={cat.slug}
                href={`/products/solutions/${cat.slug}`}
                className="products-page__category-link"
              >
                {cat.name}
              </Link>
            ))}
          </div>
          
          <div className="products-page__grid">
            {productData.length > 0 ? (
              productData.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <div className="products-page__empty text-center">
                <p>No products found</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="container mt-3">Loading products...</div>}>
      <ProductsContent />
    </Suspense>
  );
}