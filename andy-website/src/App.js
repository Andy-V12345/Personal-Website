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
  const [isTodoVisible, setTodoVisibility] = React.useState(() => false)
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
        <motion.div initial={{opacity: 0, width: 0}} whileInView={{opacity: 1, width: "75%"}} transition={{duration: 0.3}} className='home-header h-1/5 max-h-40 sm:max-h-64 lg:max-h-72 xl:max-h-96 sm:h-1/4 md:h-2/5 lg:h-1/2'>
          <div className='space-y-3 lg:space-y-11'>
            <HomeHeader />
            <h4 className='text-sm sm:text-xl md:text-3xl lg:text-4xl' >Software Engineer at Northwestern</h4>
          </div>
        </motion.div>
      </div>

      <div id='About Me' className={(windowWidth < 640) ? 'About phone' : 'About'}>
        <div className='left-container'>
          <AboutHeader />
        </div> 
        <div className='right-container'>
          <div className='about-txt text-sm sm:text-base md:text-xl lg:text-2xl'>
            <div>
              <motion.p initial={{x: 100, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{type: "spring", delay: 0, duration: 0.4}}>
                I'm a <strong>computer science</strong> student at Northwestern University. My <strong>goal </strong> 
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
  
      {(windowWidth >= 1600) ? 
        <div id='My Skills' className='Skills-large'>
          <div className='skills-large-container space-y-16'>
            <div className='flex-container'>
                <SkillBox title="Software Engineering" isLarge={true}>
                  Well-versed in object-oriented programming languages such as 
                  Python, Java, and C
                </SkillBox>
                <SkillBox title="iOS Development" isLarge={true}>
                  Experienced with using Swift and XCode to develop and deploy mobile iOS applications
                </SkillBox>
                <SkillBox title="Front-End Development" isLarge={true}>
                  Proficient with SwiftUI, UIKit, HTML, CSS, JavaScript, and the ReactJS framework
                </SkillBox>
            </div>
            <div className='header-phone'>
              <div className='header-container space-y-5 md:space-y-11'>
                <SkillsHeader />
                <BlueButton link='https://drive.google.com/file/d/1al55sNN-kTDEORQeqc9t08ZLJ_GP6I14/view?usp=sharing'>My Resume</BlueButton>
              </div>
            </div>
          </div>
        </div>
        : 
        null}

      {(windowWidth >= 640 && windowWidth < 1600) ? 
        <div id='My Skills' className='Skills'>
          <div className='left-container'>
              <div className='skills-txt md:space-y-3 lg:space-y-6'>
                <SkillBox title="Software Engineering">
                  Well-versed in object-oriented programming languages such as 
                  Python, Java, and C
                </SkillBox>
                <motion.hr initial={{opacity: 0, x: -100}} whileInView={{opacity: 1, x: 0}} transition={{type: "spring", delay: 0, duration: 0.4}} className='divider'></motion.hr>
                <SkillBox title="iOS Development">
                  Experienced with using Swift and XCode to develop and deploy mobile iOS applications
                </SkillBox>
                <motion.hr initial={{opacity: 0, x: -100}} whileInView={{opacity: 1, x: 0}} transition={{type: "spring", delay: 0, duration: 0.4}} className='divider'></motion.hr>
                <SkillBox title="Front-End Development">
                  Proficient with SwiftUI, UIKit, HTML, CSS, JavaScript, and the ReactJS framework
                </SkillBox>
              </div>
            </div>
            <div className='right-container'>
              <div className='header'>
                <div className='header-container space-y-5 md:space-y-11'>
                  <SkillsHeader />
                  <BlueButton link='https://drive.google.com/file/d/1al55sNN-kTDEORQeqc9t08ZLJ_GP6I14/view?usp=sharing'>My Resume</BlueButton>
                </div>
              </div>
            </div>
        </div>
      :
        null
      }

      {(windowWidth < 640) ? 
        <div id='My Skills' className='Skills-phone'>
          <div className='skills-phone-container space-y-11'>
            <div className='space-y-4'>
                <SkillBox title="Software Engineering">
                  Well-versed in object-oriented programming languages such as 
                  Python, Java, and C
                </SkillBox>
                <motion.hr initial={{opacity: 0, x: -100}} whileInView={{opacity: 1, x: 0}} transition={{type: "spring", delay: 0, duration: 0.4}} className='divider'></motion.hr>
                <SkillBox title="iOS Development">
                  Experienced with using Swift and XCode to develop and deploy mobile iOS applications
                </SkillBox>
                <motion.hr initial={{opacity: 0, x: -100}} whileInView={{opacity: 1, x: 0}} transition={{type: "spring", delay: 0, duration: 0.4}} className='divider'></motion.hr>
                <SkillBox title="Front-End Development">
                  Proficient with SwiftUI, UIKit, HTML, CSS, JavaScript, and the ReactJS framework
                </SkillBox>
            </div>
            <div className='header-phone'>
              <div className='header-container space-y-5 md:space-y-11'>
                <SkillsHeader />
                <BlueButton link='https://drive.google.com/file/d/1al55sNN-kTDEORQeqc9t08ZLJ_GP6I14/view?usp=sharing'>My Resume</BlueButton>
              </div>
            </div>
          </div>
        </div>
      :
        null
      }

      {(windowWidth < 1600) ? 
        <div id='My Projects' className={(windowWidth < 640) ? 'Projects phone' : 'Projects'}>
          <div className='left-container'>
            <div className='header'>
              <ProjectsHeader />
            </div>
          </div>
          <div className='right-container'>
            <motion.div initial={{opacity: 0, height: 0}} whileInView={{opacity: 1, height: '75vh'}} transition={{duration: 0.3, delay: 0}} className='projects-container w-11/12 sm:w-3/4'>

              <ProjectBox onShow={() => setTodoVisibility(true)}
                image="todoList.png"
                title="Todo List"
                isLarge={false}>
                  Skills used: NextJS, AWS Amplify
              </ProjectBox>

              <ProjectBox onShow={() => setPokerVisibility(true)} 
                image='poker.png' 
                title='Poker Simulator'
                isLarge={false}>
                  Skills used: Python
              </ProjectBox>
              <ProjectBox onShow={() => setWeatherVisibility(true)}
              image='weather.jpeg' 
              title='Weather App'
              isLarge={false}>
                Skills used: Swift, SwiftUI, XCode
              </ProjectBox>
            
              <ProjectBox onShow={() => setLLLVisibility(true)}
              image='LLL.png' 
              title='Linked List Library'
              isLarge={false}>
                Skills used: Python
              </ProjectBox>
            </motion.div>
          </div>
        </div>
        :
        <div id='My Projects' className='Projects-large'>
          <div className='skills-large-container space-y-16'>
            <motion.div initial={{opacity: 0, width: 0}} whileInView={{opacity: 1, width:'100%'}} transition={{duration: 0.3, delay: 0}} className='flex-container'>
              
              <ProjectBox onShow={() => setTodoVisibility(true)}
                  image="todoList.png"
                  title="Todo List"
                  isLarge={true}>
                    Skills used: NextJS, AWS Amplify
              </ProjectBox>
              
              <ProjectBox onShow={() => setPokerVisibility(true)} 
              image='poker.png' 
              title='Poker Simulator'
              isLarge={true}>
                Skills used: Python
              </ProjectBox>

              <ProjectBox onShow={() => setWeatherVisibility(true)}
              image='weather.jpeg' 
              title='Weather App'
              isLarge={true}>
                Skills used: Swift, SwiftUI, XCode
              </ProjectBox>
            
              <ProjectBox onShow={() => setLLLVisibility(true)}
              image='LLL.png' 
              title='Linked List Library'
              isLarge={true}>
                Skills used: Python
              </ProjectBox>
            </motion.div>
            <div className='header-phone'>
              <div className='header-container'>
                <ProjectsHeader />
              </div>
            </div>
          </div>
        </div>
      }   
 
      <div id='Contact' className='Contact max-h-72 sm:max-h-96'>
        <div className='left pt-9 pl-5 w-2/5 sm:pl-8 sm:pt-12 sm:w-1/2 xl:pl-14'> 
          <ContactHeader />
          <motion.p initial={{x: -100, opacity: 0}} whileInView={{x: 0, opacity: 1}} className='mt-3 text-sm w-11/12 sm:w-3/5 sm:text-xl xl:text-2xl'>Have a cool project or question? Feel free to contact me.</motion.p>
        </div>
        <div className='right pr-5 pt-10 w-3/5 sm:pr-8 xl:pr-14 sm:pt-14 sm:w-1/2 text-xs sm:text-base md:text-lg xl:text-xl'>
          <ContactLink link='https://github.com/Andy-V12345'>GitHub</ContactLink>
          <ContactLink link='https://www.linkedin.com/in/andyvu2026/'>LinkedIn</ContactLink>
          <ContactLink link='https://www.instagram.com/andy.v.123/'>Instagram</ContactLink>
          <ContactLink link='mailto:andyvu2026@u.northwestern.edu'>andyvu2026@u.northwestern.edu</ContactLink>
        </div>
      </div>

      {isNavVisible ? <Navbar isFixed={true} hideNav={() => {setNavVisible(false); setNavCollapseVisible(true)}} isPhoneNav={(windowWidth <= 800) ? true : false}/> : null}
      {isNavCollapseVisible ? <NavCollapse hideNavCollapse={() => setNavCollapseVisible(false)} showNav={() => setNavVisible(true)} hideNav={() => setNavVisible(false)} isNavVisible={isNavVisible} isPhoneNav={(windowWidth <= 800) ? true : false}/> : null}
  
      <ProjectDescriptionBackground close={() => setPokerVisibility(false)} visible={isPokerVisible} />

      <ProjectDescription isPhone={(windowWidth < 500)} title='Poker Simulator' link='https://github.com/Andy-V12345/Poker' image='poker.png' visible={isPokerVisible} close={() => setPokerVisibility(false)}>
        Developed a fully functional text-based poker program in python that allows the user to play against 
        the computer using the terminal. The picture to the left is what the user would see in the middle of a round of poker.
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

      <ProjectDescriptionBackground close={() => setTodoVisibility(false)} visible={isTodoVisible} />

      <ProjectDescription isPhone={(windowWidth < 500)} title='Todo List Website' link='https://github.com/Andy-V12345/Todo_List' image='todoList.png' visible={isTodoVisible} close={() => setTodoVisibility(false)}>
        Developed and deployed a todo list website that uses the NextJS framework for the frontend and AWS Amplify for the backend.
        Implemented a sign-in and sign-up feature using AWS Cognito and the Authentication library. Utilized GraphQL API to fetch and update
        data from Amazon's DynamoDB.
      </ProjectDescription>


    </div>
    
  );
}

export default App;
