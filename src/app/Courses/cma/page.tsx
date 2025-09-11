import React from 'react'
import HeroSection from '@/components/Courses/CMA US/Hero-section'
import NeedAssistance from '@/components/Common/NeedAssistance'
import ChatAssistant from '@/components/Common/ChatAssistance'
import MentorMeet from '@/components/AboutUs/MentorMeet'
import FAQSection from '@/components/NsaExamPrep/Faq'
import PlacementSection from '@/components/Common/PlacementReport'

const page = () => {
  return (
    <div>
      {/* <HeroSection /> */}
      <NeedAssistance />    
      <ChatAssistant />
      <MentorMeet />    
      <PlacementSection/>
      <FAQSection/>
    </div>
  )
}

export default page
