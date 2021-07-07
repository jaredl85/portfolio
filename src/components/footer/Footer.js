import React, { memo } from 'react';
import { FaCopyright } from 'react-icons/fa';
import './footer.scss';

export default memo(function Footer() {
    return (
        <div className="footer" id="footer">
            <a href="#home">Back to top</a>
            <p><FaCopyright /> | Jared Loveridge 2021</p>
        </div>
    )
})
