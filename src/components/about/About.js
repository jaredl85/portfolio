import React from 'react';
import me from '../../resources/img/me.jpg';
import SocialIcons from '../social-icons/SocialIcons.js';
import './about.scss';

export default function About() {
    return (
        <div className="about" id="about">
            <h2>About</h2>
            <div className="row">
                <div className="about-img-box">
                    <img src={me} alt="Jared" />
                </div>
                <div className="about-text-box">
                    <h3>A Headline goes here.</h3>
                    <strong>
                        <p>
                            2-3 sentences about me go here. Talk about my coding skills and soft-skills or something.
                            Things I want others to know at a glance.
                        </p>
                    </strong>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                        eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                        in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                        eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                        in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <a className="resume-btn" href="#">See my resume</a>
                </div>
            </div>
        </div>
    )
}
