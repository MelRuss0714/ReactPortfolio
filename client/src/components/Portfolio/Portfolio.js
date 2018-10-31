import React from 'react';
import './Portfolio.css';
import { Grid, Col, Row } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
//import SmallPic from '../ProfilePics/SmallPic';
import Bubblink from './Bubblink';
import SmartRock from './SmartRock';
import Poppy from './Poppy';
import CrystalClick from './CrystalClick';




export default class Portfolio extends React.Component {


    render() {
        return (
            <div className='Portfolio'>
                <Navbar />
                <Grid>
                    <Row className='Row'>
                        <Col xsHidden md={1}>
                        </Col>
                        <Col className='TopProject' xs={12} md={4}>
                            <Bubblink />
                        </Col>
                        <Col className='TopDescr' xs={12} md={6}>
                            <h3>Bubblink</h3>
                            <p>Bubblink provides an opportunity for those who do not feel safe leaving their personal bubble a chance to link with others. The user can create a profile and log in to the site then chat in a community chat or join a private chat with another user. The front-end was built using HTML, CSS, and React.js and the back-end uses Node, MongoDB, Express, and Socket.io as well as other node modules. Created the idea of the app, responsible for debugging, creating the logo and CSS for the chats. <a href='https://github.com/MelRuss0714/Bubblink.git'>GitHub</a></p>
                        </Col>
                        <Col xsHidden md={1}>
                        </Col>
                    </Row>
                    <Row className='Row'>
                        <Col xsHidden md={1}>
                        </Col>
                        <Col className='SecDescr' xs={12} md={6}>
                            <h3>SmartRock</h3>
                            <p>SmartRock serves as a one-stop shop to find out information about your favorite artists from the music world. The Ticketmaster API generates tour name, time, date, city, and venue to next 5 events, the Last FM API generates 10 ten tracks by band searched, and the YouTube API plays the top song from band or artist that is searched and plays video of song from top tracks when the song is clicked on. The front-end was built using, HTML, CSS, and bootstrap. Built the back-end and functionality using jQuery and Javascript. <a href='https://github.com/MelRuss0714/SmartRock.git'>GitHub</a></p>
                        </Col>
                        <Col className='SecProject' xs={12} md={4}>
                            <SmartRock />
                        </Col>
                        <Col xsHidden md={1}>
                        </Col>
                    </Row>
                    <Row className='Row'>
                        <Col xsHidden md={1}>
                        </Col>
                        <Col className='TopProject' xs={12} md={4}>
                            <Poppy />
                        </Col>
                        <Col className='TopDescr' xs={12} md={6}>
                            <h3>The Poppy Project</h3>
                            <p>The Poppy Project is a simple website but has a personal meaning. This was written in one evening for my father for Father’s Day to celebrate our technology connection and to thank him for all his support. The site functions as a basic hangman game with all the clues having personal connections to his interests thereby prompting a family picture to be displayed. The front-end was built using, HTML, CSS, and bootstrap. Built the back-end and functionality using jQuery and Javascript. <a href='https://github.com/MelRuss0714/PoppyProject'>GitHub</a></p>
                        </Col>
                        <Col xsHidden md={1}>
                        </Col>
                    </Row>
                    <Row className='Row'>
                        <Col xsHidden md={1}>
                        </Col>
                        <Col className='SecDescr' xs={12} md={6}>
                            <h3>SmartRock</h3>
                            <p>SmartRock serves as a one-stop shop to find out information about your favorite artists from the music world. The Ticketmaster API generates tour name, time, date, city, and venue to next 5 events, the Last FM API generates 10 ten tracks by band searched, and the YouTube API plays the top song from band or artist that is searched and plays video of song from top tracks when the song is clicked on. The front-end was built using, HTML, CSS, and bootstrap. Built the back-end and functionality using jQuery and Javascript. <a href='https://github.com/MelRuss0714/SmartRock.git'>GitHub</a></p>
                        </Col>
                        <Col className='SecProject' xs={12} md={4}>
                            <CrystalClick />
                        </Col>
                        <Col xsHidden md={1}>
                        </Col>
                    </Row>
                </Grid>
                <Footer />

            </div>
        );
    }
}