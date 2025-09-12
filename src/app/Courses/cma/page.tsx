import React from 'react'
import HeroSection from '@/components/Courses/CMA US/Hero-section'
import NeedAssistance from '@/components/Common/NeedAssistance'
import ChatAssistant from '@/components/Common/ChatAssistance'
import MentorMeet from '@/components/AboutUs/MentorMeet'
import FAQSection from '@/components/NsaExamPrep/Faq'
import PlacementSection from '@/components/Common/PlacementReport'
import PartnerStats from '@/components/Courses/CMA US/contentpartner'
import CMAAdmissionProcess from '@/components/Courses/CMA US/cma-admission'
import NsaEcosystem from '@/components/Courses/CMA US/nsa-ecosystem'
import StudentSuccess from '@/components/Courses/CMA US/StudentSuccess'
import CMACertification from '@/components/Courses/CMA US/cma-certification'
import Roadmap from '@/components/Courses/CMA US/Roadmap'
import CMAIntro from '@/components/Courses/CMA US/cma-course'
const page = () => {
  return (
    <div>
      {/* <HeroSection /> */}
      <PartnerStats/>
      <NeedAssistance />    
      <ChatAssistant />
      <CMAIntro/>
      <MentorMeet />    
      <Roadmap/>
      <PlacementSection/>
      <NsaEcosystem/>
      <StudentSuccess/>
      <CMACertification/>
      <CMAAdmissionProcess/>
      <FAQSection/>
    </div>
  )
}

export default page
