import React from 'react';
import image_1 from '../../assets/images/banner-images/banner-1.png';
import image_2 from '../../assets/images/banner-images/banner-2.png';
import image_3 from '../../assets/images/banner-images/banner-3.png';
import image_4 from '../../assets/images/banner-images/banner-4.png';

const images = [
  { src: image_1, alt: 'Global business connections banner' },
  { src: image_2, alt: 'Expand business globally' },
  { src: image_3, alt: 'Connecting with professionals worldwide' },
  { src: image_4, alt: 'Unlock new opportunities' },
];

const HomeBanner = () => {
  return (
    <section className="homepage-banner">
      <div className="container">
        <div className="connect-banner">
          <div className="connect-banner-images">
            {images.map((image, index) => (
              <img key={index} src={image.src} alt={image.alt} />
            ))}
          </div>
          <div className="connect-banner-content">
            <h3>Your Global Marketplace for Growth</h3>
            <p>
              Expand your business across 40+ countries, 20+ sectors, and turn your network into your net worth. 
              Connect with trusted buyers, sellers, and professionals worldwide to unlock new opportunities, 
              scale your operations, and forge valuable partnerships.
            </p>
            <p>Join today and take your business to new heights with seamless global connections!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;