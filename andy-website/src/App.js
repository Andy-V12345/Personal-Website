import './App.css';
import Navbar from './Navbar.js';

function App() {
  return (
    <div className='App'>
      <div id='Home' className='home'>
        <img className='bg' src='northwestern-background.jpeg' alt='background' />
        
        <div className='header'>
          <h1>Hello, I'm Andy!</h1>
          <h4>Software Engineer at Northwestern</h4>
        </div>
      </div>
      
      <div id='About Me' className='about'>
        <div className='left-container'>
          <div className='header'>
            <h1>Who Am I?</h1>
          </div>
        </div>
        <div className='right-container'>
          <div className='about-txt'>
            <div className='about-txt1'>
              <p>
                I'm a freshman <strong>computer science</strong> student at Northwestern University. My <strong>goal </strong> 
                is to develop <strong>impactful</strong> software that is <strong>optimized</strong> to its fullest potential.
              </p>
            </div>
            <div className='about-txt2'>
              <p>
                Three words to describe me are <strong>optimistic, reliable, and determined</strong>. 
                When I'm not poring over code, I like to problem solve on the chess board, hit on the tennis court, and adventure in a kayak.
              </p>
            </div>
            <div className='about-txt3'>
              <p>
                I'm excited to work with a dynamic and engaging team. <strong className='special-color'>Together, let's build greatness!</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Navbar />
    </div>
    
  );
}

export default App;
