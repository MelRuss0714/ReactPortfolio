import React from 'react';
import './Home.css';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
//import BrandStatement from './BrandStatement/BrandStatement';
//import LargePic from '../ProfilePics/LargePic';
//import Bubblink from '../Portfolio/Bubblink';
//import SmartRock from '../Portfolio/SmartRock';
//import Deblase from '../Portfolio/Deblase';



export default class Home extends React.Component {


    render() {
        return (
            <div className='Home'>
                <Navbar />
                <h1>Home</h1>
                <Footer />

            </div>
        );
    }
}