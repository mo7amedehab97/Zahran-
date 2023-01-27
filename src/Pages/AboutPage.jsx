import React from 'react'
import AboutUs from '../Components/AboutUs/AboutUs'
import Location from '../Components/AboutUs/Location'
import Footer from '../Components/Footer/Footer'
import Navbar from '../Components/Navbar/Navbar'

const AboutPage = () => {
  return (
    <section>
    <Navbar />
    <Location />
    <AboutUs />
    <Footer />
    </section>
  )
}

export default AboutPage