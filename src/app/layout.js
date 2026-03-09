import "./globals.css";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import ScrollToTop from "@/components/scrollTotop/ScrollToTop";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        <Header />
        <main>{children}</main>
        <Footer />

        {/* [2] Rendered here to ensure global accessibility */}
        <ScrollToTop />
      </body>
    </html>
  );
}
