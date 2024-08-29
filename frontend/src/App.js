import React from 'react';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
    <nav className="navbar navbar-expand-sm bg-dark text-white font-weight-normal">

    <center><p className="font">25% OFF & 2 OR MORE GET 35% OFF & FREE SHIPPING GLOBALLY</p></center>

     </nav>
     
    <div className='position-relative'>
     
      <Header />
      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
      <ToastContainer autoClose={1000} />
    </div></>
  );
};

export default App;
