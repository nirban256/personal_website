import React from 'react';
import avatar from '../images/My-Image.png';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='Navbar'>
            <nav className="links">
                <div className="profile">
                    <img src={avatar} alt="My Avatar" />
                </div>
                <ul className="nav-items">
                    <li className="nav-item">
                        <NavLink to="/" exact activeClassName="active">
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/about" exact activeClassName="active">
                            About
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/portfolio" exact activeClassName="active">
                            Portfolio
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/contact" exact activeClassName="active">
                            Contact
                        </NavLink>
                    </li>
                </ul>
                <footer className="footer">
                    <p>&copy; All rights reserved</p>
                </footer>
            </nav>
        </div>
    );
};

export default Navbar;
