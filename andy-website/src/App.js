import './App.css';
import Navbar from './Navbar.js';
import SkillBox from './SkillBox';
import ResumeButton from './ResumeButton';

function App() {
  return (
    <div className='App'>
      <div id='Home' className='container Home'>
        <img className='bg' src='northwestern-background.jpeg' alt='background' />
        
        <div className='header'>
          <h1>Hello, I'm Andy!</h1>
          <h4>Software Engineer at Northwestern</h4>
        </div>
      </div>
      
      <div id='About Me' className='container About'>
        <div className='left-container'>
          <div className='header'>
            <h1>Who Am I?</h1>
          </div>
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
              <h1>My Skills</h1>
              <ResumeButton />
            </div>
          </div>
        </div>
      </div>
      <Navbar />
    </div>
    
  );
}

export default App;
