import React from 'react';
import './home.scss';

export default function Home() {
    return (
        <div className="home" id="home">
            <div className="splash-text-box">
                <h1>
                    Hello. I'm <span>Jared.</span>
                    <br />
                    I build websites in <span>$tech.</span>
                </h1>
                <br/>
                <a className="home-btn" href="#work">See my work</a>
            </div>
        </div>
    )
}
