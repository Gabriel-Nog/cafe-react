import { React } from 'react';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import Slide from '../../components/Slide/Slide';
import Card from '../../components/Card/Card';
import Contact from '../../components/Contact/Contact';
import Footer from '../../components/Footer/Footer';
import './Home.css';

const Home = () => {
  return (
    <>
      <Link to="/sale-order">Pedidos</Link>
      <div className="slide-show-principal">
        <Slide type="home" />
      </div>
      <div className="card-container">
        <Card />
      </div>
      <div className="contact-container">
        <div className="slide-show-contact">
          <Slide type="contact" />
        </div>
        <div className="contact-form">
          <Contact />
        </div>
      </div>
      <div className="footer-container">
        <Footer />
      </div>
    </>
  );
};

export default Home;
