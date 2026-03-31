import "./globals.css";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import ScrollToTop from "@/components/scrollTotop/ScrollToTop";
import PageLoader from "@/components/pageLoader/PageLoader";
import CookieConsent from "@/components/cookieConsent/CookieConsent";

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
    <html lang="en" data-scroll-behavior="smooth">
      <body suppressHydrationWarning={true}>
        <PageLoader>
          <Header />
          <main>{children}</main>
          <Footer />
          <ScrollToTop />
        </PageLoader>
        {/* Cookie consent banner appears after everything, fixed at bottom */}
        <CookieConsent />
      </body>
    </html>
  );
}