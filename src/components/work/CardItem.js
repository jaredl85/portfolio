import React from 'react';
import { Link } from 'react-router-dom';
import './work.scss';

export default function CardItem(props) {
    return (
        <div>
            <div className="cards_item">
                <div className={props.className} data-category={props.label}>
                    <div className="buffer">
                        <h5 className="project-heading">{props.heading}</h5>
                        <p className="project-description">{props.description}</p>
                        <br />
                        <p className="project-skills"><strong>Technologies Used: </strong><br />
                            {props.skills}
                        </p>
                        <a href={props.display} target="_blank" className="project-link">
                            See it in the browser
                        </a>
                        <br />
                        <a href={props.link} target="_blank" className="project-link">
                            Check out the code
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}