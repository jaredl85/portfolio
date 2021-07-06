import React, { Component } from 'react';
import { FaGithub, FaCodepen, FaLinkedin } from 'react-icons/fa';
import './socialicons.scss';

class SocialIcons extends Component {
    render() {
        return (
            <div className="icon-container">
                <div className="icon-box">
                    <FaGithub class="icon" />
                    <FaCodepen class="icon" />
                    <FaLinkedin class="icon" />
                </div>
            </div>
        )
    }
}

export default SocialIcons;