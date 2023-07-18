import React from 'react';
import { Link } from 'react-router-dom';
import './product.css';

const ProductPage = ({ productData }) => {
  return (
    <>
      <div className='products-page' id='products'>
        <div className='products-heading'>Products</div>
        <div className="product-container" >
          {productData.map((product) => (
            <div key={product.id} className="product-card">
              <img className="product-image" src={product.imageUrl} alt='products' />
              <div className="product-details">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p>MRP Rs.{product.price}</p>
                <p>{product.megapixel}</p>
                <p>{product.processor}</p>
                <p>{product.FPS}</p>
                <p>Sd-Card slot {product.SDcard}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='link-to-moreproductspage'>
      <Link to='/' className='more-products'>More products<i class="fa-solid fa-arrow-right"></i></Link>
      </div>
    </>
  );
};

export default ProductPage;