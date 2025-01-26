import { React } from 'react';
import Slide from '../../components/Slide/Slide';
import Contact from '../../components/Contact/Contact';
import Footer from '../../components/Footer/Footer';
import './Home.css';

const Home = () => {
  return (
    <>
      <div className={'slide-show-principal'}>
        <Slide type="home" />
      </div>
      <div className={'contact-container'}>
        <div className={'slide-show-contact'}>
          <Slide type="contact" />
        </div>
        <div className={'contact-form'}>
          <Contact />
        </div>
      </div>
      <div className={'footer-container'}>
        <Footer />
      </div>
    </>
  );
};

export default Home;
