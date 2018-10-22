import React from 'react';
import './Resume.css';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';




export default class Resume extends React.Component {


    render() {
        return (
            <div className='Resume'>
                <Navbar />
                <h1>Resume is Found Here</h1>
                <Footer />

            </div>
        );
    }
}