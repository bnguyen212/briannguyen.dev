import React from 'react'
import { Icon, Reveal, Button, Card, Image } from 'semantic-ui-react';

const Projects = ({navigate, projects, screenWidth}) => {
  return (
    <div id="projects" onMouseOver={navigate}>
      <h1 style={{ marginBottom: "30px" }} className="section_header">My Projects</h1>
      <Card.Group stackable={true} itemsPerRow={screenWidth > 1100 ? 3 : 2}>
        {projects.map((project, index) => (
          <Card key={project.name} color={index%2 ? "teal" : "orange"}>
            <Card.Content header={project.name} meta={project.date} />
            <Reveal animated="move up">
              <Reveal.Content visible>
                <Image as="img" fluid={true} src={project.img} />
              </Reveal.Content>
              <Reveal.Content hidden>
                <Card.Description className="project-description">
                  {project.desc}
                  <br />
                  <br />
                  <span style={{ fontSize: "15px" }}>
                    <u>Tech Stack</u>: {project.stacks}
                  </span>
                </Card.Description>
              </Reveal.Content>
            </Reveal>
            <Card.Content extra textAlign="center">
              <a href={project.github} rel="noopener noreferrer" target="_blank">
                <Button color="black" size="tiny" icon>
                  <Icon name="github" size="large" />
                </Button>
              </a>
              {project.other && (
                <a href={project.other} rel="noopener noreferrer" target="_blank">
                  <Button color="green" size="tiny" icon>
                    <Icon name="arrow right" size="large" />
                  </Button>
                </a>
              )}
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </div>
  )
}

export default Projects;