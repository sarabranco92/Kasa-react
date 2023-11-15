import React from 'react';
import { Link } from 'react-router-dom';
import records from "../../data/logement.json"; // Ensure the path to your JSON data is correct
import "../cards/_cards.scss"; // Ensure the path to your SCSS file is correct

const Cards = () => {
    return (
        <div className="logements">
            {records.map((record) => {
                const { id, cover, title } = record;

                // Use backticks for template literals to embed expressions
                return (
                    <div className="fiche-logement" key={id}>
                        <Link to={`/fiche_log/${id}`}>
                            <img src={cover} alt={title} />
                            <h3>{title}</h3>
                        </Link>
                    </div>
                )
            })}
        </div>
    );
};

export default Cards;
