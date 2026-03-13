import BusinessModel from "@/components/partnershipModel/BusinessModel";
import CtaBanner from "@/components/ctaBanner/CtaBanner";
import EnergyPlatforms from "@/components/solarServices/EnergyPlatforms";
import Hero from "@/components/hero/Hero";
import HomeBlogSection from "@/components/homeBlog/HomeBlogSection";
import InnovationShowcase from "@/components/innovation/InnovationShowcase";
import TrustSignals from "@/components/trustSignals/TrustSignals";
export default function Home() {
  return (
    <>
      <Hero />
      <TrustSignals />
      <BusinessModel />
      <InnovationShowcase />
      <EnergyPlatforms />
      <CtaBanner />  
      <HomeBlogSection/>    
      
    </>
  );
}