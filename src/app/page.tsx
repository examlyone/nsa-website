
import HeroSlider from "@/components/Home/HeroSlider";
import CpaHero from "@/components/Home/CpaHero";
import CPASection from "@/components/Common/CpaSection";
import LMSSection from "@/components/Common/LmsSection";
import PlacementSection from "@/components/Common/PlacementReport";
import Partner from "@/components/Common/partner";
import ContentPartner from "@/components/Common/ContentPartner";
import Introduction from "@/components/Common/introduction";
export default function Home() {
  return (
    <>
   <HeroSlider/>
   <Partner/>
   <CpaHero/>
   <CPASection/>
   <LMSSection/>
   <PlacementSection/>
   {/* <ContentPartner/> */}
   <Introduction/>  
    </>
  );
}
