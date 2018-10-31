import React from 'react';
import './Contact.css';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';




export default class Contact extends React.Component {


    render() {
        return (
            <div className='Contact'>
                <Navbar />


                <h2>Send e-mail to someone@example.com:</h2>

                <form action="mailto:someone@example.com" method="post" enctype="text/plain">
                    Name:
                        <input type="text" name="name"></input>
                    E-mail:
                                <input type="text" name="mail"></input>
                    Comment:
                                        <input type="text" name="comment" size="50"></input>
                        <input type="submit" value="Send"></input>
                        <input type="reset" value="Reset"></input>
</form>


                        <Footer />

            </div>
                    );
                }
}