
import HeroSlider from "@/components/Home/HeroSlider";
import CpaHero from "@/components/Home/CpaHero";
import CPASection from "@/components/Common/CpaSection";
import LMSSection from "@/components/Common/LmsSection";
import PlacementSection from "@/components/Common/PlacementReport";
import Partner from "@/components/Common/partner";
import ContentPartner from "@/components/Common/ContentPartner";
import Introduction from "@/components/Common/introduction";
import InstitutionalPartner from "@/components/Common/InstitutionalPartner";
import SuccessStories from "@/components/Common/SuccessStories";
import FAQ from "@/components/Common/faq";
import ButtonGrid from "@/components/Common/ButtonGrid";
import BenefitsSection from "@/components/Common/benefits";
import ImageScroll from "@/components/Common/ImageScroll";
export default function Home() {
  return (
    <>
   <HeroSlider/>
   <Partner/>
   <CpaHero/>
   <CPASection/>
   <ContentPartner/>
   <Introduction/>  
   <InstitutionalPartner/>
   <SuccessStories/>
   <ImageScroll/>
   <BenefitsSection/>
   <FAQ/>
   <PlacementSection/>
   <LMSSection/>
   <ButtonGrid/>    
   {/* <ContentPartner/> */}
    </>
  );
}
