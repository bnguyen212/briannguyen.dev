import React from 'react';
import '../css/Projects.css';
import { Icon, Reveal, Button, Card, Image } from 'semantic-ui-react';
import jobmate from '../assets/JobMateExample.png';
import munchmates from '../assets/MunchmatesExample.png';
import horizonsApp from '../assets/HorizonsAppExample.png';
import reactiveDocs from '../assets/ReactiveDocsExample.png';
import schedulerBot from '../assets/SchedulerBotExample.png';

const Projects = ({navigate, screenWidth}) => {

  const projects = [
    {
      name: 'JobMate',
      date: 'September 2018',
      img: jobmate,
      desc: 'A Chrome extension to scan job board postings and save job details on Airtable for tracking purpose.',
      stacks: 'jQuery, Bootstrap, Airtable API',
      github: '//github.com/bnguyen212/jobmate',
      other: '//chrome.google.com/webstore/detail/jobmate/dhehfnkpbknogddkkiabopofhkcimcle?hl=en'
    },
    {
      name: 'Horizons App',
      date: 'July 2018',
      img: horizonsApp,
      desc: 'A staff & student dashboard to optimize administrative tasks (attendance, assign programming pairs, feedbacks, etc).',
      stacks: 'React, Semantic UI, NodeJS, Express, MongoDB',
      github: '//github.com/bnguyen212/horizons-app'
    },
    {
      name: 'Munchmates',
      date: 'April 2018',
      img: munchmates,
      desc: 'A mobile app to connect young professionals with nearby temporary food experiences.',
      stacks: 'React Native, NodeJS, Express, PostgreSQL',
      github: '//github.com/bnguyen212/munchmates.github.io/tree/master/mmmobile'
    },
    {
      name: 'Reactive Docs',
      date: 'March 2018',
      img: reactiveDocs,
      desc: 'A rich text editor desktop application with simultaneous collaboration feature.',
      stacks: 'React, Electron, NodeJS, Express, DraftJS, Socket.io, MongoDB',
      github: '//github.com/bnguyen212/Reactive-Docs'
    },
    {
      name: 'Scheduler Bot',
      date: 'March 2018',
      img: schedulerBot,
      desc: 'An AI on Slack to automate the process of setting reminders and inviting people to an event on Google Calendar.',
      stacks: 'NodeJS, Express, Slack API, DialogFlow, Google Calendar API, MongoDB',
      github: '//github.com/bnguyen212/Slack-Scheduler-Bot'
    }
  ]

  return (
    <div id="projects" onMouseOver={navigate}>
      <h1 className="section_header">My Projects</h1>
      <Card.Group className="projects-container" stackable={true} itemsPerRow={screenWidth > 1100 ? 3 : 2}>
        {projects.map((project, index) => (
          <Card key={project.name} color={index%2 ? "teal" : "orange"}>
            <Card.Content header={project.name} meta={project.date} />
            <Reveal animated="move up">
              <Reveal.Content visible>
                <Image as="img" fluid={true} src={project.img} className="project-img" />
              </Reveal.Content>
              <Reveal.Content hidden>
                <Card.Description className="project-description">
                  {project.desc}
                  <br />
                  <br />
                  <span>
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