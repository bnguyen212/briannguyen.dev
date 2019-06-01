import React, { Component } from 'react';
import './App.css';
import jobmate from './assets/JobMateExample.png';
import munchmates from './assets/MunchmatesExample.png';
import horizonsApp from './assets/HorizonsAppExample.png';
import reactiveDocs from './assets/ReactiveDocsExample.png';
import schedulerBot from './assets/SchedulerBotExample.png';
import { scroller } from 'react-scroll';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import About from './components/About';
import Interests from './components/Interests';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screenWidth: window.innerWidth,
      activeIndex: 'intro',
      nav: [
        {
          directory: 'intro',
          display: 'Home',
          icon: 'home'
        },
        {
          directory: 'about',
          display: 'About Me',
          icon: 'info circle'
        },
        {
          directory: 'skills',
          display: 'Skills',
          icon: 'server'
        },
        {
          directory: 'projects',
          display: 'Projects',
          icon: 'folder'
        },
        {
          directory: 'contact',
          display: 'Contact',
          icon: 'address card'
        },
        {
          url: '//dropbox.com/s/8ghkc1oufkyqk0m/BrianNguyen_Resume.pdf',
          display: 'Résumé',
          icon: 'file alternate'
        }
      ],
      interests: ['Product Development', 'UI/UX Design', 'Data Science', 'Education', ' Social Impact', 'Foreign Languages', 'Photography', 'Fashion', 'Real Estate', 'Health Tech'],
      skills: {
        'Foreign Language': [
          {
            name: 'Vietnamese',
            proficient: true
          }
        ],
        'Programming Languages': [
          {
            name: 'JavaScript',
            proficient: true
          },
          {
            name: 'Java',
            proficient: false
          },
          {
            name: 'Python',
            proficient: false
          },
          {
            name: 'Ruby',
            proficient: false
          }
        ],
        Frontend: [
          {
            name: 'HTML5',
            proficient: true
          },
          {
            name: 'CSS3',
            proficient: true
          },
          {
            name: 'React',
            proficient: true
          },
          {
            name: 'Redux',
            proficient: true
          },
          {
            name: 'React Native',
            proficient: true
          },
          {
            name: 'jQuery',
            proficient: true
          },
          {
            name: 'Bootstrap',
            proficient: true
          },
          {
            name: 'Semantic UI',
            proficient: true
          }
        ],
        Backend: [
          {
            name: 'Node.js',
            proficient: true
          },
          {
            name: 'ExpressJS',
            proficient: true
          },
          {
            name: 'OAuth',
            proficient: true
          },
          {
            name: 'Django',
            proficient: false
          },
          {
            name: 'Rails',
            proficient: false
          },
          {
            name: 'Firebase',
            proficient: false
          }
        ],
        Database: [
          {
            name: 'MongoDB',
            proficient: true
          },
          {
            name: 'PostgreSQL',
            proficient: true
          },
          {
            name: 'AWS',
            proficient: false
          },
          {
            name: 'SQLite',
            proficient: false
          },
          {
            name: 'Redis',
            proficient: false
          }
        ],
        DevOps: [
          {
            name: 'GitHub',
            proficient: true
          },
          {
            name: 'Visual Studio Code',
            proficient: true
          },
          {
            name: 'Heroku',
            proficient: true
          },
          {
            name: 'npm',
            proficient: true
          },
          {
            name: 'Docker',
            proficient: false
          }
        ],
        'Other Tools': [
          {
            name: 'G Suite',
            proficient: true
          },
          {
            name: 'Slack',
            proficient: true
          },
          {
            name: 'Trello',
            proficient: true
          },
          {
            name: 'Asana',
            proficient: true
          },
          {
            name: 'Airtable',
            proficient: true
          },
          {
            name: 'Sketch',
            proficient: false
          },
          {
            name: 'Agile / Scrum',
            proficient: false
          }
        ]
      },
      projects: [
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
    }
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({ screenWidth: window.innerWidth });
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
    return (
      <div className="App">
        <Navbar activeIndex={this.state.activeIndex}
                handleItemClick={this.handleItemClick}
                scrollTo={this.scrollTo}
                nav={this.state.nav} />
        <div id="contents">
          <Intro navigate={() => this.setState({ activeIndex: "intro" })} />
          <About navigate={() => this.setState({ activeIndex: "about" })} >
            <Interests interests={this.state.interests} />
          </About>
          <Skills navigate={() => this.setState({ activeIndex: "skills" })}
                  skills={this.state.skills} />
          <Projects navigate={() => this.setState({ activeIndex: "projects" })}
                    projects={this.state.projects}
                    screenWidth={this.state.screenWidth} />
          <Contact navigate={() => this.setState({ activeIndex: "contact" })} />
        </div>
      </div>
    )
  }
}

export default App;
