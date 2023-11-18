import StarActive from '../../assets/star-active.png';
import StarInactive from '../../assets/star-inactive.png';
import '../rating/_rating.scss'

function Rating({ rating }) { 
   const stars = []; 
 
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