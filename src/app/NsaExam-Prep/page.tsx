import NeedAssistance from '@/components/Common/NeedAssistance'
import SuccessStories from '@/components/Common/SuccessStories'
import ChatAssistant from '@/components/Common/ChatAssistance'
 import React from 'react'
import LmsSection from '@/components/Common/LmsSection'
import HeroSection from '@/components/NsaExamPrep/Hero-section'
const page = () => {
  return (
    <div>
        <HeroSection/>
      <SuccessStories/>
      <NeedAssistance/>
      <ChatAssistant/>
      <LmsSection/> 
          </div>
  )
}

export default page
