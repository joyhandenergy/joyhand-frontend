import CtaBanner from "@/components/ctaBanner/CtaBanner";
import Hero from "@/components/hero/Hero";
import HomeBlogSection from "@/components/homeBlog/HomeBlogSection";
import InnovationShowcase from "@/components/innovation/InnovationShowcase";
import SolarServices from "@/components/solarServices/SolarServices";
import TestyAbout from "@/components/testyAbout/TestyAbout";
import Trustee from "@/components/Trustee/Trustee";
export default function Home() {
  return (
    <>
      <Hero />
      <Trustee />
      <TestyAbout />
      <InnovationShowcase />
      <SolarServices/>
      <CtaBanner />  
      <HomeBlogSection/>    
      
    </>
  );
}