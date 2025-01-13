import React from "react";
import './header.scss'
import positivusLabel from './Positivus.svg';
import Image from "next/image";

const Header: React.FC = () => {
    return (
        <div className="header">
            <div className="positivus-logo">
                <svg className="logo-icon" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.9986 5.53472L35.5997 0.349121L30.464 18.0001L35.5997 35.6012L17.9986 30.4655L0.347656 35.6012L5.53325 18.0001L0.347656 0.349121L17.9986 5.53472Z" fill="black"/>
                </svg>
                <Image
                    src={positivusLabel}
                    width={171}
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
                    <li>
                    <button className="quote-request-button">
                        Request a quote
                    </button>
                    </li>                    
                </ul>
            </div>
        </div>
    )
}

export default Header;