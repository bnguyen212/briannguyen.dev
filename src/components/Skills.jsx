import React from 'react'
import { Button, Responsive } from 'semantic-ui-react';

const Skills = ({skills, navigate}) => {
  return (
    <div id="skills" onMouseOver={navigate}>
      <Responsive minWidth={752}>
        <div className="category">
          <h1 className="skill-header section_header">Skills</h1>
          <div className="skills-legend">
            <Button.Group size="medium">
              <Button className="non-click" color="green">Proficient</Button>
              <Button className="non-click" color="violet">Basic</Button>
            </Button.Group>
          </div>
        </div>
        {Object.keys(skills).map(category => (
          <div key={category} className="category">
            <h3 className="skill-name">{category}</h3>
            <div className="skills">
              {skills[category].map(skill => {
                return (
                  <Button key={skill.name} className="non-click" inverted color={skill.proficient ? "green" : "violet"}>
                    {skill.name}
                  </Button>
                )
              })}
            </div>
          </div>
        ))}
      </Responsive>
      <Responsive maxWidth={751}>
        <div>
          <h1 className="section_header">Skills</h1>
          <div className="skills-legend-mobile">
            <Button.Group compact size="medium">
              <Button className="non-click" color="green">Advanced</Button>
              <Button className="non-click" color="violet">Basic</Button>
            </Button.Group>
          </div>
        </div>
        {Object.keys(skills).map(category => (
          <div key={category}>
            <h3 className="skill-name-mobile">{category}</h3>
            <div className="skills-mobile">
              {skills[category].map(skill => {
                return (
                  <Button key={skill.name} className="non-click" inverted color={skill.proficient ? "green" : "violet"}>
                    {skill.name}
                  </Button>
                )
              })}
            </div>
          </div>
        ))}
      </Responsive>
    </div>
  )
}

export default Skills;