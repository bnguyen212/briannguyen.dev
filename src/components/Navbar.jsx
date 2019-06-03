import React from 'react';
import '../css/Navbar.css';
import { Menu, Icon, Responsive, Dropdown } from 'semantic-ui-react';

const Navbar = ({activeIndex, handleItemClick, scrollTo}) => {

  const nav = [
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
  ]

  return (
    <header>
      <Responsive className="nav" minWidth={501}>
        <h1 onClick={() => scrollTo("intro")} className="site-name">
          <span className="brian">Brian Nguyen</span><span className="blinking-cursor">|</span>
        </h1>
        <Responsive minWidth={1000}>
          <Menu inverted size="small" compact={true} className="nav-bar">
            {nav.map(item => {
              if (item.hasOwnProperty('url')) {
                return (
                  <Menu.Item key={item.display} href={item.url} target="_blank">
                    <Icon name={item.icon} size="large" /> {item.display}
                  </Menu.Item>
                )
              } else {
                return (
                  <Menu.Item active={activeIndex === item.directory}
                             color="blue"
                             name={item.directory}
                             key={item.display}
                             onClick={handleItemClick} >
                    <Icon name={item.icon} size="large" /> {item.display}
                  </Menu.Item>
                )
              }
            })}
          </Menu>
        </Responsive>
        <Responsive maxWidth={999}>
          <Dropdown text="Navigations" button={true} wrapSelection={true} floating labeled icon="list layout" className="icon">
            <Dropdown.Menu direction="right">
              {nav.map(item => {
                if (item.hasOwnProperty('url')) {
                  return (
                    <Dropdown.Item key={item.display} href={item.url} target="_blank">
                      <Icon name={item.icon} size="large" /> {item.display}
                    </Dropdown.Item>
                  )
                } else {
                  return (
                    <Dropdown.Item active={activeIndex === item.directory}
                                   name={item.directory}
                                   key={item.display}
                                   onClick={handleItemClick} >
                      <Icon name={item.icon} size="large" /> {item.display}
                    </Dropdown.Item>
                  )
                }
              })}
            </Dropdown.Menu>
          </Dropdown>
        </Responsive>
      </Responsive>
      <Responsive className="nav" maxWidth={500}>
        <Dropdown compact button={true} wrapSelection={true} floating icon="list layout" className="icon">
          <Dropdown.Menu direction="right">
            {nav.map(item => {
              if (item.hasOwnProperty('url')) {
                return (
                  <Dropdown.Item key={item.display} href={item.url} target="_blank">
                    <Icon name={item.icon} size="large" /> {item.display}
                  </Dropdown.Item>
                )
              } else {
                return (
                  <Dropdown.Item active={activeIndex === item.directory}
                                 key={item.display}
                                 name={item.directory}
                                 onClick={handleItemClick} >
                    <Icon name={item.icon} size="large" /> {item.display}
                  </Dropdown.Item>
                )
              }
            })}
          </Dropdown.Menu>
        </Dropdown>
        <h2 onClick={() => scrollTo("intro")} className="site-name mobile">
          <span className="brian">Brian Nguyen</span><span className="blinking-cursor">|</span>
        </h2>
      </Responsive>
    </header>
  )
}

export default Navbar;