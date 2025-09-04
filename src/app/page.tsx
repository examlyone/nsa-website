
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
export default function Home() {
  return (
    <>
   <HeroSlider/>
   <Partner/>
   <CpaHero/>
   <CPASection/>
   <Introduction/>  
   <InstitutionalPartner/>
   <SuccessStories/>
   <PlacementSection/>
   <LMSSection/>

   {/* <ContentPartner/> */}
    </>
  );
}
