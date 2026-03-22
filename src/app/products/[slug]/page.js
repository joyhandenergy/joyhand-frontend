import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { 
  PiArrowLeft, 
  PiFileText, 
  PiChatCenteredDots, 
  PiBatteryHigh, 
  PiLightning,
  PiMotorcycle, 
  PiFactory
} from "react-icons/pi";
import { productData } from "@/data";
import ProductGallery from "./ProductGallery";
import "../Products.css";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = productData.find(p => p.slug === slug);
  
  if (!product) return { title: "Product Not Found" };
  
  return {
    title: `${product.name} ${product.model} | JoyHand Energy Solutions`,
    description: product.description,
    keywords: `${product.category}, ${product.model}, ${product.name}, energy storage, solar battery, hybrid inverter, electric mobility`,
  };
}

// Get category icon
function getCategoryIcon(category) {
  switch(category) {
    case "battery":
      return <PiBatteryHigh size={16} />;
    case "inverter":
      return <PiLightning size={16} />;
    case "electric-mobility":
      return <PiMotorcycle size={16} />;
    default:
      return <PiFactory size={16} />;
  }
}

// Get category display name
function getCategoryDisplay(category) {
  switch(category) {
    case "battery":
      return "Battery Storage";
    case "inverter":
      return "Solar Inverter";
    case "electric-mobility":
      return "Electric Mobility";
    default:
      return "Energy Solution";
  }
}

// Get product type display
function getTypeDisplay(type) {
  const types = {
    "wall-mounted": "Wall Mounted",
    "mobile": "Mobile / Portable",
    "rack-mounted": "Rack Mounted",
    "solar-storage": "Solar Storage",
    "hybrid": "Hybrid Inverter",
    "motorcycle": "Electric Motorcycle",
    "scooter": "Electric Scooter"
  };
  return types[type] || type;
}

function ProductSpecs({ product }) {
  // Safely get specifications
  const specifications = product?.specifications;
  const { category, type } = product;
  
  if (!specifications) return null;
  
  // Helper function to format values that might be objects
  const formatValue = (value) => {
    if (!value) return null;
    if (typeof value === 'string') return value;
    if (typeof value === 'object') {
      // If it's an object, format it nicely
      if (value['40HQ'] || value['20GP']) {
        return `40'HQ: ${value['40HQ']} | 20'GP: ${value['20GP']}`;
      }
      return JSON.stringify(value);
    }
    return String(value);
  };
  
  // Dynamic specs based on product category
  let specsToShow = [];
  
  if (category === "battery") {
    specsToShow = [
      { label: "Model", value: product.model },
      { label: "Type", value: getTypeDisplay(type) },
      { label: "Nominal Voltage", value: specifications.nominalVoltage },
      { label: "Capacity", value: specifications.capacity || specifications.energy },
      { label: "Energy", value: specifications.energy },
      { label: "Cell Type", value: specifications.cellType },
      { label: "BMS", value: specifications.bms },
      { label: "Dimensions", value: specifications.dimensions },
      { label: "Weight", value: specifications.weight },
      { label: "Gross Weight", value: specifications.grossWeight },
      { label: "Charge Current", value: specifications.chargeCurrent },
      { label: "Discharge Current", value: specifications.dischargeCurrent },
      { label: "Working Voltage", value: specifications.workingVoltage },
      { label: "Cycle Life", value: specifications.cycleLife },
      { label: "IP Rating", value: specifications.ipRating },
      { label: "Cooling", value: specifications.cooling },
    ];
  } 
  else if (category === "inverter") {
    specsToShow = [
      { label: "Model", value: product.model },
      { label: "Type", value: getTypeDisplay(type) },
      { label: "Power", value: specifications.power },
      { label: "DC Input", value: specifications.dcInput },
      { label: "AC Input", value: specifications.acInput },
      { label: "AC Output", value: specifications.acOutput },
      { label: "AC Charge Current", value: specifications.acChargeCurrent },
      { label: "Max Charge Current", value: specifications.maxChargeCurrent },
      { label: "MPPT Voltage Range", value: specifications.mpptVoltage },
      { label: "Max PV Power", value: specifications.maxPvPower },
      { label: "Topology", value: specifications.topology },
      { label: "Efficiency", value: specifications.efficiency },
      { label: "Dimensions", value: specifications.dimensions },
      { label: "Weight", value: specifications.weight },
      { label: "IP Rating", value: specifications.ipRating },
      { label: "Parallel Support", value: specifications.parallelSupport },
    ];
  }
  else if (category === "electric-mobility") {
    specsToShow = [
      { label: "Model", value: product.model },
      { label: "Type", value: getTypeDisplay(type) },
      { label: "Motor", value: specifications.motor },
      { label: "Battery", value: specifications.battery },
      { label: "Top Speed", value: specifications.maxSpeed || specifications.topSpeed },
      { label: "Range", value: specifications.mileage || specifications.maxRange },
      { label: "Charging Time", value: specifications.chargingTime || specifications.rechargeTime },
      { label: "Brake System", value: specifications.brake },
      { label: "Tires", value: specifications.tyre || specifications.tyres },
      { label: "Max Loading", value: specifications.maxLoading },
      { label: "Weight", value: specifications.weight },
      { label: "Dimensions", value: specifications.dimension },
      { label: "Container Loading", value: specifications.containerLoading },
    ];
  }
  
  // Filter out undefined/null values and format object values
  specsToShow = specsToShow.filter(spec => spec.value);
  
  if (specsToShow.length === 0) return null;

  return (
    <div className="product-details__specs">
      <h3 className="product-details__specs-heading">Technical Specifications</h3>
      <div className="product-details__specs-table">
        {specsToShow.map((spec, idx) => (
          <div key={idx} className="product-details__spec-row">
            <span className="product-details__spec-label">{spec.label}</span>
            <span className="product-details__spec-value">{formatValue(spec.value)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
function ProductFeatures({ features }) {
  if (!features || features.length === 0) return null;
  
  return (
    <div className="product-details__features">
      <h3 className="product-details__features-heading">Key Features</h3>
      <ul className="product-details__features-list">
        {features.map((feature, idx) => (
          <li key={idx} className="product-details__feature-item">
            <span className="product-details__feature-check">✓</span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProductApplications({ applications }) {
  if (!applications || applications.length === 0) return null;
  
  return (
    <div className="product-details__applications">
      <h3 className="product-details__applications-heading">Applications</h3>
      <ul className="product-details__applications-list">
        {applications.map((app, idx) => (
          <li key={idx} className="product-details__application-item">
            <span className="product-details__application-icon">⚡</span>
            {app}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProductCertifications({ certifications }) {
  if (!certifications || certifications.length === 0) return null;
  
  return (
    <div className="product-details__certifications">
      <h3 className="product-details__certifications-heading">Certifications</h3>
      <div className="product-details__certifications-list">
        {certifications.map((cert, idx) => (
          <span key={idx} className="product-details__certification-badge">{cert}</span>
        ))}
      </div>
    </div>
  );
}

function ProductWarranty({ warranty }) {
  if (!warranty) return null;
  
  return (
    <div className="product-details__warranty">
      <h3 className="product-details__warranty-heading">Warranty</h3>
      <p className="product-details__warranty-text">{warranty}</p>
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
  const categoryDisplay = getCategoryDisplay(product.category);
  const categoryIcon = getCategoryIcon(product.category);
  const typeDisplay = getTypeDisplay(product.type);

  return (
    <main className="product-details">
      <div className="container">
        <Link href="/products" className="product-details__back-link">
          <PiArrowLeft size={18} /> Back to All Products
        </Link>

        <div className="product-details__grid">
          {/* Gallery Section */}
          <section className="product-details__gallery">
            <ProductGallery images={images} productName={product.name} />
          </section>

          {/* Info Section */}
          <section className="product-details__info">
            <div className="product-details__meta">
              <span className="product-details__badge">
                {categoryIcon} {categoryDisplay}
              </span>
              <span className="product-details__type">{typeDisplay}</span>
              {product.model && (
                <span className="product-details__model">Model: {product.model}</span>
              )}
            </div>
            
            <h1 className="product-details__title">{product.name}</h1>
            <p className="product-details__description">{product.description}</p>

            {/* Features */}
            {product.features && product.features.length > 0 && (
              <ProductFeatures features={product.features} />
            )}
            
            {/* Specifications */}
            {product.specifications && (
              <ProductSpecs product={product} />
            )}

            {/* Applications */}
            {product.applications && product.applications.length > 0 && (
              <ProductApplications applications={product.applications} />
            )}

            {/* Certifications & Warranty */}
            <div className="product-details__footer-info">
              {product.certifications && product.certifications.length > 0 && (
                <ProductCertifications certifications={product.certifications} />
              )}
              {product.warranty && (
                <ProductWarranty warranty={product.warranty} />
              )}
            </div>

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