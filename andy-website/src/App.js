import './App.css';
import Navbar from './Navbar.js';

function App() {
  return (
    <div className='App'>
      <div className='home'>
        <img className='bg' src='northwestern-background.jpeg' alt='background' />
        
        <div className='header'>
          <h1>Hello, I'm Andy!</h1>
          <h4>Software Engineer at Northwestern</h4>
        </div>
      </div>
      
      <div className='about'>
        <div className='left-container'>
          <div className='header'>
            <h1>Who Am I?</h1>
          </div>
        </div>
        <div className='right-container'>
          <h3>Hello</h3>
        </div>
      </div>
      <Navbar />
    </div>
    
  );
}

export default App;
