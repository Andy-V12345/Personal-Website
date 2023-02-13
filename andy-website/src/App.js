import './App.css';
import Navbar from './Navbar.js';
import SkillBox from './SkillBox';
import BlueButton from './BlueButton';
import ProjectBox from './ProjectBox';
import ContactLink from './ContactLink';
import AboutHeader from './AboutHeader';
import SkillsHeader from './SkillsHeader';
import ProjectsHeader from './ProjectsHeader';
import ContactHeader from './ContactHeader';
import HomeHeader from './HomeHeader';
import ProjectDescription from './ProjectDescription';
import React from 'react';
import NavCollapse from './NavCollapse';


function App() {
  

  const visibilityStates = {
    'poker': false,
    'weather': false,
    'LLL': false
  }
 
  const [isVisible, setVisibility] = React.useState(() => visibilityStates)
  const [show, setShow] = React.useState(() => false)

  function toggleNav() {
    if (show) {
      setShow(false)
    }
    else {
      setShow(true)
    }
  }
  
  function displayProject(id) {
    visibilityStates[id] = true
    setVisibility(visibilityStates)
  }

  function closeProject(id) {
    visibilityStates[id] = false
    setVisibility(visibilityStates)
  }
 
  

  return (
    <div className='App'>
      <Navbar isFixed={false}/>
      
      <div id='Home' className='container Home'>
        <img className='bg' src='northwestern-background.jpeg' alt='background' />
        <div className='home-header'>
          <HomeHeader />
          <h4>Software Engineer at Northwestern</h4>
        </div>
      </div>

      <div id='About Me' className='container About'>
        <div className='left-container'>
          <AboutHeader />
        </div>
        <div className='right-container'>
          <div className='about-txt'>
            <div>
              <p>
                I'm a freshman <strong>computer science</strong> student at Northwestern University. My <strong>goal </strong> 
                is to develop <strong>impactful</strong> software that is <strong>optimized</strong> to its fullest potential.
              </p>
            </div>
            <div>
              <p>
                Three words to describe me are <strong>optimistic, reliable, and determined</strong>. 
                When I'm not poring over code, I like to problem solve on the chess board, hit on the tennis court, and adventure in a kayak.
              </p>
            </div>
            <div>
              <p>
                I'm excited to work with a dynamic and engaging team. <strong className='special-color'>Together, let's build greatness!</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
  

      <div id='My Skills' className='container Skills'>
        <div className='left-container'>
          <div className='skills-txt'>
            <SkillBox title="Software Engineering">
              Well-versed in object-oriented programming languages such as 
              Python, Java, and C
            </SkillBox>
            <hr className='divider'></hr>
            <SkillBox title="iOS Development">
              Experienced with using Swift and XCode to develop and deploy mobile iOS applications
            </SkillBox>
            <hr className='divider'></hr>
            <SkillBox title="Front-End Development">
              Proficient with SwiftUI, UIKit, HTML, CSS, JavaScript, and the ReactJS framework
            </SkillBox>
          </div>
        </div>
        <div className='right-container'>
          <div className='header'>
            <div className='header-container'>
              <SkillsHeader />
              <BlueButton link='https://drive.google.com/file/d/1ZehCmz5QhYUrA66p4JbZd5qGr-Wjb5Wd/view?usp=sharing'>My Resume</BlueButton>
            </div>
          </div>
        </div>
      </div>

      <div id='My Projects' className='container Projects'>
        <div className='left-container'>
          <div className='header'>
            <ProjectsHeader />
          </div>
        </div>
        <div className='right-container'>
          <div className='projects-container'>
            <ProjectBox onShow={() => displayProject('poker')} 
              image='poker.png' 
              title='Poker Simulator'>
                Skills used: Python
            </ProjectBox>
            <ProjectBox onShow={() => displayProject('weather')}
            image='weather.jpeg' 
            title='Weather App'>
              Skills used: Swift, SwiftUI, XCode
            </ProjectBox>
          
            <ProjectBox onShow={() => displayProject('LLL')}
            image='LLL.png' 
            title='Linked List Library'>
              Skills used: Python
            </ProjectBox>
          </div>
        </div>
      </div>

      <div id='Contact' className='container Contact'>
        <div className='left'> 
          <ContactHeader />
          <p>Have a cool project or question? Feel free to contact me.</p>
        </div>
        <div className='right'>
          <ContactLink link='mailto:andyvu2026@u.northwestern.edu'>andyvu2026@u.northwestern.edu</ContactLink>
          <ContactLink link='https://github.com/Andy-V12345'>GitHub</ContactLink>
          <ContactLink link='https://www.linkedin.com/in/andyvu2026/'>LinkedIn</ContactLink>
          <ContactLink link='https://www.instagram.com/andy.v.123/'>Instagram</ContactLink>
        </div>
      </div>

      {show ? <Navbar isFixed={true}/> : null}
      <NavCollapse showNav={toggleNav}/>
  

      <ProjectDescription id='poker' title='Poker Simulator' link='https://github.com/Andy-V12345/Poker' image='poker.png' visible={isVisible} onShow={closeProject}>
        Developed a fully functional text-based poker program in python that allows the user to play against 
        the computer using the terminal. The picture to the left is what the user would see in the middle of a round of poker.
        I'm currently updating the program to add two more computer players to the game.
      </ProjectDescription>

      <ProjectDescription id='weather' title='Weather App' link='https://github.com/Andy-V12345/Weather-App' image='weather.jpeg' visible={isVisible} onShow={closeProject}>
        Programmed a rough replica of the Apple Weather App that displays information on current weather conditions, the 12-hour
        and weekly forecast, precipitation, humidity, and the wind. The data is pulled from the OpenWeather API and is parsed 
        with Swift's Codable protocol. I also used Swift's CoreLocation library to access the user's location with their permission.
      </ProjectDescription>

      <ProjectDescription id='LLL' title='Linked List Library' link='https://github.com/Andy-V12345/Linked-List-Library' image='LLL.png' visible={isVisible} onShow={closeProject}>
        Developed a Python library that provides 6 useful functionalities to linked lists. The library allows users to create a 
        linked list from a normal list; more conveniently access, replace, insert and delete data from a linked list; and obtain
        the length of the linked list.
      </ProjectDescription>

    </div>
    
  );
}

export default App;
