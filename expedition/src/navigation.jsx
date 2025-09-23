import logo from './assets/logo.png';
import './navigation.css';

function Navigation() {


    return (
        <>
            
            <nav >
                <img src={logo} alt="Logo" className='logo' />
                <ul>
                    <li><a href="#header">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#characters">Characters</a></li>
                    <li><a href="#buy">Buy</a></li>
                    <li><a href="#contact">Contacts</a></li>
                </ul>
            </nav>

        </>
    );
}

export default Navigation;