import "./globals.css";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import ScrollToTop from "@/components/scrollTotop/ScrollToTop";
import PageLoader from "@/components/pageLoader/PageLoader";

// SEO Metadata - Currently set to private as requested
export const metadata = {
  title: "Joyhand | Premium Energy Storage Manufacturer",
  description: "Direct manufacturing of LFP batteries and solar solutions.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({ children }) {
  return (
    // "data-scroll-behavior" tells Next.js you are handling smooth scroll
    <html lang="en" data-scroll-behavior="smooth">
      <body suppressHydrationWarning={true}>
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