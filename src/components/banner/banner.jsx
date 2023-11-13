import React from 'react';
import banner from '../../assets/banner-home.png'
import "../banner/_banner.scss"

function Banner() {
  return (
    <div className='banner'>
      <img src={banner} alt='banner du site Kasa'className='banner-image'/>
      <h1 className='banner-text'>Chez vous, partout et ailleurs</h1>
    </div>
  );
}

export default Banner;

