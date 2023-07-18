import React, { useEffect, useState } from 'react';
import Rightsideimage from '../assets/rightisdeimage.jpeg'
import './about.css';

const About = () => {
  const [imageEntered, setImageEntered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const image = document.querySelector('.enter-from-right');
      const windowHeight = window.innerHeight;
      const imageTop = image.getBoundingClientRect().top;
      const imageBottom = image.getBoundingClientRect().bottom;

      const triggerPoint = windowHeight - 100;

      if (imageTop < triggerPoint && imageBottom >= 0) {
        setImageEntered(true);
      } else {
        setImageEntered(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="about" id='about'>
      <div className="about-content">
        <h1>Welcome to Lens Valley</h1>
        <p>We provide you the best cameras in the World at one Stop with affordable prices</p>
      </div>
      <img src={Rightsideimage} alt="camera" className={`enter-from-right ${imageEntered ? 'entered-from-right' : ''}`} />
    </div>
  );
};

export default About;
