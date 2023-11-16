
import React, { useState } from 'react';
import '../collapse/_collapse.scss';
import arrow from '../../assets/arrow-up.png';


function Collapse({ title, content }) {
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle); // This will change the state and cause a re-render.
    };

    return (
        <div className="collapse">
            <h3 className='collapse_title' onClick={handleToggle}>
                {title}
                <img 
                    className={`arrow ${toggle ? 'rotated' : ''}`} // 'rotated' class when toggle is true
                    src={arrow}
                    alt="Toggle content visibility" 
                />
            </h3>
            <div className={toggle ? 'collapse_content' : 'collapse_content_hidden'}>
                {Array.isArray(content) ? content.map((item, index) => (
                    <p key={index}>{item}</p>
                )) : <p>{content}</p>}
            </div>
        </div>
    );
}

export default Collapse;