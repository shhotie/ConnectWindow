import React, { Component } from 'react';
import "./Home.css"
import NavBar from '../NavBar/NavBar';
import MainContent from '../MainContent/MainContent';
// import ImgUpload from '../ImgUpload/ImgUpload';

const Home = () => {
  
        return ( 
            <div>
                <NavBar />
                <MainContent />
                {/* <ImgUpload /> */}                
            </div>
         );
    }
 
export default Home;
