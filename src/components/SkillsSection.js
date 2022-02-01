import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaJava, FaDollarSign, FaPython, FaSass, FaBootstrap, FaReact, FaFigma, FaLinux, FaUbuntu } from 'react-icons/fa';
import { SiC, SiGimp, SiAdobeillustrator, SiWindows } from 'react-icons/si';

const SkillsSection = () => {
    return (
        <div className='SkillsSection'>
            <div className="skill-container">
                <div className="languages">
                    <h3>Languages</h3>
                    <ul>
                        <li className='icons tooltip'>
                            <FaHtml5 size={42} />
                            <span className="tooltiptext">Html5</span>
                        </li>
                        <li className='icons tooltip'>
                            <FaCss3Alt size={42} />
                            <span className="tooltiptext">CSS3</span>
                        </li>
                        <li className='icons tooltip'>
                            <FaJsSquare size={42} />
                            <span className="tooltiptext">JavaScript</span>
                        </li>
                        <li className='icons tooltip'>
                            <SiC size={42} />
                            <span className="tooltiptext">C language</span>
                        </li>
                        <li className='icons tooltip'>
                            <FaJava size={42} />
                            <span className="tooltiptext">Java</span>
                        </li>
                        <li className='icons tooltip'>
                            <FaDollarSign size={42} />
                            <span className="tooltiptext">Shellscript</span>
                        </li>
                        <li className='icons tooltip'>
                            <FaPython size={42} />
                            <span className="tooltiptext">Python</span>
                        </li>
                    </ul>
                </div>
                <div className="css-frameworks">
                    <h3>Css Frameworks</h3>
                    <ul>
                        <li className='icons tooltip'>
                            <FaSass size={42} />
                            <span className="tooltiptext">Sass</span>
                        </li>
                        <li className='icons tooltip'>
                            <FaBootstrap size={42} />
                            <span className="tooltiptext">BootStrap</span>
                        </li>
                    </ul>
                </div>
                <div className="js-frameworks">
                    <h3>JavaScript Frameworks</h3>
                    <ul>
                        <li className='icons tooltip'>
                            <FaReact size={42} />
                            <span className="tooltiptext">ReactJs</span>
                        </li>
                    </ul>
                </div>
                <div className="design-tools">
                    <h3>Designing Tools</h3>
                    <ul>
                        <li className='icons tooltip'>
                            <FaFigma size={42} />
                            <span className="tooltiptext">Figma</span>
                        </li>
                        <li className='icons tooltip'>
                            <SiGimp size={42} />
                            <span className="tooltiptext">Gimp</span>
                        </li>
                        <li className='icons tooltip'>
                            <SiAdobeillustrator size={42} />
                            <span className="tooltiptext">Adobe Illustrator</span>
                        </li>
                    </ul>
                </div>
                <div className="system">
                    <h3>Operating System</h3>
                    <ul>
                        <li className='icons tooltip'>
                            <SiWindows size={42} />
                            <span className="tooltiptext">Windows</span>
                        </li>
                        <li className='icons tooltip'>
                            <FaLinux size={42} />
                            <span className="tooltiptext">Linux</span>
                        </li>
                        <li className="icons tooltip">
                            <FaUbuntu size={42} />
                            <span className="tooltiptext">Ubuntu</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SkillsSection;
