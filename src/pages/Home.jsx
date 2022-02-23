import React, { useState } from 'react';
import Navbar from '../components/navbar/Navbar';
import SideBar from '../components/navbar/sideBar/SideBar';
import Header from '../components/header/Header';
import InfoSection from '../components/infoSection/InfoSection';
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
} from '../components/infoSection/Data';
import Services from '../components/services/Services';
import Footer from '../components/footer/Footer';
import svg1 from '../images/svg1.svg';
import svg2 from '../images/svg2.svg';
import svg3 from '../images/svg3.svg';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <SideBar toggle={toggle} isOpen={isOpen} />
      <Navbar toggle={toggle} />
      <Header />
      <InfoSection {...homeObjOne} img={svg1} />
      <InfoSection {...homeObjTwo} img={svg2} />
      <Services />
      <InfoSection {...homeObjThree} img={svg3} />
      <Footer />
     
    </>
  );
};

export default Home;
