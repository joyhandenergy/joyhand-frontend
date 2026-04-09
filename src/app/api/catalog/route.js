export const runtime = 'edge';
import { NextResponse } from "next/server";
import { productData } from "@/data";
import { Document, Page, Text, View, Image, StyleSheet, renderToBuffer } from "@react-pdf/renderer";

// No external font registration – use built‑in Helvetica
const styles = StyleSheet.create({
  page: {
    padding: 30,
    backgroundColor: "#ffffff",
    fontFamily: "Helvetica",
    fontSize: 10,
  },
  header: {
    marginBottom: 24,
    borderBottom: "1px solid #ff7f41",
    paddingBottom: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logoContainer: {
    width: 120,
  },
  logo: {
    width: "100%",
    height: "auto",
  },
  headerText: {
    textAlign: "right",
  },
  headerTitle: {
    fontFamily: "Helvetica-Bold",
    fontSize: 18,
    fontWeight: "bold",
    color: "#121b2d",
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 10,
    color: "#6c727f",
  },
  categoryHeader: {
    marginBottom: 20,
  },
  categoryTitle: {
    fontFamily: "Helvetica-Bold",
    fontSize: 22,
    fontWeight: "bold",
    color: "#ff7f41",
    marginBottom: 8,
  },
  categoryDesc: {
    fontSize: 10,
    color: "#6c727f",
    lineHeight: 1.5,
  },
  productCard: {
    marginBottom: 20,
    padding: 12,
    border: "1px solid #e0e0e0",
    borderRadius: 8,
    flexDirection: "row",
    flexWrap: "wrap",
    breakInside: "avoid",
    backgroundColor: "#ffffff",
  },
  productImageContainer: {
    width: "30%",
    marginRight: 16,
  },
  productImage: {
    width: "100%",
    height: "auto",
    objectFit: "contain",
  },
  productDetails: {
    width: "65%",
  },
  productName: {
    fontFamily: "Helvetica-Bold",
    fontSize: 14,
    fontWeight: "bold",
    color: "#121b2d",
    marginBottom: 4,
  },
  productModel: {
    fontSize: 9,
    color: "#6c727f",
    marginBottom: 8,
  },
  productDescription: {
    fontSize: 9,
    color: "#6c727f",
    marginBottom: 10,
    lineHeight: 1.4,
  },
  specsContainer: {
    marginTop: 4,
  },
  specRow: {
    flexDirection: "row",
    marginBottom: 4,
  },
  specLabel: {
    width: 100,
    fontFamily: "Helvetica-Bold",
    fontSize: 8,
    color: "#121b2d",
  },
  specValue: {
    width: "auto",
    fontSize: 8,
    color: "#6c727f",
  },
  certContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 6,
  },
  certBadge: {
    backgroundColor: "#fff6f2",
    padding: "2px 6px",
    borderRadius: 12,
    marginRight: 6,
    marginBottom: 4,
    fontSize: 7,
    color: "#ff7f41",
    fontWeight: "bold",
  },
  footer: {
    marginTop: 32,
    paddingTop: 16,
    borderTop: "1px solid #f4f6f9",
    textAlign: "center",
    fontSize: 8,
    color: "#6c727f",
  },
  footerText: {
    marginBottom: 4,
  },
});

const categoryMeta = {
  battery: {
    name: "Battery Storage Systems",
    desc: "High-performance LiFePO4 battery packs for residential, commercial, and industrial energy storage. Grade-A cells, smart BMS, and 6000+ cycle life.",
  },
  inverter: {
    name: "Solar Inverters",
    desc: "Efficient hybrid inverters with MPPT technology, parallel capability, and IP54 options. Perfect for off‑grid, on‑grid, and backup systems.",
  },
  "electric-mobility": {
    name: "Electric Mobility",
    desc: "Electric motorcycles and scooters engineered for urban commuting and last‑mile delivery. Reliable motors, long‑range batteries, and rugged frames.",
  },
};

function getKeySpecs(product) {
  const specs = [];
  const cat = product.category;
  const s = product.specifications || {};

  if (cat === "battery") {
    if (s.nominalVoltage) specs.push({ label: "Voltage", value: s.nominalVoltage });
    if (s.capacity) specs.push({ label: "Capacity", value: s.capacity });
    if (s.energy) specs.push({ label: "Energy", value: s.energy });
    if (s.cellType) specs.push({ label: "Cell", value: s.cellType });
    if (s.cycleLife) specs.push({ label: "Cycle Life", value: s.cycleLife });
  } else if (cat === "inverter") {
    if (s.power) specs.push({ label: "Power", value: s.power });
    if (s.dcInput) specs.push({ label: "DC Input", value: s.dcInput });
    if (s.acOutput) specs.push({ label: "AC Output", value: s.acOutput });
    if (s.efficiency) specs.push({ label: "Efficiency", value: s.efficiency });
  } else if (cat === "electric-mobility") {
    if (s.maxSpeed || s.topSpeed) specs.push({ label: "Top Speed", value: s.maxSpeed || s.topSpeed });
    if (s.maxRange || s.mileage) specs.push({ label: "Range", value: s.maxRange || s.mileage });
    if (s.motor) specs.push({ label: "Motor", value: s.motor });
    if (s.battery) specs.push({ label: "Battery", value: s.battery });
  }
  return specs.slice(0, 5);
}

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category");

    if (!category || !categoryMeta[category]) {
      return new NextResponse("Invalid or missing category", { status: 400 });
    }

    const filteredProducts = productData.filter(p => p.category === category);
    if (filteredProducts.length === 0) {
      return new NextResponse("No products found for this category", { status: 404 });
    }

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
    const logoUrl = `${baseUrl}/images/logos/joyhandLogo.png`;

    const PdfDocument = () => (
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.header}>
            <View style={styles.logoContainer}>
              <Image src={logoUrl} style={styles.logo} alt="JoyHand Logo" />
            </View>
            <View style={styles.headerText}>
              <Text style={styles.headerTitle}>Product Catalog</Text>
              <Text style={styles.headerSubtitle}>Factory Direct • ISO 9001:2025</Text>
            </View>
          </View>

          <View style={styles.categoryHeader}>
            <Text style={styles.categoryTitle}>{categoryMeta[category].name}</Text>
            <Text style={styles.categoryDesc}>{categoryMeta[category].desc}</Text>
          </View>

          {filteredProducts.map((product, idx) => {
            const keySpecs = getKeySpecs(product);
            const imageUrl = `${baseUrl}${product.image}`;
            return (
              <View key={idx} style={styles.productCard} wrap={false}>
                <View style={styles.productImageContainer}>
                  <Image src={imageUrl} style={styles.productImage} alt={product.name} />
                </View>
                <View style={styles.productDetails}>
                  <Text style={styles.productName}>{product.name} {product.model}</Text>
                  <Text style={styles.productDescription}>{product.description}</Text>
                  <View style={styles.specsContainer}>
                    {keySpecs.map((spec, i) => (
                      <View key={i} style={styles.specRow}>
                        <Text style={styles.specLabel}>{spec.label}:</Text>
                        <Text style={styles.specValue}>{spec.value}</Text>
                      </View>
                    ))}
                  </View>
                  {product.certifications && product.certifications.length > 0 && (
                    <View style={styles.certContainer}>
                      {product.certifications.map((cert, i) => (
                        <Text key={i} style={styles.certBadge}>{cert}</Text>
                      ))}
                    </View>
                  )}
                </View>
              </View>
            );
          })}

          <View style={styles.footer}>
            <Text style={styles.footerText}>© JoyHand Energy – Professional Energy Solutions</Text>
            <Text style={styles.footerText}>sales@j-yhand.com | +86 130 6085 0617</Text>
            <Text style={styles.footerText}>Catalog generated on {new Date().toLocaleDateString()} from live product data</Text>
          </View>
        </Page>
      </Document>
    );

    const pdfBuffer = await renderToBuffer(<PdfDocument />);

    return new NextResponse(pdfBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="joyhand-${category}-catalog.pdf"`,
      },
    });
  } catch (error) {
    console.error("PDF generation error:", error);
    return new NextResponse("Failed to generate PDF. Please check server logs.", { status: 500 });
  }
}