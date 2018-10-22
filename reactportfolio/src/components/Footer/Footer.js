import React from 'react';
import './Footer.css';


function Footer(props) {
    return (
        <footer className="page-footer">
            <div className="footer-copyright">
                <div className="container center">
                    © 2018 Melinda Russell
                    <div className="links">
                        <i class="fab fa-html5"></i>
                        <i class="fab fa-css3"></i>
                        <img src="../../assets/images/bootstrap_icon_24.png" alt=" "/>
                        <i class="fab fa-font-awesome"></i>
                        <i class="fab fa-js"></i>
                        <i class="fab fa-react"></i>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;