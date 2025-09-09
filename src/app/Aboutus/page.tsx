import EduacationalPartner from '@/components/AboutUs/Eduacational-Partner'
import HeroSecton from '@/components/AboutUs/Hero-section'
import MentorMeet from '@/components/AboutUs/MentorMeet'
import OurImpact from '@/components/AboutUs/OurImpact'
import OurLegacy from '@/components/AboutUs/OurLegacy'
import Timeline from '@/components/AboutUs/Timeline'
import WebinarFree from '@/components/AboutUs/WebinarFree'
import ImageScroll from '@/components/Common/ImageScroll'
import SuccessStories from '@/components/Common/SuccessStories'
import React from 'react'

const page = () => {
  return (
    <>
    <HeroSecton/>
    <EduacationalPartner/>
    <OurImpact/>
    <OurLegacy/>
    <Timeline/>
    <MentorMeet/>
    <ImageScroll/>
    <SuccessStories/>
    <WebinarFree/>
    </>
  )
}

export default page
