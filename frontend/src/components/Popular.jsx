import React from 'react';
import {  Card, CardImgOverlay } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Popular = ({ product }) => {

  return (
    <Card className='my-3 p-10  text-center'>
      <Link
        to={`/product/${product._id}`}
        style={{ textDecoration: 'none' }}
        className='text-dark'
      >
        <div class="image-hover">
        <Card.Img
          variant='top'
          src={product.image}
         style={{height:"350px",width:"400px"}}
        />
        <CardImgOverlay>

     
              <div class="outer">
                <div class="button-popular">
                  <div class="text">{product.category}</div>
                </div>
              </div>
          

        </CardImgOverlay>
        </div>
        
      
      </Link>
    
    </Card>
  );
};

export default Popular;
