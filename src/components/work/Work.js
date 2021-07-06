import React, { Component } from 'react';
import './work.scss';

class Work extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: [
                {
                    id: 0,
                    image: './placeholder.png',
                    name: 'Project 1'
                },
                {
                    id: 1,
                    image: './resources/img/placeholder.png',
                    name: 'project 2'
                },
                {
                    id: 2,
                    image: './resources/img/placeholder.png',
                    name: 'project 3'
                },
                {
                    id: 3,
                    image: './resources/img/placeholder.png',
                    name: 'project 4'
                }
            ]
        };
    }

    render() {
        const projects = this.state.projects.map(project => {
            return (
                <div key={project.id} className="project-col">
                    <img src={project.image} alt={project.name} />
                </div>
            )
        })
        return (
            <div className="work" id="work">
                <h2>Work</h2>
                <div className="work-row">
                    {projects};
                </div>
            </div>
        )
    }
}

export default Work;