import "./globals.css";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import ScrollToTop from "@/components/scrollTotop/ScrollToTop";
import PageLoader from "@/components/pageLoader/PageLoader";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <PageLoader>
          <Header />
          <main>{children}</main>
          <Footer />
          <ScrollToTop />
        </PageLoader>
      </body>
    </html>
  );
}