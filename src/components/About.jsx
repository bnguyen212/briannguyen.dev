import React from 'react'
import Bio from './Bio';

const About = ({navigate, children}) => {
  return (
    <div id="about" onMouseOver={navigate}>
      <Bio />
      {children}
    </div>
  )
}

export default About;