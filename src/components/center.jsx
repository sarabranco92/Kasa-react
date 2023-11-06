import React from 'react'
import "../styles/App.css";

// composant qui gère la marge gauche et droite de 100% sauf le Footer, et wrappe le contenu enfant
function Center({children}) {
    return (
        <div className='center'>
            {children}
        </div>
    )
}

export default Center