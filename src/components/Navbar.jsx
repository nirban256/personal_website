import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
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
            <img src={NCdesign} alt="logo" className='main_logo' />
            <nav>
                <ul className='top_nav'>
                    <Menu />
                </ul>
            </nav>
            <nav className="navbar_menu scale-up-center">
                {menu ? <RiCloseLine color="#fff" size={27} onClick={() => setMenu(false)} /> : <RiMenu3Line color="#fff" size={27} onClick={() => setMenu(true)} />}
                {menu && (
                    <div className="mobile_menu">
                        <Menu />
                    </div>
                )}
            </nav>
        </div>
    )
}

export default Navbar
