import React from 'react';
import Navbar from '../components/navbar';
import Banner from '../components/banner';
import Footer from '../components/footer';
import Center from '../components/center';
import Cards from '../components/cards'
import "../styles/App.css";


function Home() {
  return (
    <div className='home'>
      <Center>
        <Navbar />
        <Banner>
          <div className="banner">
          </div>
        </Banner>
        <Cards />
      </Center>
      <Footer />
    </div>
  );
}

export default Home;
