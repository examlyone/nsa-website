import NeedAssistance from '@/components/Common/NeedAssistance'
import SuccessStories from '@/components/Common/SuccessStories'
import ChatAssistant from '@/components/Common/ChatAssistance'
 import React from 'react'
import LmsSection from '@/components/Common/LmsSection'
import HeroSection from '@/components/NsaExamPrep/Hero-section'
import KeyFeatures from '@/components/NsaExamPrep/KeyFeatures'
import FAQSection from '@/components/NsaExamPrep/Faq'
import WhyChooseUs from '@/components/NsaExamPrep/WhyChooseNsa'
import CallToAction from '@/components/NsaExamPrep/CallToAction'
    const page = () => {
  return (
    <div>
        <HeroSection/>
        <KeyFeatures/>
        <WhyChooseUs/>  
      <SuccessStories/>
      <NeedAssistance/>
      <ChatAssistant/>
      <LmsSection/>
      <CallToAction/>
      <FAQSection/>
          </div>
  )
}

export default page
