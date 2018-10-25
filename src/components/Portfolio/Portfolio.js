import React from 'react';
import './Portfolio.css';
import { Grid, Col, Row } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
//import SmallPic from '../ProfilePics/SmallPic';
import Bubblink from './Bubblink';
import SmartRock from './SmartRock';
import Poppy from './Poppy';



export default class Portfolio extends React.Component {


    render() {
        return (
            <div className='Portfolio'>
                <Navbar />
                <Grid>
                    <Row className='TopRow'>
                        <Col xs={12} md={3}>
                            <Bubblink />
                            <a href='https://github.com/MelRuss0714/Bubblink.git'>GitHub</a>
                        </Col>
                        <Col xsHidden md={1}>
                        </Col>
                        <Col xs={12} md={3}>
                            <SmartRock />
                            <a href='https://github.com/MelRuss0714/Bubblink.git'>GitHub</a>
                        </Col>
                        <Col xsHidden md={1}>
                        </Col>
                        <Col xs={12} md={3}>
                            <Poppy />
                            <a href='https://github.com/MelRuss0714/Bubblink.git'>GitHub</a>
                        </Col>
                        <Col xsHidden md={1}>
                        </Col>
                    </Row>
                    <Row className='TopRow'>
                        <Col xs={12} md={3}>
                            <Bubblink />
                            <a href='https://github.com/MelRuss0714/Bubblink.git'>GitHub</a>
                        </Col>
                        <Col xsHidden md={1}>
                        </Col>
                        <Col xs={12} md={3}>
                            <SmartRock />
                            <a href='https://github.com/MelRuss0714/Bubblink.git'>GitHub</a>
                        </Col>
                        <Col xsHidden md={1}>
                        </Col>
                        <Col xs={12} md={3}>
                            <Poppy />
                            <a href='https://github.com/MelRuss0714/Bubblink.git'>GitHub</a>
                        </Col>
                        <Col xsHidden md={1}>
                        </Col>
                    </Row>
                    <Row className='TopRow'>
                        <Col xs={12} md={3}>
                            <Bubblink />
                            <a href='https://github.com/MelRuss0714/Bubblink.git'>GitHub</a>
                        </Col>
                        <Col xsHidden md={1}>
                        </Col>
                        <Col xs={12} md={3}>
                            <SmartRock />
                            <a href='https://github.com/MelRuss0714/Bubblink.git'>GitHub</a>
                        </Col>
                        <Col xsHidden md={1}>
                        </Col>
                        <Col xs={12} md={3}>
                            <Poppy />
                            <a href='https://github.com/MelRuss0714/Bubblink.git'>GitHub</a>
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