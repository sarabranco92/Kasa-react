import './_rating.scss';


import StarActive from '../../assets/star-active.png';
import StarInactive from '../../assets/star-inactive.png';






function Rating({ rating }) { 
   const stars = []; // Creer un tableau pour stocker les étoiles
 
   for (let i = 1; i <= 5; i++) { 
      if (i <= rating) {
         stars.push(<img className='Stars' key={i} src={StarActive} alt="star-filled" />);
      } else { 
         stars.push(<img className='Stars' key={i} src={StarInactive} alt="star-empty" />);
      }
   }

   return <div>{stars}</div>; 
}
export default Rating;