import React from 'react'
import { Link } from 'react-router-dom';
import records from "../../data/logement.json"
import "../cards/_cards.scss";


const Cards = () => {
    return (
        <div className="logements">

            { }
            {records.map((record) => {
                const { id, cover, title } = record;

                // affiche la fiche logement sur la page d'accueil
                return (
                    <div className="fiche-logement" key={id}>
                        <Link to={{ pathname: "/FicheLogement", search: "?_id=" + id }}>
                            <img src={cover} alt={title} />
                            <h3>{title}</h3>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}

export default Cards