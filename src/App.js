import React, { Component } from 'react';
import { Menu, Icon, Reveal, Button, Responsive, Dropdown, Card, Image } from 'semantic-ui-react';
import './App.css';
import profile from './assets/profile.jpg'
import gmail from './assets/Gmail-logo.png';
import linkedin from './assets/LinkedIn-Logo.png';
import instagram from './assets/Instagram-Logo.png';
import github from './assets/github-logo.png';
import jobmate from './assets/JobMateExample.png';
import munchmates from './assets/MunchmatesExample.png';
import horizonsApp from './assets/HorizonsAppExample.png';
import reactiveDocs from './assets/ReactiveDocsExample.png';
import schedulerBot from './assets/SchedulerBotExample.png';
import { scroller } from 'react-scroll';

class App extends Component {
  state = {
    activeIndex: 'intro',
  }

  scrollTo = (name) => {
    scroller.scrollTo(name, {
      duration: 1000,
      delay: 0,
      smooth: 'easeInOutQuart',
      containerId: 'contents',
      offset: -80
    })
  }

  handleItemClick = (e, { name }) => {
    this.scrollTo(name);
    this.setState({ activeIndex: name })
  }

  render() {
    const { activeIndex } = this.state
    return <div className="App">
        <Responsive minWidth={411}>
          <header className="small-header">
            <h1 onClick={() => this.scrollTo("intro")} className="small-title">
              Brian Nguyen<span className="blinking-cursor">|</span>
            </h1>
            <Responsive minWidth={900}>
              <Menu inverted size="small" compact={true} className="nav-bar">
                <Menu.Item active={activeIndex === "intro"} color="blue" name="intro" onClick={this.handleItemClick}>
                  <Icon name="home" size="large" /> Home
                </Menu.Item>
                <Menu.Item active={activeIndex === "about"} color="blue" name="about" onClick={this.handleItemClick}>
                  <Icon name="info circle" size="large" /> About Me
                </Menu.Item>
                <Menu.Item active={activeIndex === "skills"} color="blue" name="skills" onClick={this.handleItemClick}>
                  <Icon name="server" size="large" /> Skills
                </Menu.Item>
                <Menu.Item active={activeIndex === "projects"} color="blue" name="projects" onClick={this.handleItemClick}>
                  <Icon name="folder" size="large" /> Projects
                </Menu.Item>
                <Menu.Item active={activeIndex === "contact"} color="blue" name="contact" onClick={this.handleItemClick}>
                  <Icon name="address card" size="large" /> Contact
                </Menu.Item>
                <Menu.Item href="//dropbox.com/s/8ghkc1oufkyqk0m/BrianNguyen_Resume.pdf" target="_blank">
                  <Icon name="file alternate" size="large" /> Résumé
                </Menu.Item>
              </Menu>
            </Responsive>
            <Responsive maxWidth={899}>
              <Dropdown text="Navigations" compact button={true} wrapSelection={true} floating labeled icon="list layout" className="icon">
                <Dropdown.Menu direction="right">
                  <Dropdown.Item active={activeIndex === "intro"} name="intro" onClick={this.handleItemClick}>
                    <Icon name="home" size="large" /> Home
                  </Dropdown.Item>
                  <Dropdown.Item active={activeIndex === "about"} name="about" onClick={this.handleItemClick}>
                    <Icon name="info circle" size="large" /> About Me
                  </Dropdown.Item>
                  <Dropdown.Item active={activeIndex === "skills"} name="skills" onClick={this.handleItemClick}>
                    <Icon name="server" size="large" /> Skills
                  </Dropdown.Item>
                  <Dropdown.Item active={activeIndex === "projects"} name="projects" onClick={this.handleItemClick}>
                    <Icon name="folder" size="large" /> Projects
                  </Dropdown.Item>
                  <Dropdown.Item active={activeIndex === "contact"} name="contact" onClick={this.handleItemClick}>
                    <Icon name="address card" size="large" /> Contact
                  </Dropdown.Item>
                  <Dropdown.Item href="//dropbox.com/s/8ghkc1oufkyqk0m/BrianNguyen_Resume.pdf" target="_blank">
                    <Icon name="file alternate" size="large" /> Résumé
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Responsive>
          </header>
        </Responsive>
        <Responsive maxWidth={410}>
          <header className="small-header mobile-header">
            <Dropdown compact button={true} wrapSelection={true} floating icon="list layout" className="icon">
              <Dropdown.Menu direction="right">
                <Dropdown.Item active={activeIndex === "intro"} name="intro" onClick={this.handleItemClick}>
                  <Icon name="home" size="large" /> Home
                </Dropdown.Item>
                <Dropdown.Item active={activeIndex === "about"} name="about" onClick={this.handleItemClick}>
                  <Icon name="info circle" size="large" /> About Me
                </Dropdown.Item>
                <Dropdown.Item active={activeIndex === "skills"} name="skills" onClick={this.handleItemClick}>
                  <Icon name="server" size="large" /> Skills
                </Dropdown.Item>
                <Dropdown.Item active={activeIndex === "projects"} name="projects" onClick={this.handleItemClick}>
                  <Icon name="folder" size="large" /> Projects
                </Dropdown.Item>
                <Dropdown.Item active={activeIndex === "contact"} name="contact" onClick={this.handleItemClick}>
                  <Icon name="address card" size="large" /> Contact
                </Dropdown.Item>
                <Dropdown.Item href="//dropbox.com/s/8ghkc1oufkyqk0m/BrianNguyen_Resume.pdf" target="_blank">
                  <Icon name="file alternate" size="large" /> Résumé
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <h1 onClick={() => this.scrollTo("intro")} className="small-title">
              Brian Nguyen<span className="blinking-cursor">|</span>
            </h1>
          </header>
        </Responsive>
        <div id="contents">
          <div id="intro" onMouseOver={() => this.setState({
                activeIndex: "intro"
              })}>
            <div className="heading">
              <Responsive maxWidth={500}>
                <h1 className="titles">
                  FULL STACK DEVELOPER
                  <br />
                  LIFELONG LEARNER
                  <br />
                  TECH ENTHUSIAST
                </h1>
                <h5>
                  <i>
                    "Life isn't about finding yourself. Life is about
                    creating yourself."
                  </i>
                </h5>
              </Responsive>
              <Responsive minWidth={501}>
                <h1 className="titles">
                  FULL STACK DEVELOPER • LIFELONG LEARNER • TECH ENTHUSIAST
                </h1>
                <h3>
                  <i>
                    "Life isn't about finding yourself. Life is about
                    creating yourself."
                  </i>
                </h3>
              </Responsive>
            </div>
          </div>
          <div id="about" onMouseOver={() => this.setState({
                activeIndex: "about"
              })}>
            <div>
              <h1 style={{ margin: 0 }}>About Me:</h1>
              <img src={profile} className="profile" alt="Brian" height="300px" />
              <div className="text-intro">
                <Icon fitted={true} color="red" name="map marker alternate" /> San Francisco, CA
              </div>
              <div className="text-intro">
                I graduated from the <a className="url" href="//www.upenn.edu" target="_blank" rel="noopener noreferrer">
                  University of Pennsylvania
                </a> with a BA in Economics and Linguistics. I previously worked in IT Support and EB-5 Investor Relations before switching to Software Development. My journey as a developer began through an immersive semester of software engineering at the <a className="url" href="//joinhorizons.com" target="_blank" rel="noopener noreferrer">
                  Horizons School of Technology
                </a>. This experience helped me realize my passion for building products and also equipped me with the necessary skill set to do so.
              </div>
              <div className="text-intro">
                I am always seeking new knowledge both in- and outside of
                the software industry. Let’s chat if you share any of my
                interests listed below! In my free time, I enjoy working on
                personal projects that involve unfamiliar frameworks, APIs,
                and libraries to sharpen my skills (while binge watching my
                favorite TV shows Suits and The Big Bang Theory of course).
                I highly value efficiency and aspire to use technology to
                maximize the efficiency level of everything around me.
              </div>
              <div className="text-intro">
                <b>
                  I am actively seeking full-time opportunities and would
                  love to chat further if your company is hiring!
                </b>
              </div>
            </div>
            <h2 style={{ marginTop: 0 }}>Interests:</h2>
            <div className="interests">
              <Button inverted color="red">
                UI/UX Design
              </Button>
              <Button inverted color="red">
                Product Development
              </Button>
              <Button inverted color="red">
                FinTech
              </Button>
              <Button inverted color="red">
                HealthTech
              </Button>
              <Button inverted color="red">
                EdTech
              </Button>
              <Button inverted color="red">
                Social Impact
              </Button>
              <Button inverted color="red">
                Data Science
              </Button>
              <Button inverted color="red">
                Real Estate
              </Button>
              <Button inverted color="red">
                Photography
              </Button>
              <Button inverted color="red">
                Fashion
              </Button>
              <Button inverted color="red">
                Foreign Languages
              </Button>
            </div>
          </div>
          <div id="skills" onMouseOver={() => this.setState({
                activeIndex: "skills"
              })}>
            <Responsive minWidth={701}>
              <div className="category">
                <h1 className="skill-header">Skills</h1>
                <div className="skills">
                  <Button.Group size="medium">
                    <Button color="green">Proficient</Button>
                    <Button color="violet">Basic</Button>
                  </Button.Group>
                </div>
              </div>
              <div className="category">
                <h3 className="skill-category">Foreign Language</h3>
                <div className="skills">
                  <Button inverted color="green">
                    Vietnamese
                  </Button>
                </div>
              </div>
              <div className="category">
                <h3 className="skill-category">Programming Language</h3>
                <div className="skills">
                  <Button inverted color="green">
                    JavaScript
                  </Button>
                  <Button inverted color="violet">
                    Java
                  </Button>
                  <Button inverted color="violet">
                    Python
                  </Button>
                </div>
              </div>
              <div className="category">
                <h3 className="skill-category">Frontend</h3>
                <div className="skills">
                  <Button inverted color="green">
                    HTML5
                  </Button>
                  <Button inverted color="green">
                    CSS3
                  </Button>
                  <Button inverted color="green">
                    React
                  </Button>
                  <Button inverted color="green">
                    Redux
                  </Button>
                  <Button inverted color="green">
                    React Native
                  </Button>
                  <Button inverted color="green">
                    jQuery
                  </Button>
                  <Button inverted color="green">
                    Bootstrap
                  </Button>
                  <Button inverted color="green">
                    Semantic UI
                  </Button>
                  <Button inverted color="green">
                    Handlebars
                  </Button>
                </div>
              </div>
              <div className="category">
                <h3 className="skill-category">Backend</h3>
                <div className="skills">
                  <Button inverted color="green">
                    Node.js
                  </Button>
                  <Button inverted color="green">
                    Express
                  </Button>
                  <Button inverted color="green">
                    OAuth
                  </Button>
                  <Button inverted color="violet">
                    Firebase
                  </Button>
                </div>
              </div>
              <div className="category">
                <h3 className="skill-category">Database</h3>
                <div className="skills">
                  <Button inverted color="green">
                    MongoDB
                  </Button>
                  <Button inverted color="green">
                    PostgreSQL
                  </Button>
                </div>
              </div>
              <div className="category">
                <h3 className="skill-category">DevOps</h3>
                <div className="skills">
                  <Button inverted color="green">
                    GitHub
                  </Button>
                  <Button inverted color="green">
                    Visual Studio Code
                  </Button>
                  <Button inverted color="green">
                    Heroku
                  </Button>
                  <Button inverted color="green">
                    npm
                  </Button>
                  <Button inverted color="violet">
                    Webpack
                  </Button>
                </div>
              </div>
              <div className="category">
                <h3 className="skill-category">Other Tools</h3>
                <div className="skills">
                  <Button inverted color="green">
                    G Suite
                  </Button>
                  <Button inverted color="green">
                    Slack
                  </Button>
                  <Button inverted color="green">
                    Trello
                  </Button>
                  <Button inverted color="green">
                    Asana
                  </Button>
                  <Button inverted color="green">
                    Airtable
                  </Button>
                </div>
              </div>
            </Responsive>
            <Responsive maxWidth={700}>
              <div>
                <h1>Skills</h1>
                <div className="skills">
                  <Button.Group compact size="small">
                    <Button color="green">Advanced</Button>
                    <Button color="violet">Basic</Button>
                  </Button.Group>
                </div>
              </div>
              <h3>Foreign Language</h3>
              <div className="skills-mobile">
                <Button inverted color="green">
                  Vietnamese
                </Button>
              </div>
              <h3 className="skill-mobile">Programming Language</h3>
              <div className="skills-mobile">
                <Button inverted color="green">
                  JavaScript
                </Button>
                <Button inverted color="violet">
                  Java
                </Button>
                <Button inverted color="violet">
                  Python
                </Button>
              </div>
              <h3 className="skill-mobile">Frontend</h3>
              <div className="skills-mobile">
                <Button inverted color="green">
                  HTML5
                </Button>
                <Button inverted color="green">
                  CSS3
                </Button>
                <Button inverted color="green">
                  React
                </Button>
                <Button inverted color="green">
                  Redux
                </Button>
                <Button inverted color="green">
                  React Native
                </Button>
                <Button inverted color="green">
                  jQuery
                </Button>
                <Button inverted color="green">
                  Bootstrap
                </Button>
                <Button inverted color="green">
                  Semantic UI
                </Button>
                <Button inverted color="green">
                  Handlebars
                </Button>
              </div>
              <h3 className="skill-mobile">Backend</h3>
              <div className="skills-mobile">
                <Button inverted color="green">
                  Node.js
                </Button>
                <Button inverted color="green">
                  Express
                </Button>
                <Button inverted color="green">
                  OAuth
                </Button>
                <Button inverted color="violet">
                  Firebase
                </Button>
              </div>
              <h3 className="skill-mobile">Database</h3>
              <div className="skills-mobile">
                <Button inverted color="green">
                  MongoDB
                </Button>
                <Button inverted color="green">
                  PostgreSQL
                </Button>
              </div>
              <h3 className="skill-mobile">DevOps</h3>
              <div className="skills-mobile">
                <Button inverted color="green">
                  GitHub
                </Button>
                <Button inverted color="green">
                  Visual Studio Code
                </Button>
                <Button inverted color="green">
                  Heroku
                </Button>
                <Button inverted color="green">
                  npm
                </Button>
                <Button inverted color="violet">
                  Webpack
                </Button>
              </div>
              <h3 className="skill-mobile">Other Tools</h3>
              <div className="skills-mobile">
                <Button inverted color="green">
                  G Suite
                  </Button>
                <Button inverted color="green">
                  Slack
                  </Button>
                <Button inverted color="green">
                  Trello
                  </Button>
                <Button inverted color="green">
                  Asana
                  </Button>
                <Button inverted color="green">
                  Airtable
                  </Button>
              </div>
            </Responsive>
          </div>
          <div id="projects" onMouseOver={() => this.setState({
                activeIndex: "projects"
              })}>
            <h1 style={{ marginBottom: "1em" }}>My Projects</h1>
            <Card.Group stackable={true} itemsPerRow={3}>
              <Card color="orange">
                <Card.Content header="JobMate" meta="August 2018" />
                <Reveal animated="move up">
                  <Reveal.Content visible>
                    <Image as="img" fluid={true} src={jobmate} />
                  </Reveal.Content>
                  <Reveal.Content hidden>
                    <Card.Description className="project-description">
                      A Chrome extension to scan job board postings and save job details on Airtable for tracking purpose.
                      <br />
                      <br />
                      <span style={{ fontSize: "12px" }}>
                        <u>Tech Stack</u>: jQuery, Bootstrap, Airtable API
                      </span>
                    </Card.Description>
                  </Reveal.Content>
                </Reveal>
                <Card.Content extra textAlign="center">
                  <a href="//github.com/bnguyen212/jobmate" rel="noopener noreferrer" target="_blank">
                    <Button color="black" size="tiny" icon>
                      <Icon name="github" size="large" />
                    </Button>
                  </a>
                  <a href="//chrome.google.com/webstore/detail/jobmate/dhehfnkpbknogddkkiabopofhkcimcle?hl=en" rel="noopener noreferrer" target="_blank">
                    <Button color="green" size="tiny" icon>
                      <Icon name="arrow right" size="large" />
                    </Button>
                  </a>
                </Card.Content>
              </Card>

              <Card color="teal">
                <Card.Content header="Horizons App" meta="July 2018" />
                <Reveal animated="move up">
                  <Reveal.Content visible>
                    <Image as="img" fluid={true} src={horizonsApp} />
                  </Reveal.Content>
                  <Reveal.Content hidden>
                    <Card.Description className="project-description">
                      A staff & student dashboard to optimize administrative tasks (attendance, assign programming pairs, feedbacks, etc).
                      <br />
                      <br />
                      <span style={{ fontSize: "12px" }}>
                        <u>Tech Stack</u>: React, Semantic UI, NodeJS, Express, MongoDB
                      </span>
                    </Card.Description>
                  </Reveal.Content>
                </Reveal>
                <Card.Content extra textAlign="center">
                  <a href="//github.com/bnguyen212/horizons-app" rel="noopener noreferrer" target="_blank">
                    <Button color="black" size="tiny" icon>
                      <Icon name="github" size="large" />
                    </Button>
                  </a>
                  <a href="//horizons-app.herokuapp.com" rel="noopener noreferrer" target="_blank">
                    <Button color="green" size="tiny" icon>
                      <Icon name="arrow right" size="large" />
                    </Button>
                  </a>
                </Card.Content>
              </Card>

              <Card color="orange">
                <Card.Content header="Munchmates" meta="April 2018" />
                <Reveal animated="move up">
                  <Reveal.Content visible>
                    <Image as="img" fluid={true} src={munchmates} />
                  </Reveal.Content>
                  <Reveal.Content hidden>
                    <Card.Description className="project-description">
                      A mobile app to connect young professionals with nearby temporary food experiences.
                      <br />
                      <br />
                      <span style={{ fontSize: "12px" }}>
                        <u>Tech Stack</u>: React Native, NodeJS, Express, PostgreSQL
                      </span>
                    </Card.Description>
                  </Reveal.Content>
                </Reveal>
                <Card.Content extra textAlign="center">
                  <a href="//github.com/bnguyen212/horizons-app" rel="noopener noreferrer" target="_blank">
                    <Button color="black" size="tiny" icon>
                      <Icon name="github" size="large" />
                    </Button>
                  </a>
                  <a href="//munchmates.club" rel="noopener noreferrer" target="_blank">
                    <Button color="green" size="tiny" icon>
                      <Icon name="arrow right" size="large" />
                    </Button>
                  </a>
                </Card.Content>
              </Card>

              <Card color="teal">
                <Card.Content header="Reactive Docs" meta="March 2018" />
                <Reveal animated="move up">
                  <Reveal.Content visible>
                    <Image as="img" fluid={true} src={reactiveDocs} />
                  </Reveal.Content>
                  <Reveal.Content hidden>
                    <Card.Description className="project-description">
                      A rich text editor desktop application with simultaneous collaboration feature.
                      <br />
                      <br />
                      <span style={{ fontSize: "12px" }}>
                        <u>Tech Stack</u>: React, Electron, NodeJS, Express, DraftJS, Socket.io, MongoDB
                      </span>
                    </Card.Description>
                  </Reveal.Content>
                </Reveal>
                <Card.Content extra textAlign="center">
                  <a href="//github.com/bnguyen212/horizons-app" rel="noopener noreferrer" target="_blank">
                    <Button color="black" size="tiny" icon>
                      <Icon name="github" size="large" />
                    </Button>
                  </a>
                </Card.Content>
              </Card>

              <Card color="orange">
                <Card.Content header="Scheduler Bot" meta="March 2018" />
                <Reveal animated="move up">
                  <Reveal.Content visible>
                    <Image as="img" fluid={true} src={schedulerBot} />
                  </Reveal.Content>
                  <Reveal.Content hidden>
                    <Card.Description className="project-description">
                      An AI on Slack to automate the process of setting reminders and inviting people to an event on Google Calendar.
                      <br />
                      <br />
                      <span style={{ fontSize: "12px" }}>
                        <u>Tech Stack</u>: NodeJS, Express, Slack API, DialogFlow, Google Calendar API, MongoDB{" "}
                      </span>
                    </Card.Description>
                  </Reveal.Content>
                </Reveal>
                <Card.Content extra textAlign="center">
                  <a href="//github.com/bnguyen212/Slack-Scheduler-Bot" rel="noopener noreferrer" target="_blank">
                    <Button color="black" size="tiny" icon>
                      <Icon name="github" size="large" />
                    </Button>
                  </a>
                </Card.Content>
              </Card>
            </Card.Group>
          </div>
          <div id="contact" onMouseOver={() => this.setState({
                activeIndex: "contact"
              })}>
            <h1>
              Let's stay in touch / don't hesitate to reach out if you:
            </h1>
            <ul>
              <li>want to grab coffee or boba tea</li>
              <li>have suggestions for any of my projects</li>
              <li>have a cool idea and want to collaborate</li>
              <li>simply just want to say hi :)</li>
            </ul>
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
                <a href="//instagram.com/6rian.n9uyen/" rel="noopener noreferrer" target="_blank">
                  <img src={instagram} alt="Instagram" height="75px" />
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
                <a href="//instagram.com/6rian.n9uyen/" rel="noopener noreferrer" target="_blank">
                  <img src={instagram} alt="Instagram" height="50px" />
                </a>
              </div>
            </Responsive>
            <h3>© 2019 briannguyen.dev</h3>
          </div>
        </div>
      </div>;
  }
}

export default App;
