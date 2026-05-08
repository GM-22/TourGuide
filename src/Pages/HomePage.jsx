import React from 'react'
import Banner from '../Sections/Banner'
import Explore from '../Sections/Explore'
import TrendingSection from '../Sections/TrendingSection'
import Featured from '../Sections/Featured'
import MobileApp from '../Sections/MobileApp'
import Gallery from '../Sections/Gallery'
import Stories from '../Sections/Stories'

const HomePage = () => {
  return (
    <>
        <Banner />
        <Explore />
        <TrendingSection  />
        <Featured />
        <MobileApp />
        <Gallery />
        <Stories />
    </>
  )
}

export default HomePage