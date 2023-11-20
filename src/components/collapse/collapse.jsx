
import React, { useState } from 'react';
import '../collapse/_collapse.scss';
import arrow from '../../assets/arrow-up.png';


function Collapse({ title, content }) {
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle); 
    };

    return (
        <div className="collapse">
            <h3 className='collapse_title' onClick={handleToggle}>
                {title}
                <img 
                    className={`arrow ${toggle ? 'rotated' : ''}`} 
                    src={arrow}
                    alt="Toggle content visibility" 
                />
            </h3>
            <div className={`collapse_content ${toggle ? 'collapse_content_visible' : 'collapse_content_hidden'}`}>
                {Array.isArray(content) ? content.map((item, index) => (
                    <p key={index}>{item}</p>
                )) : <p>{content}</p>}
            </div>
        </div>
    );
}

export default Collapse;