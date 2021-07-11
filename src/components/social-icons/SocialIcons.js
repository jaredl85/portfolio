import React, { Component } from 'react';
import { FaGithub, FaCodepen, FaLinkedin } from 'react-icons/fa';
import './socialicons.scss';

class SocialIcons extends Component {
    render() {
        return (
            <div className="icon-container">
                <div className="icon-box">
                    <a href="https://github.com/jaredl85" target="_blank"><FaGithub class="icon" /></a>
                    <a href="https://codepen.io/jared-loveridge" target="_blank"><FaCodepen class="icon" /></a>
                    <a href="https://www.linkedin.com/in/jaredloveridge/" target="_blank"><FaLinkedin class="icon" /></a>
                </div>
            </div>
        )
    }
}

export default SocialIcons;