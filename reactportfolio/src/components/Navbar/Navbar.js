
  import React from 'react';
  import './Navbar.css';
  import { Navbar } from 'react-bootstrap';
  //import Button from 'react-bootstrap/lib/Button';
  import ProfilePic from '../../assets/images/ProPicture.jpg';
  
  
  const NavBar = (props) =>
  
      <Navbar inverse collapseOnSelect>
          <Navbar.Header>
              <Navbar.Brand>
              <img src={ProfilePic} alt={"Melinda Russell"} className="SmPic"/>
              
                  <a className='HomeLink' href="/">Home  </a>
                  <a className='PortfolioLink' href="/portfolio">  Portfolio  </a>
                  <a className='ResumeLink' href="/resume">  Resume  </a>
                  <a className='AboutLink' href="/about">  About  </a>
                  <a className='ContactLink' href="/contact">  Contact</a>



              
              </Navbar.Brand>
          </Navbar.Header>
          
      </Navbar>
  
  
  
  
  
  export default NavBar;