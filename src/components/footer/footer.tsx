import React from "react";
import Image from "next/image";
import './footer.scss';
import positivusLabel from './logo.svg';
import linkedInIcon from'./linked-in-icon.svg';
import facebookIcon from './facebook-icon.svg';
import twiterIcon from './twiter-icon.svg';

const Footer: React.FC = () => {
    return (
        <footer>
            <div className="footer-nav-bar">
                <div className="positivus-logo">
                    <Image
                        src={positivusLabel}
                        width={180}
                        height={29}
                        alt="positivus"
                    />
                </div>
                <div className="nav-bar">
                    <ul className="links-list">
                        <li>About us</li>
                        <li>Services</li>
                        <li>Use Cases</li>
                        <li>Pricing</li>
                        <li>Blog</li> 
                    </ul>
                </div>
                <div className="social-media-icons">
                    <Image
                        src={linkedInIcon}
                        width={30}
                        height={30}
                        alt="linkedIn"
                    />
                    <Image
                        src={facebookIcon}
                        width={30}
                        height={30}
                        alt="facebook"
                    />
                    <Image
                        src={twiterIcon}
                        width={30}
                        height={30}
                        alt="twiter"
                    />
                </div>
            </div>
            
            <div className="footer-contact-us">
                <div className="contacts">
                    <h4>Contact us:</h4>
                    <p>Email: info@positivus.com</p>
                    <p>Phone: 555-567-8901</p>
                    <p>Address: 1234 Main St <br/> Moonstone City, Stardust State 12345</p>
                </div>
                <div className="subscribe-to-news">
                    <input type="email" placeholder="Email"/>
                    <button>
                        Subscribe to news
                    </button>                    
                </div>
            </div>

            <div className="line"></div>
            <div className="privacy-policy">
                <span>
                    © 2023 Positivus. All Rights Reserved.
                </span>
                <a>
                    Privacy Policy
                </a>
            </div>
        </footer>
    );
}

export default Footer;