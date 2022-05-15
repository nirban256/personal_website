import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaJava, FaSass, FaBootstrap, FaReact, FaFigma, FaUbuntu, FaHardHat } from 'react-icons/fa';
import { SiC, SiGimp, SiAdobeillustrator, SiWindows, SiSolidity, SiTailwindcss, SiWeb3Dotjs } from 'react-icons/si';

const SkillsSection = () => {
    return (
        <div className='SkillsSection'>
            <div className="skill-container">
                <div className="languages">
                    <h3>Languages</h3>
                    <ul>
                        <li className='icons tooltip'>
                            <FaHtml5 size={42} className='icon' color='#037fff' />
                            <span className="tooltiptext">Html5</span>
                        </li>
                        <li className='icons tooltip'>
                            <FaCss3Alt size={42} color='#037fff' />
                            <span className="tooltiptext">CSS3</span>
                        </li>
                        <li className='icons tooltip'>
                            <FaJsSquare size={42} color='#037fff' />
                            <span className="tooltiptext">JavaScript</span>
                        </li>
                        <li className='icons tooltip'>
                            <SiC size={42} color='#037fff' />
                            <span className="tooltiptext">C language</span>
                        </li>
                        <li className='icons tooltip'>
                            <FaJava size={42} color='#037fff' />
                            <span className="tooltiptext">Java</span>
                        </li>
                        <li className='icons tooltip'>
                            <SiSolidity size={42} color='#037fff' />
                            <span className="tooltiptext">Solidity</span>
                        </li>
                    </ul>
                </div>
                <div className="js-frameworks">
                    <h3>Web3 Frameworks</h3>
                    <ul>
                        <li className='icons tooltip'>
                            <FaHardHat size={42} color='#037fff' />
                            <span className="tooltiptext">HardHat</span>
                        </li>
                        <li className='icons tooltip'>
                            <SiWeb3Dotjs size={42} color='#037fff' />
                            <span className="tooltiptext">Web3.js</span>
                        </li>
                    </ul>
                </div>
                <div className="js-frameworks">
                    <h3>JavaScript Frameworks</h3>
                    <ul>
                        <li className='icons tooltip'>
                            <FaReact size={42} color='#037fff' />
                            <span className="tooltiptext">ReactJs</span>
                        </li>
                    </ul>
                </div>
                <div className="css-frameworks">
                    <h3>Css Frameworks</h3>
                    <ul>
                        <li className='icons tooltip'>
                            <FaSass size={42} color='#037fff' />
                            <span className="tooltiptext">Sass</span>
                        </li>
                        <li className='icons tooltip'>
                            <FaBootstrap size={42} color='#037fff' />
                            <span className="tooltiptext">BootStrap</span>
                        </li>
                        <li className='icons tooltip'>
                            <SiTailwindcss size={42} color='#037fff' />
                            <span className="tooltiptext">Tailwind Css</span>
                        </li>
                    </ul>
                </div>
                <div className="design-tools">
                    <h3>Designing Tools</h3>
                    <ul>
                        <li className='icons tooltip'>
                            <FaFigma size={42} color='#037fff' />
                            <span className="tooltiptext">Figma</span>
                        </li>
                        <li className='icons tooltip'>
                            <SiGimp size={42} color='#037fff' />
                            <span className="tooltiptext">Gimp</span>
                        </li>
                        <li className='icons tooltip'>
                            <SiAdobeillustrator size={42} color='#037fff' />
                            <span className="tooltiptext">Adobe Illustrator</span>
                        </li>
                    </ul>
                </div>
                <div className="system">
                    <h3>Operating System</h3>
                    <ul>
                        <li className='icons tooltip'>
                            <SiWindows size={42} color='#037fff' />
                            <span className="tooltiptext">Windows</span>
                        </li>
                        <li className="icons tooltip">
                            <FaUbuntu size={42} color='#037fff' />
                            <span className="tooltiptext">Ubuntu</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SkillsSection;
