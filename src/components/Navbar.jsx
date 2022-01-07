import React, { useState } from 'react'
import NCdesign from '../assets/images/NC design & development-logos_white.png'

const Menu = () => (
    <>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
    </>
)

const Navbar = () => {
    const [menu, setMenu] = useState('false');
    return (
        <div className='navbar'>
            <img src={NCdesign} alt="logo" height={120} width={120} />
            <nav>
                <ul className='top_nav'>
                    <Menu />
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
