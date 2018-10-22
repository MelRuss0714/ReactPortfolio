import React from 'react';
import './Portfolio.css';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
//import SmallPic from '../ProfilePics/SmallPic';
//import Bubblink from './Bubblink';
//import SmartRock from './SmartRock';
//import Deblase from './Deblase';



export default class Portfolio extends React.Component {


    render() {
        return (
            <div className='Portfolio'>
                <Navbar />
                <h1>This is my portfolio</h1>
                
                <Footer />

            </div>
        );
    }
}