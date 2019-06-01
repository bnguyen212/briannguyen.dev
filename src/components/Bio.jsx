import React from 'react'
import { Icon } from 'semantic-ui-react';
import profile from '../assets/profile.jpg'

const Bio = () => {
  return (
    <div id="biography">
      <h1 style={{ margin: 0 }} className="section_header">About Me:</h1>
      <img src={profile} className="profile" alt="Brian Nguyen" height="250px" />
      <div className="text-intro loc">
        <Icon fitted={true} size="large" color="red" name="map marker alternate" /> <span className="location">San Francisco, CA</span>
      </div>
      <div className="text-intro">
        I graduated from the <a className="url" href="//www.upenn.edu" target="_blank" rel="noopener noreferrer"><strong>University of Pennsylvania</strong></a> with a BA in Economics and Linguistics.
        I previously worked in IT Support and EB-5 Investor Relations before switching to Software Development.
        My journey as a developer began in 2018 after an immersive semester of software engineering at the <strong>Horizons School of Technology</strong>, where I also worked as the Junior Instructor for the summer cohorts.
        I currently work at <strong>Make School</strong>, a 21st century college for applied computer science, to support instructors and students in the frontend & backend web development tracks. Via this opportunity I get work with emerging developers of various background on so many awesome projects using many different frameworks and libraries.
      </div>
      <div className="text-intro">
        As a software developer, I aspire to build sustainable products that increase human productivity and facilitate personal and/or collective growth.
        I am especially fond of apps that make people's live easier, hence my two favorites are <a className="url" href="//1password.com" target="_blank" rel="noopener noreferrer"><strong>1Password</strong></a> and <a className="url" href="//www.grammarly.com" target="_blank" rel="noopener noreferrer"><strong>Grammarly</strong></a>. A few of the most exciting projects I have worked on are definitely ones I still use frequently afterward, be sure to <strong>check out my Chrome extension JobMate below</strong>!
        My friends describe me as a 5-year-old at heart, always curious and desires to learn something new everyday.
        A lot of my free time lately is spent on Udemy sharpening my skills and keeping up with the tech industry's latest developments.
        Let’s chat if you share any of my interests listed below and/or have a project idea you would like to collaborate on (extra kudos if you want to discuss that over boba tea)!
      </div>
      <div className="text-intro"><strong>
        I am actively seeking full-time SWE opportunities (frontend & full-stack) and would love to chat further if your company is hiring!
      </strong></div>
    </div>
  )
}

export default Bio;