import './App.css';
import logo from './logo.svg';

function Navbar() {
    return(
        <div className='Navbar'>
            <ul className='links'>
                <a className='active'><strong>Home</strong></a>
                <a><strong>About Me</strong></a>
                <a><strong>My Skills</strong></a>
                <a><strong>Contacts</strong></a>
            </ul>
            <img className='logo' src={logo} alt='logo' />
        </div>
    )
}

export default Navbar;