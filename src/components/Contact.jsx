import React from 'react'
import gmail from '../assets/Gmail-logo.png';
import linkedin from '../assets/LinkedIn-Logo.png';
// import instagram from './assets/Instagram-Logo.png';
import github from '../assets/github-logo.png';
import { Responsive } from 'semantic-ui-react';


const Contact = ({navigate}) => {
  return (
    <div id="contact" onMouseOver={navigate}>
      <h1 className="section_header">Let's stay in touch</h1>
      <Responsive minWidth={601} className="links">
        <div className="links">
          <a href="mailto:contact@briannguyen.dev" rel="noopener noreferrer" target="_blank">
            <img src={gmail} alt="GMail" height="75px" />
          </a>
          <a href="//linkedin.com/in/brian-trong-nguyen" rel="noopener noreferrer" target="_blank">
            <img src={linkedin} alt="LinkedIn" height="75px" />
          </a>
          <a href="//github.com/bnguyen212" rel="noopener noreferrer" target="_blank">
            <img src={github} alt="GitHub" height="75px" />
          </a>
        </div>
      </Responsive>
      <Responsive maxWidth={600} className="links">
        <div className="links">
          <a href="mailto:contact@briannguyen.dev" rel="noopener noreferrer" target="_blank">
            <img src={gmail} alt="GMail" height="50px" />
          </a>
          <a href="//linkedin.com/in/brian-trong-nguyen" rel="noopener noreferrer" target="_blank">
            <img src={linkedin} alt="LinkedIn" height="50px" />
          </a>
          <a href="//github.com/bnguyen212" rel="noopener noreferrer" target="_blank">
            <img src={github} alt="GitHub" height="50px" />
          </a>
        </div>
      </Responsive>
      <h3 className="copyright">© 2019 briannguyen.dev</h3>
    </div>
  )
}

export default Contact