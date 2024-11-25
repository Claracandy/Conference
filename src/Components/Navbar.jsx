import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <ul className='navbar-list'>
                <li className='navbar-item'>
                    <a href='/Agenda.jsx' className='navbar-link'>Agenda</a>
                </li>
                <li className='navbar-item'>
                    <a href='/Speakers.jsx' className='navbar-link'>Speakers</a>
                </li>
                <li className='navbar-item'>
                    <a href='/RegistrationForm.jsx' className='navbar-link'>RegistrationForm</a>
                </li>
               
            </ul>
        </nav>
    );
}

export default Navbar;