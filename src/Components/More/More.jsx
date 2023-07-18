import React from 'react';
import './more.css';
import pic1 from '../assets/img1.jpg'
import pic3 from '../assets/img3.jpg'
import pic2 from '../assets/img2.jpg'
import pic4 from '../assets/img4.jpeg'

const More = () => {
  return (
    <>
      <div className='more-page' id='more'>
        <div className='lenses'>
          <div className='lens-information'>
          <h1 className='lensheading'>Image Sensor Comparison</h1><br/>
          <p className='lenscontent'>The larger the image sensor, the finer the details your digital SLR camera can capture.</p>
          </div>
          <img src={pic4} alt='lenes' className='lens'/>
        </div>
        <div className='image-preview'>
          <img src={pic1} alt='left-sideimage' className='image1' />
          <img src={pic3} alt='left-sideimage' className='image2' />
          <img src={pic2} alt='left-sideimage' className='image3' />
          </div>
        </div>
      </>
      )
}

      export default More