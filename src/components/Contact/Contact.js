import React from 'react';
import './Contact.css';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';




export default class Contact extends React.Component {


    render() {
        return (
            <div className='Contact'>
                <Navbar />
                <h1>Contact</h1>
                <Footer />

            </div>
        );
    }
}