import EduacationalPartner from '@/components/AboutUs/Eduacational-Partner'
import ExecutiveTeam from '@/components/AboutUs/ExecutiveTeam'
import HeroSecton from '@/components/AboutUs/Hero-section'
import MentorMeet from '@/components/AboutUs/MentorMeet'
import MissionValues from '@/components/AboutUs/Mission-Values'
import OurImpact from '@/components/AboutUs/OurImpact'
import OurLegacy from '@/components/AboutUs/OurLegacy'
import Timeline from '@/components/AboutUs/Timeline'
import WebinarFree from '@/components/AboutUs/WebinarFree'
import ImageScroll from '@/components/Common/ImageScroll'
import PlacementPartners from '@/components/Common/partner'
import SuccessStories from '@/components/Common/SuccessStories'
import React from 'react'
import NeedAssistance from '@/components/Common/NeedAssistance'
import ChatAssistant from '@/components/Common/ChatAssistance'

const page = () => {
  return (
    <>
    <HeroSecton/>
    <NeedAssistance/>
    <ChatAssistant/>  
    <EduacationalPartner/>
    <OurImpact/>
    <OurLegacy/>
    <MissionValues/>  
    <Timeline/>
    <PlacementPartners/>
    <MentorMeet/>
    <ImageScroll/>
    <SuccessStories/>
    <ExecutiveTeam/>
    <WebinarFree/>
    </>
  )
}

export default page
