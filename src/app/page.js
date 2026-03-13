import BusinessModel from "@/components/businessModel/BusinessModel";
import CtaBanner from "@/components/ctaBanner/CtaBanner";
import Hero from "@/components/hero/Hero";
import HomeBlogSection from "@/components/homeBlog/HomeBlogSection";
import InnovationShowcase from "@/components/innovation/InnovationShowcase";
import SolarServices from "@/components/solarServices/SolarServices";
import TrustSignals from "@/components/trustSignals/TrustSignals";
export default function Home() {
  return (
    <>
      <Hero />
      <TrustSignals />
      <BusinessModel />
      <InnovationShowcase />
      <SolarServices/>
      <CtaBanner />  
      <HomeBlogSection/>    
      
    </>
  );
}