import React from 'react';
import SameSection from './Component/SameSection';
import FeatureProduct from "./Component/FeatureProduct";
import Contact from './Contact';
import Services from './Component/Services';
const Home = () => {
  return (
    <>
    <SameSection heading = "AYU store"/>
    <FeatureProduct/>
    <Services/>
    <Contact/>
    </>
  )
}

export default Home;