import React from 'react'
import "../center/_center.scss";

// composant qui gère la marge gauche et droite de 100% sauf le Footer, et wrappe le contenu enfant
function Center({children}) {
    return (
        <div className='center'>
            {children}
        </div>
    )
}

export default Center