import './Components/css/App.css';
import './Components/css/Home.css';
import Navbar from './Components/Navbar.js';
import SkillBox from './Components/SkillBox';
import BlueButton from './Components/BlueButton';
import ProjectBox from './Components/ProjectBox';
import ContactLink from './Components/ContactLink';
import AboutHeader from './Components/AboutHeader';
import SkillsHeader from './Components/SkillsHeader';
import ProjectsHeader from './Components/ProjectsHeader';
import ContactHeader from './Components/ContactHeader';
import HomeHeader from './Components/HomeHeader';
import ProjectDescription from './Components/ProjectDescription';
import React from 'react';
import NavCollapse from './Components/NavCollapse';
import ProjectDescriptionBackground from './Components/ProjectDescriptionBackground';
import { motion } from 'framer-motion';
 

function App() {

  const [isPokerVisible, setPokerVisibility] = React.useState(() => false)
  const [isWeatherVisible, setWeatherVisibility] = React.useState(() => false)
  const [isLLLVisible, setLLLVisibility] = React.useState(() => false)
  const [isNavVisible, setNavVisible] = React.useState(() => false)
  const [windowWidth, setWindowWidth] = React.useState(() => window.innerWidth)
  const [isNavCollapseVisible, setNavCollapseVisible] = React.useState(() => false)

  React.useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleWindowResize)
    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  })

  React.useEffect(() => {
    if (windowWidth <= 800) {
      setNavVisible(false)
      setNavCollapseVisible(true)
    }
    else {
      hideCollapse((windowWidth <= 800))
    }
  }, [windowWidth])

  function hideCollapse(isPhoneNav) {
    if (isPhoneNav === false) {
        var scrolledY = window.scrollY
        if (scrolledY >= window.innerHeight) {
            setNavCollapseVisible(true)
        }
        else {
            setNavCollapseVisible(false)
            setNavVisible(false)
        }
    }
    else {
      setNavCollapseVisible(true)
    }
  }

  window.addEventListener('scroll', () => hideCollapse((windowWidth <= 800)))
  
  return (
    <div className='App'>
      
      <div className='bg'></div>
      {(windowWidth <= 800) ? null : <Navbar isFixed={false}/>}


      <div id='Home' className='Home'>
        <motion.div initial={{opacity: 0, width: 0}} whileInView={{opacity: 1, width: "75%"}} transition={{duration: 0.3}} className='home-header h-1/5 sm:h-1/4 md:h-2/5 lg:h-1/2'>
          <div className='space-y-3 lg:space-y-11'>
            <HomeHeader />
            <h4 className='text-sm sm:text-xl md:text-3xl lg:text-4xl' >Software Engineer at Northwestern</h4>
          </div>
        </motion.div>
      </div>

      <div id='About Me' className='About'>
        <div className='left-container'>
          <AboutHeader />
        </div> 
        <div className='right-container'>
          <div className='about-txt text-sm sm:text-base md:text-xl lg:text-2xl'>
            <div>
              <motion.p initial={{x: 100, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{type: "spring", delay: 0, duration: 0.4}}>
                I'm a freshman <strong>computer science</strong> student at Northwestern University. My <strong>goal </strong> 
                is to develop <strong>impactful</strong> software that is <strong>optimized</strong> to its fullest potential.
              </motion.p>
            </div>
            <div>
              <motion.p initial={{x: 100, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{type: "spring", delay: 0, duration: 0.4}}>
                Three words to describe me are <strong>optimistic, reliable, and determined</strong>. 
                When I'm not poring over code, I like to problem solve on the chess board, hit on the tennis court, and adventure in a kayak.
              </motion.p>
            </div>
            <div>
              <motion.p initial={{x: 100, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{type: "spring", delay: 0, duration: 0.4}}>
                I'm excited to work with a dynamic and engaging team. <strong className='special-color'>Together, let's build greatness!</strong>
              </motion.p>
            </div>
          </div>
        </div>
      </div>
  

      <div id='My Skills' className='Skills'>
        <div className='left-container'>
          <div className='skills-txt'>
            <SkillBox title="Software Engineering">
              Well-versed in object-oriented programming languages such as 
              Python, Java, and C
            </SkillBox>
            <hr className='divider'></hr>
            {/* <motion.hr initial={{opacity: 0, x: -500}} whileInView={{opacity: 1, x: 0}} className='divider'></motion.hr> */}
            <SkillBox title="iOS Development">
              Experienced with using Swift and XCode to develop and deploy mobile iOS applications
            </SkillBox>
            {/* <motion.hr initial={{opacity: 0, x: -500}} whileInView={{opacity: 1, x: 0}} className='divider'></motion.hr> */}
            <hr className='divider'></hr>
            <SkillBox title="Front-End Development">
              Proficient with SwiftUI, UIKit, HTML, CSS, JavaScript, and the ReactJS framework
            </SkillBox>
          </div>
        </div>
        <div className='right-container'>
          <div className='header'>
            <div className='header-container space-y-5 md:space-y-11'>
              <SkillsHeader />
              <BlueButton link='https://drive.google.com/file/d/1ZehCmz5QhYUrA66p4JbZd5qGr-Wjb5Wd/view?usp=sharing'>My Resume</BlueButton>
            </div>
          </div>
        </div>
      </div>
 
      <div id='My Projects' className='Projects'>
        <div className='left-container'>
          <div className='header'>
            <ProjectsHeader />
          </div>
        </div>
        <div className='right-container'>
          <motion.div initial={{opacity: 0, height: 0}} whileInView={{opacity: 1, height: "75vh"}} transition={{duration: 0.3, delay: 0}} className='projects-container w-11/12 sm:w-3/4'>
            <ProjectBox onShow={() => setPokerVisibility(true)} 
              image='poker.png' 
              title='Poker Simulator'>
                Skills used: Python
            </ProjectBox>
            <ProjectBox onShow={() => setWeatherVisibility(true)}
            image='weather.jpeg' 
            title='Weather App'>
              Skills used: Swift, SwiftUI, XCode
            </ProjectBox>
           
            <ProjectBox onShow={() => setLLLVisibility(true)}
            image='LLL.png' 
            title='Linked List Library'>
              Skills used: Python
            </ProjectBox>
          </motion.div>
        </div>
      </div>
 
      <div id='Contact' className='Contact'>
        <div className='left'> 
          <ContactHeader />
          <motion.p initial={{x: -200, opacity: 0}} whileInView={{x: 0, opacity: 1}} >Have a cool project or question? Feel free to contact me.</motion.p>
        </div>
        <div className='right'>
          <ContactLink link='mailto:andyvu2026@u.northwestern.edu'>andyvu2026@u.northwestern.edu</ContactLink>
          <ContactLink link='https://github.com/Andy-V12345'>GitHub</ContactLink>
          <ContactLink link='https://www.linkedin.com/in/andyvu2026/'>LinkedIn</ContactLink>
          <ContactLink link='https://www.instagram.com/andy.v.123/'>Instagram</ContactLink>
        </div>
      </div>

      {isNavVisible ? <Navbar isFixed={true} hideNav={() => {setNavVisible(false); setNavCollapseVisible(true)}} isPhoneNav={(windowWidth <= 800) ? true : false}/> : null}
      {isNavCollapseVisible ? <NavCollapse hideNavCollapse={() => setNavCollapseVisible(false)} showNav={() => setNavVisible(true)} hideNav={() => setNavVisible(false)} isNavVisible={isNavVisible} isPhoneNav={(windowWidth <= 800) ? true : false}/> : null}
  
      <ProjectDescriptionBackground close={() => setPokerVisibility(false)} visible={isPokerVisible} />

      <ProjectDescription isPhone={(windowWidth < 500)} title='Poker Simulator' link='https://github.com/Andy-V12345/Poker' image='poker.png' visible={isPokerVisible} close={() => setPokerVisibility(false)}>
        Developed a fully functional text-based poker program in python that allows the user to play against 
        the computer using the terminal. The picture to the left is what the user would see in the middle of a round of poker.
        I'm currently updating the program to add two more computer players to the game.
      </ProjectDescription>

      <ProjectDescriptionBackground close={() => setWeatherVisibility(false)} visible={isWeatherVisible} />

      <ProjectDescription isPhone={(windowWidth < 500)} title='Weather App' link='https://github.com/Andy-V12345/Weather-App' image='weather.jpeg' visible={isWeatherVisible} close={() => setWeatherVisibility(false)}>
        Programmed a rough replica of the Apple Weather App that displays information on current weather conditions, the 12-hour
        and weekly forecast, precipitation, humidity, and the wind. The data is pulled from the OpenWeather API and is parsed 
        with Swift's Codable protocol. I also used Swift's CoreLocation library to access the user's location with their permission.
      </ProjectDescription>

      <ProjectDescriptionBackground close={() => setLLLVisibility(false)} visible={isLLLVisible} />

      <ProjectDescription isPhone={(windowWidth < 500)} title='Linked List Library' link='https://github.com/Andy-V12345/Linked-List-Library' image='LLL.png' visible={isLLLVisible} close={() => setLLLVisibility(false)}>
        Developed a Python library that provides 6 useful functionalities to linked lists. The library allows users to create a 
        linked list from a normal list; more conveniently access, replace, insert and delete data from a linked list; and obtain
        the length of the linked list.
      </ProjectDescription>


    </div>
    
  );
}

export default App;
