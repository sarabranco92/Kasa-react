import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react'; 

import records from "../../data/logement.json";

import Carousel from '../../components/carousel/carousel';
import Collapse from '../../components/collapse/collapse';
import Error from '../../components/error/error_comp';
import Rating from '../../components/rating/rating';
import Footer from '../../components/footer/footer';
import Center from '../../components/center/center';
import Navbar from '../../components/navbar/navbar';

import '../logement/_fiche_log.scss';

function FicheLogement() {
  // Récupération de l'identifiant du logement à partir de l'URL
  const { id } = useParams();
  const [logement, setLogement] = useState(null);
  const navigate = useNavigate();

  // Chargement des données du logement correspondant à l'id
  useEffect(() => {
    const record = records.find(r => r.id === id);
    if (!record) {
      // Si aucun logement n'est trouvé, rediriger vers un composant d'erreur
      navigate(<Error />, { replace: true });
    } else {
      // Si trouvé, mettre à jour l'état avec les informations du logement
      setLogement(record); 
    }
  }, [id, navigate]);

  // Affichage conditionnel en attendant le chargement des données
  if (!logement) {
    return null; 
  }

  // Rendu du composant avec les détails du logement
  return (
    <div className="AccommodationDetails">
      <Center>
        <Navbar />

        {logement.pictures && <Carousel images={logement.pictures} />}
        <section className='InformationSection'>
          <div className='AccommodationInfo'>
            {/* Affichage du titre, de la localisation et des tags du logement */}
            <h1 className='Title'>{logement.title}</h1>
            <p className='Location'>{logement.location}</p>
            <ul className='TagsList'>
              {logement.tags.map(tag => (
                <li className='TagItem' key={tag}>{tag}</li>
              ))}
            </ul>
          </div>
          <div className='OwnerInfo'>
            {/* Informations sur le propriétaire et la note du logement */}
            <div className='Owner'>
              <p className='OwnerName'>{logement.host?.name}</p>
              <img className='OwnerImage' src={logement.host?.picture} alt={logement.host?.name} />
            </div>
            <Rating rating={logement.rating} />
          </div>
        </section>
        <div className="description-content">
          {/* Contenu détaillé du logement avec des composants Collapse */}
          <div className="description-content__description">
            <Collapse
              title="Description"
              content={logement.description}
            />
          </div>
          <div className="description-content__equipement">
            {logement.equipments && <Collapse
              title="Équipements"
              content={logement.equipments.join(', ')} // Assumant que equipments est un tableau
            />}
          </div>
        </div>
      </Center>
      <Footer />
    </div>
  );
}


export default FicheLogement;