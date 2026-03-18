import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { PiArrowLeft, PiFileText, PiChatCenteredDots, PiCaretLeft, PiCaretRight } from "react-icons/pi";
import { productData } from "@/data";
import ProductGallery from "./ProductGallery";
import "../../products/products.css";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = productData.find(p => p.slug === slug);
  
  if (!product) return { title: "Product Not Found" };
  
  return {
    title: `${product.name} | JoyHand Energy Solutions`,
    description: product.description,
    keywords: `${product.category}, ${product.model}, energy storage, solar battery, hybrid inverter`,
  };
}

function ProductSpecs({ specifications }) {
  if (!specifications) return null;
  
  const specsToShow = [
    { label: "Model", value: specifications.model },
    { label: "Nominal Voltage", value: specifications.nominalVoltage },
    { label: "Capacity", value: specifications.capacity || specifications.energy },
    { label: "Power", value: specifications.power },
    { label: "BMS", value: specifications.bms },
    { label: "Dimensions", value: specifications.dimensions },
    { label: "Weight", value: specifications.weight },
    { label: "Charge Current", value: specifications.chargeCurrent },
    { label: "Discharge Current", value: specifications.dischargeCurrent },
    { label: "MPPT Range", value: specifications.mpptVoltage },
    { label: "Max PV Power", value: specifications.maxPvPower },
    { label: "IP Rating", value: specifications.ipRating },
    { label: "Warranty", value: specifications.warranty },
  ].filter(spec => spec.value);

  return (
    <div className="product-details__specs">
      <h3 className="product-details__specs-heading">Technical Specifications</h3>
      <div className="product-details__specs-table">
        {specsToShow.map((spec, idx) => (
          <div key={idx} className="product-details__spec-row">
            <span className="product-details__spec-label">{spec.label}</span>
            <span className="product-details__spec-value">{spec.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default async function ProductDetailsPage({ params }) {
  const { slug } = await params;
  const product = productData.find(p => p.slug === slug);

  if (!product) {
    notFound();
  }

  const images = product.gallery?.length ? product.gallery : [product.image];
  const categoryDisplay = product.category === "battery" ? "Battery" : "Inverter";

  return (
    <main className="product-details">
      <div className="container">
        <Link href="/products" className="product-details__back-link">
          <PiArrowLeft size={18} /> Back to Solutions
        </Link>

        <div className="product-details__grid">
          {/* Gallery Section */}
          <section className="product-details__gallery">
            <ProductGallery images={images} productName={product.name} />
          </section>

          {/* Info Section */}
          <section className="product-details__info">
            <div className="product-details__meta">
              <span className="solar-badge">{categoryDisplay}</span>
              {product.model && <span className="product-details__model">Model: {product.model}</span>}
            </div>
            
            <h1 className="product-details__title">{product.name}</h1>
            <p className="product-details__description">{product.description}</p>

            <ProductSpecs specifications={product.specifications} />

            <div className="product-details__actions">
              <button className="btn btn--primary product-details__cta">
                <PiFileText size={20} /> Request Datasheet
              </button>
              <button className="btn btn--secondary product-details__cta">
                <PiChatCenteredDots size={20} /> Bulk Inquiry
              </button>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}