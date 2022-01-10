import React from "react";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaJava, FaFigma, FaGitAlt, FaGithub, FaReact, FaSass } from "react-icons/fa";
import { SiGimp, SiInkscape, SiC, SiBootstrap } from "react-icons/si"
import { FcLinux } from "react-icons/fc";

const Skills = () => {
    return (
        <div id="skills">
            <h1 className="gradient_text">My Skillset</h1>
            <div className="language gradient_text">
                <h2>Languages</h2>
                <div className="box_1">
                    <span><FaHtml5 size="2em" color="#e34c26" aria-hidden="true" /></span>
                    <span><FaCss3Alt size="2em" color="#0170ba" aria-hidden="true" /></span>
                    <span><FaJsSquare size="2em" color="#f7df1e" aria-hidden="true" /></span>
                    <span><FaJava size="2em" color="#e58923" aria-hidden="true" /></span>
                    <span><SiC size="2em" color="#283593" aria-hidden="true" /></span>
                </div>
            </div>
            <div className="tools gradient_text">
                <h2>Tools & Framework</h2>
                <div className="box_2">
                    <span><FaFigma size="2em" color="#e34c26" aria-hidden="true" /></span>
                    <span><SiGimp size="2em" color="rgb(255, 81, 0)" aria-hidden="true" /></span>
                    <span><SiInkscape size="2em" color="cornflowerblue" aria-hidden="true" /></span>
                    <span><FaGitAlt size="2em" color="#e8523c" aria-hidden="true" /></span>
                    <span><FaGithub size="2em" color="#fff" aria-hidden="true" /></span>
                    <span><FaReact size="2em" color="#00d8ff" aria-hidden="true" /></span>
                    <span><SiBootstrap size="2em" color="#583b7a" aria-hidden="true" /></span>
                    <span><FaSass size="2em" color="#c9649a" aria-hidden="true" /></span>
                    <span><FcLinux size="2em" aria-hidden="true" /></span>
                </div>
            </div>
        </div>
    )
}

export default Skills;