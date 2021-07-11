import React, { Component } from 'react';
import CardItem from './CardItem.js';
import NeChiro from './projects/NeChiro.js';
import DogWithin from './projects/DogWithin.js';
import NuCamp from './projects/NuCamp.js';
import Portfolio from './projects/Portfolio.js';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import './work.scss';

class Work extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        // const WorkPage = () => {
        //     return (
        //         <Work />
        //     );
        // }

        // <Switch>
        //     <Route exact path='/nechiro' component={NeChiro} />
        //     <Route exact path='/dogwithin' component={DogWithin} />
        //     <Route exact path='/nucamp' component={NuCamp} />
        //     <Route exact path='/portfolio' component={Portfolio} />
        //     <Redirect to='/home' />
        // </Switch>

        return (
            <div className="work" id="work">
                <h2>Work</h2>
                <div className="work_container">
                    <div class="work_row">
                        <CardItem
                            className="project nechiro"
                            heading="Northeast Seattle Chiropractic"
                            description="Website re-design for a local chiropractic company. This was the final project for my NuCamp bootstrap course."
                            skills="HTML, CSS, Bootstrap, JavaScript"
                            display="#"
                            link="https://github.com/jaredl85/nechiro"
                        />
                        <CardItem
                            className="project dogwithin"
                            heading="The Dog Within"
                            description="Static website built for Seattle-based dog trainer."
                            skills="HTML, CSS, Skeleton.css"
                            display="#"
                            link="https://github.com/jaredl85/thedogwithin"
                        />
                    </div>
                    <div class="work_row">
                        <CardItem
                            className="project nucamp"
                            heading="NuCamp"
                            description="Main course project for NuCamp react course"
                            skills="JavaScript, JSX, React, React Router, Redux, ReactStrap"
                            display="#"
                            link="https://github.com/jaredl85/nucampsite2"
                        />
                        <CardItem
                            className="project portfolio-project"
                            heading="Portfolio Project"
                            description="Final project for NuCamp react course."
                            skills="React, JavaScript, Redux, HTML, CSS, Bootstrap"
                            display="#"
                            link="https://github.com/jaredl85/portfolio"
                        />
                    </div>
                </div>
            </div>

        )
    }
}

export default Work;