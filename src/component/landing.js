import React from 'react'
import './landing.css';
import TypewriterComponent from 'typewriter-effect';
import logo from '../assets/logo.png';
import keyboard from '../assets/keyboard.png';
import { Link } from 'react-scroll';

function Landing() {
    const scrollWithOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -80; 
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
    }
    return (
        <div id="landing">
            <section className="main-top">
                <img src={logo} alt="logo" className="main-logo" width="60px" />
            </section>
            <div className="main-bottom">
                <section className="main-left-comp">
                    <h1 className="top-text">Learn to Type</h1>
                    <div className="typing-text">
                        <TypewriterComponent onInit={(typewriter) => typewriter.typeString("Increase Your WPM")
                            .pauseFor(500).deleteChars(3).typeString("Speed")
                            .pauseFor(500).deleteAll().typeString("Let's Get Started !!")
                            .start()
                        } />
                    </div>
                    <div className="main-button-div">
                        <Link className="main-button" to="typer" smooth={true} duration={1000}> Let's Type </Link>
                    </div>
                </section>
                <section className="main-right-comp">
                    <img src={keyboard} alt="keyboard" className="main-image" width="350px" />
                </section>
            </div >
        </div >
    )
}

export default Landing;

