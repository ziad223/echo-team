import React from 'react'
import Counter from '../components/counter/Counter'
import Team from '../components/team/Team'
import Testimonails from '../components/testimonails/Testimonails'

const About = () => {
  return (
    <div className='about container'>
      <h2 className='title'>
        <h2>About Us</h2>
      </h2>
      <Counter/>
      <Team/>
      <Testimonails/>
    </div>
  )
}

export default About
