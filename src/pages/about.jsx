
import Center from '../components/center/center';
import Navbar from '../components/navbar/navbar';
import Collapse from '../components/collapse/collapse';
import Footer from '../components/footer/footer';
import aboutData from "../data/about.json"; // Make sure the path is correct
import imgBannerAbout from "../assets/banner-about.png";
import "../components/banner/_banner.scss"; // Ensure this import path is correct


function About() {
  return (
    <div >
      <Center>
        <Navbar />
        <div className='banner'>
          <img src={imgBannerAbout} alt='Bannière du site Kasa' className='banner-image' />
        </div>
        <div className="collapse-container">
          {aboutData.map((item) => (
            <Collapse key={item.id} title={item.title} content={item.content} />
          ))}
        </div>
      </Center>
      <Footer />
    </div>
  );
}

export default About;
