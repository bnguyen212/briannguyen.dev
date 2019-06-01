import React from 'react'
import { Responsive } from 'semantic-ui-react';


const Intro = ({navigate}) => {
  return (
    <div id="intro" onMouseOver={navigate}>
      <div className="heading">
        <Responsive maxWidth={700}>
          <h1 className="titles">
            SOFTWARE DEVELOPER
          </h1>
          <h1 className="titles">
            LIFELONG LEARNER
          </h1>
          <h1 className="titles">
            TECH ENTHUSIAST
          </h1>
          <div className="quote">
            "Life isn't about finding yourself.
            <br />
            Life is about creating yourself."
          </div>
        </Responsive>
        <Responsive minWidth={701}>
          <h1 className="titles">
            SOFTWARE DEVELOPER • LIFELONG LEARNER • TECH ENTHUSIAST
          </h1>
          <div className="quote">
            "Life isn't about finding yourself. Life is about creating yourself."
          </div>
        </Responsive>
      </div>
    </div>
  )
}

export default Intro;