import React, { Component } from 'react';
import { FaGithub, FaCodepen, FaLinkedin } from 'react-icons/fa';
import './socialicons.scss';

class SocialIcons extends Component {
    render() {
        return (
            <div className="icon-container">
                <div className="icon-box">
                    <a href="#home"><FaGithub class="icon" /></a>
                    <a href="#home"><FaCodepen class="icon" /></a>
                    <a href="#home"><FaLinkedin class="icon" /></a>
                </div>
            </div>
        )
    }
}

export default SocialIcons;