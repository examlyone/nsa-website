import EduacationalPartner from '@/components/AboutUs/Eduacational-Partner'
import HeroSecton from '@/components/AboutUs/Hero-section'
import OurImpact from '@/components/AboutUs/OurImpact'
import OurLegacy from '@/components/AboutUs/OurLegacy'
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
    <ImageScroll/>
    <SuccessStories/>
    <WebinarFree/>
    </>
  )
}

export default page
