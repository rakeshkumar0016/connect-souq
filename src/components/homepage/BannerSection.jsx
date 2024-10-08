import React, { useState } from 'react';
import image_1 from '../../assets/images/banner-images/banner-1.png'
import image_2 from '../../assets/images/banner-images/banner-2.png'
import image_3 from '../../assets/images/banner-images/banner-3.png'
import image_4 from '../../assets/images/banner-images/banner-4.png'
import buttonicon from '../../assets/images/button-icon.svg'

const images = [
    { src: image_1, alt: 'Global business connections banner' },
    { src: image_2, alt: 'Expand business globally' },
  ];
  const images_2 = [
    { src: image_3, alt: 'Connecting with professionals worldwide' },
    { src: image_4, alt: 'Unlock new opportunities' },
  ];
const HomeBanner = () => {
    
    return (
        <div className={'homepage-banner'}>
           <div className='container'>
            <div className="connect_banner">
              <div className="connect-banner-1">
              {images.map((image, index) => (
              <img key={index} src={image.src} alt={image.alt} />
            ))}
                </div>
                <div className="connect-banner-2">
                {images_2.map((image, index) => (
              <img key={index} src={image.src} alt={image.alt} />
            ))}
                </div>
             
              <div className="connect-banner-3">
                <h3>Your Global Marketplace for Growth</h3>
                <p>Expand your business across 40+ countries, 20+ Sectors and turn your network into your net worth. Connect with trusted buyers, sellers, and professionals worldwide to unlock new opportunities, scale your operations, and forge valuable partnerships.</p>
              <p>Join today and take your business to new heights with seamless global connections!</p>

              <button className="button">Discover More<img src={buttonicon}/></button>

              
              </div>
            </div>
           </div>
        </div>
        
    )
}

export default HomeBanner; 