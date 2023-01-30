import './App.css';
import Navbar from './Navbar.js';

function App() {
  return (
    <div className='App'>
      <img className='bg' src='northwestern-background.jpeg' alt='background' />
      <Navbar />
      <div className='home' >
        <h1>Hello, I'm Andy!</h1>
        <h4>Software Engineer at Northwestern</h4>
      </div>
    </div>
    
  );
}

export default App;
