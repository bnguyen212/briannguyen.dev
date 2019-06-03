import React, { Component } from 'react';
import './css/App.css';
import { scroller } from 'react-scroll';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screenWidth: window.innerWidth,
      activeIndex: 'intro'
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
    this.setState({ activeIndex: name })
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
                scrollTo={this.scrollTo} />
        <div id="contents" className="contents">
          <Intro navigate={() => this.setState({ activeIndex: "intro" })} />
          <About navigate={() => this.setState({ activeIndex: "about" })} />
          <Skills navigate={() => this.setState({ activeIndex: "skills" })}
                  screenWidth={this.state.screenWidth} />
          <Projects navigate={() => this.setState({ activeIndex: "projects" })}
                    screenWidth={this.state.screenWidth} />
          <Contact navigate={() => this.setState({ activeIndex: "contact" })}
                   screenWidth={this.state.screenWidth} />
        </div>
      </div>
    )
  }
}

export default App;
