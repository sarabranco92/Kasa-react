import React from 'react';
import Navbar from '../components/navbar/navbar';
import Banner from '../components/banner/banner';
import Footer from '../components/footer/footer';
import Center from '../components/center/center';
import Cards from '../components/cards/cards';
import "../styles/App.scss"


function Home() {
  return (
    <div>
      <Center>
        <Navbar />
        <Banner/>
        <Cards />
      </Center>
      <Footer />
    </div>
  );
}

export default Home;
