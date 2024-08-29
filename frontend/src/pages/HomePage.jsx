import React, { useEffect, useState } from 'react';

import { Row, Col } from 'react-bootstrap';
import { useGetProductsQuery } from '../slices/productsApiSlice';
import { useSelector } from 'react-redux';
import Product from '../components/Product';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Paginate from '../components/Paginate';
import Meta from '../components/Meta';
import { FaUser,FaPaperPlane,FaLock} from 'react-icons/fa';
import Popular from '../components/Popular';
import Gallery from '../components/Gallery';
import AllCategory from './category/Allcategory';




const HomePage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [limit, setLimit] = useState(0);
  const [skip, setSkip] = useState(0);
  const { search } = useSelector(state => state.search);

  const { data, isLoading, error } = useGetProductsQuery({
    limit,
    skip,
    search
  });

  useEffect(() => {
    if (data) {
      setLimit(4);
      setSkip((currentPage - 1) * limit);
      setTotal(data.total);
      setTotalPage(Math.ceil(total / limit));
    }
  }, [currentPage, data, limit, total, search]);

  const pageHandler = pageNum => {
    if (pageNum >= 1 && pageNum <= totalPage && pageNum !== currentPage) {
      setCurrentPage(pageNum);
    }
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <>

          
          {!search}
          <Row>
<AllCategory />

          </Row>
          <Row>
            <img src='banner1.jpg'  alt="" ></img>
          </Row>
          <Meta />
          <div className='pr-0  m-0 w-100 h-75' style={{ backgroundColor: "rgb(239 239 239)" }} >
            <center style={{ paddingTop: "50px" }}>
              <p className='font-title'>  "Whispering Colors, Shaping Dreams – Studio Reverie, Your Artistic Odyssey Begins Here!"</p>

              <h2 className='font-headding' style={{ paddingBottom: "40px", paddingTop: "10px" }}> BEST SELLER</h2>
            </center>

            <Row>
              {data.products.map(product => (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                  <Product product={product} />
                </Col>
              ))}

            </Row>
            {totalPage > 1 && !search && (
              <Paginate
                currentPage={currentPage}
                totalPage={totalPage}
                pageHandler={pageHandler}
              />
            )}


            <center>
              <div class="outer">
                <div class="button">
                  <div class="text" style={{ color: "white" }}><a href='/product'>SHOW MORE</a></div>
                </div>
              </div>
            </center>

            <hr></hr>

            <center style={{ paddingTop: "30px", paddingBottom: "50px" }}>

              <h2 className='font-headding'>POPULAR SUBJECT</h2>
            </center>

            <Row>
              {data.products.map(product => (
                <Col key={product._id} >
                  <Popular product={product} />
                </Col>
              ))}

            </Row>
          </div>
          <hr></hr>


          <Row>
            {data.products.map(product => (
              <Col key={product._id} >
                <Gallery product={product} sm={12} md={6} lg={4} xl={3} />
              </Col>
            ))}

          </Row>
          <hr></hr>

          <div className='row w-100 ' style={{ backgroundColor: "rgb(239 239 239)" }}>

            <div className='col-5 float-none mt-20 w-50 py-5 px-5'>

              <p className='font-title' style={{ paddingLeft: "35px", paddingRight: "35px" }}>"Dress Your Walls in Dreams, Paint Your Space with Emotions – Palette Dreams, Your Artistic Haven!"</p>
              <h2 className='font-headding' style={{ paddingBottom: "30px", paddingTop: "8px", paddingLeft: "35px" }}>ARTVISTA</h2>

              <p style={{ paddingLeft: "35px", paddingRight: "35px" }}>"Welcome to Artvista – Your haven for abstract art! Step into a world where each painting becomes an unspoken dialogue, infusing a unique artistic ambiance into your life."</p>

              <p style={{ paddingLeft: "35px", paddingRight: "35px" }}>"Our mission is to seamlessly integrate art into your everyday life through distinct and captivating abstract oil paintings. Each piece is born from the depths of creativity, designed to spark imagination and emotional resonance."</p>



              <div class="outer">
                <div class="button">
                  <div class="text" style={{ color: "white" }}><a href='/product'>OUR STORY</a></div>
                </div>
              </div>


            </div>
            <div className='col-5 float-right justify-content-end w-50 p-0 m-0'>
              <img src='/painter_imm.jpg' alt='' ></img>
            </div>
            <div className='col-1'>

            </div>
            <div className='col-2  p-5 float-right justify-content-center'>
              <FaUser style={{ width: "50px", height: "50px" }} /><br />
              Professional Artist

              with patience and creativity
            </div>
            <div className='col-2  p-5 float-right justify-content-end'>
              <FaPaperPlane style={{ width: "50px", height: "50px" }} /><br />
              Free shipping globally

              by insured DHL/FEDEX
            </div>
            <div className='col-2  p-5 float-right justify-content-end'>
              <FaUser style={{ width: "50px", height: "50px" }} /><br />
              24/7 SUPPORT

              Customer service around the clock
            </div>
            <div className='col-2  p-5 float-right justify-content-end'> 
              <FaUser style={{ width: "50px", height: "50px" }} /><br />
              Hassle-free returns

              within 30 days after delivery
            </div>

            <div className='col-2 p-5 float-right justify-content-end'>
              <FaLock style={{ width: "50px", height: "50px" }} /><br />
              Hassle-free returns

              within 30 days after delivery
            </div>

          </div>
        </>

      )}
    </>
  );
};

export default HomePage;


