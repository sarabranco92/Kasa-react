import React from 'react'
import "../center/_center.scss";

function Center({children}) {
    return (
        <div className='center'>
            {children}
        </div>
    )
}

export default Center