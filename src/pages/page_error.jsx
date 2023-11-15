import React from 'react';
import Navbar from '../components/navbar/navbar';
import Center from '../components/center/center';
import Error from '../components/error/error_comp';
import Footer from '../components/footer/footer';

import "../styles/App.scss"


function PageError() {
  return (
    <div>
      <Center>
        <Navbar />
        <Error/>
      </Center>
      <Footer/>
    </div>
  );
}

export default PageError;
