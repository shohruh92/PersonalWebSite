import React from 'react';
import Navbar from './component/Navbar/Navbar';
import RBanner from './component/Banner/RippleBanner';
import About from './component/About';
import Portfolio from './component/Portfolio/Portfolio';
import Contact from './component/Contact';
import Skill from './component/Skill/Skill';
import Footer from './component/Footer';
import shdata from './component/shdata';

export const Home6 = () => (
  <div className="body_wrapper red_color">
    <Navbar mainlogo="logo2.png" stickylogo="logo.png"/>  
    <RBanner shdata={shdata} bClass="banner_shap_two" imag="man.jpg" textLeft="text-left"/>
    <About aClass="about_area" shdata={shdata}/> 
    <Portfolio/>
    <Skill/>
    <Contact shdata={shdata}/>
    <Footer shdata={shdata}/>
  </div>
)

