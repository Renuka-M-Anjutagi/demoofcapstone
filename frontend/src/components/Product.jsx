import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addCurrency } from '../utils/addCurrency';
import { addToCart } from '../slices/cartSlice';
import Rating from './Rating';

const Product = ({ product }) => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addToCartHandler = () => {
    dispatch(addToCart({ ...product, qty }));
    navigate('/cart');
  };
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
         style={{height:"250px"}}
        />
        </div>
        
        
        <Card.Body>
          <Card.Title as='div' className='product-title'>
            <p className='font-title'>{product.name}</p>
          </Card.Title>
          <Card.Text as='h3'><p className='font-title'>{addCurrency(product.price)}</p></Card.Text>

          <Card.Text as='div' className='mb-3'>
            <Rating
              value={product.rating}
              text={`(${product.numReviews} reviews)`}
            />
          </Card.Text>
        
        </Card.Body>
      </Link>
    
    </Card>
  );
};

export default Product;
