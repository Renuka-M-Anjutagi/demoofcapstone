import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Gallery = ({ product }) => {

  return (
    <Card className='my-3 p-0  text-center'>
      <Link
        to={`/product/${product._id}`}
        style={{ textDecoration: 'none' }}
        className='text-dark'
      >
       
        <Card.Img
          variant='top'
          src={product.image}
         style={{height:"150px",width:"200px",borderRadius:"10px",boxShadow:"10px"}}
        />
       
        
        
      </Link>
    
    </Card>
  );
};

export default Gallery;
