import { React } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../../components/Header/Header';
import Slide from '../../components/Slide/Slide';
import Card from '../../components/Card/Card';
import Contact from '../../components/Contact/Contact';
import Footer from '../../components/Footer/Footer';
import './Home.css';

const Home = () => {
  return (
    <>
      {/* <Link to="/sale-order">Pedidos</Link> */}
      <div className="header-home-container">
      <Header />
      </div>
      <div className="slide-show-principal" id="principal">
        <Slide type="home" />
      </div>
      <div className="card-container-home" id="card-container-home">
        <Card />
      </div>
      <div className="contact-container" id="contact-container-home">
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
