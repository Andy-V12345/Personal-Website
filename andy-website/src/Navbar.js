import './App.css';
import logo from './logo.svg';

function Navbar() {
    return(
        <div className='Navbar'>
            <a className='active'>Home</a>
            <a>About Me</a>
            <a>My Skills</a>
            <a>Contacts</a>
            <img className='logo' src={logo} alt='logo' />
        </div>
    )
}

export default Navbar;