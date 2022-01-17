import React from "react";
import MyImage from "../assets/images/undraw_web_developer_re_h7ie.svg";

const Header = () => {
    return (
        <div className="intro">
            <h1 className="gradient_text">Hi, I am Nirban</h1>
            <div className="gradient_text"></div>
            <div className="hero_image">
                <img src={MyImage} alt="own_image" className="profile_pic" />
            </div>
        </div>
    )
}

export default Header;