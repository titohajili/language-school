import React from 'react'
import Hero from './Hero/Hero'
import Languages from './Languages/Languages'
import HelpLearn from './HelpLearn/HelpLearn'
import Services from './Services/Services'
import Offer from './Offer/Offer'
import OurStudents from './OurStudents/OurStudents'
import News from './News/News'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Languages/>
      <HelpLearn/>
      <Services/>
      <Offer/>
      <OurStudents/>
      <News/>
    </div>
  )
}

export default Home
