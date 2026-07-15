import SiteHeader from "@/components/SiteHeader";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Archive from "@/components/Archive";
import WhyProjectPack from "@/components/WhyProjectPack";
import Faq from "@/components/Faq";
import SiteFooter from "@/components/SiteFooter";

export default function Home() {
  return (
    <div id="top">
      <SiteHeader />
      <main id="main">
        <Hero />
        <HowItWorks />
        <Archive />
        <WhyProjectPack />
        <Faq />
      </main>
      <SiteFooter />
    </div>
  );
}
