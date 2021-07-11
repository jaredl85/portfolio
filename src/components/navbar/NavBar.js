import React from 'react';
import './navbar.scss';

export default function NavBar() {
    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="left">
                    <a href="#home" className="logo">JL</a>
                </div>
                <div className="right">
                    <ul className="navLinks">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#work">Work</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </div >
    )
}