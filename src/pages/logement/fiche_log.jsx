import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react'; // Import useState and useEffect

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
  const { id } = useParams();
  const [logement, setLogement] = useState(null);
  let navigate = useNavigate();

  useEffect(() => {
    const record = records.find(r => r.id === id);
    if (!record) {
      navigate(<Error />, { replace: true });
    } else {
      setLogement(record); // No need for '|| null' since 'record' is already null-checked
    }
  }, [id, navigate]);


  const equipments = logement.equipments;

  return (
    <div className="AccommodationDetails">
      <Center>
        <Navbar />

        {logement.pictures && <Carousel images={logement.pictures} />}
        <section className='InformationSection'>
          <div className='AccommodationInfo'>
            <h1 className='Title'>{logement.title}</h1>
            <p className='Location'>{logement.location}</p>
            <ul className='TagsList'>
              {logement.tags.map(tag => (
                <li className='TagItem' key={tag}>{tag}</li>
              ))}
            </ul>
          </div>
          <div className='OwnerInfo'>
            <div className='Owner'>
              <p className='OwnerName'>{logement.host?.name}</p>
              <img className='OwnerImage' src={logement.host?.picture} alt={logement.host?.name} />
            </div>
            <Rating rating={logement.rating} />
          </div>
        </section>
        <div className="description-content">
          <div className="description-content__description">
            <Collapse
              title="Description"
              content={logement.description}
            />
          </div>
          <div className="description-content__equipement">
            <Collapse
              title="Équipements"
              content={equipments}
            />
          </div>
        </div>
      </Center>
      <Footer />
    </div>
  );
}

export default FicheLogement;
