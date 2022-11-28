import React from 'react';
import Footer from '../shared/Footer';
import MobileMenu from '../shared/MobileMenu';
import Navbar from '../shared/Navbar';
import About from './About/About';
import Banner from './Banner/Banner';
import Project from './Project/Project';
import Data from './Data/Data';

const HomePage = ({useDarkMode}) => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <About></About>
            <Data></Data>
            <Project></Project>
            <Footer></Footer>
            <MobileMenu></MobileMenu>
        </div>
    );
};

export default HomePage;