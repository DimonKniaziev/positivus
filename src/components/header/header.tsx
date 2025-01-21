import React from "react";
import './header.scss'
import positivusLabel from './Positivus.svg';
import Image from "next/image";
import mobileMenuIcon from './mobile-menu-icon.svg'

const Header: React.FC = () => {
    return (
        <header>
            <Image
                src={positivusLabel}
                width={220}
                height={36}
                alt="positivus"
                className="positivus-logo"
            />
            <button className="mobile-menu-button">
                <Image
                    src={mobileMenuIcon}
                    width={24}
                    height={16}
                    alt="mobile menu"
                />
            </button>
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
        </header>
    )
}

export default Header;