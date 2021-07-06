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
            <div className="row">
                <div className="skills">
                    <h3>Skills</h3>
                    <li><h4>HTML</h4><span class="bar"><span class="html"></span></span></li>
                    <li><h4>CSS</h4><span class="bar"><span class="css"></span></span></li>
                    <li><h4>SASS</h4><span class="bar"><span class="sass"></span></span></li>
                    <li><h4>Bootstrap</h4><span class="bar"><span class="bootstrap"></span></span></li>
                    <li><h4>JavaScript</h4><span class="bar"><span class="javascript"></span></span></li>
                    <li><h4>React</h4><span class="bar"><span class="react"></span></span></li>
                    <li><h4>WordPress</h4><span class="bar"><span class="wordpress"></span></span></li>
                    <li><h4>Design</h4><span class="bar"><span class="design"></span></span></li>
                </div>
            </div>
        </div>
    )
}
