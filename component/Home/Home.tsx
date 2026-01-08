import React from 'react'
import Hero from './Hero/Hero'
import Languages from './Languages/Languages'
import HelpLearn from './HelpLearn/HelpLearn'
import Services from './Services/Services'
import Offer from './Offer/Offer'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Languages/>
      <HelpLearn/>
      <Services/>
      <Offer/>
    </div>
  )
}

export default Home
