import React from "react";
import "./styles.css";
import trollFace from "../../images/trollface.png";

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar--title">
                <img src={trollFace} alt="Troll Face" /><span className="navbar--logo_text">Meme Generator</span>
            </div>
            <div className="navbar--subtitle">
                React Course - Project 3
            </div>
        </div>
    )
}