

import React, { useState } from 'react';
import '../collapse/_collapse.scss';
import arrow from '../../assets/arrow-up.png';


function Collapse({ title, content }) {
    // Utilisation du hook useState pour gérer l'état d'affichage du contenu
    const [toggle, setToggle] = useState(false);

    // Fonction pour changer l'état d'affichage du contenu
    const handleToggle = () => {
        setToggle(!toggle); 
    };

    // Rendu du composant Collapse
    return (
        // Conteneur principal du composant
        <div className="collapse">
            {/* Titre du contenu pliable */}
            <h3 className='collapse_title' onClick={handleToggle}>
                {title}
                {/* Image de flèche qui change d'orientation selon l'état du contenu */}
                <img 
                    className={`arrow ${toggle ? 'rotated' : ''}`} 
                    src={arrow}
                    alt="Toggle content visibility" 
                />
            </h3>
            {/* Contenu pliable, affiché ou masqué en fonction de l'état toggle */}
            <div className={toggle ? 'collapse_content' : 'collapse_content_hidden'}>
                {/* Gère le rendu du contenu, qu'il soit un tableau ou un seul élément */}
                {Array.isArray(content) ? content.map((item, index) => (
                    <p key={index}>{item}</p>
                )) : <p>{content}</p>}
            </div>
        </div>
    );
}

// Exportation du composant Collapse pour une utilisation dans d'autres parties de l'application
export default Collapse;
