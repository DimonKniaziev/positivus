import React from "react";
import Image from "next/image";
import './main-1.scss';
import illustration from './Illustration.png';
import amazonLogo from './amazon-logo.svg';
import dribbleLogo from './dribble-logo.svg';
import hubspotLogo from './hubspot-logo.svg';
import netflixLogo from './netflix-logo.svg';
import notionLogo from './notion-logo.svg';
import zoomLogo from './zoom-logo.svg';

const Main1: React.FC = () => {
    return (
        <React.Fragment>
            <div className="main-1">
                <div className="main-1-contant">
                    <h1>
                        Navigating the digital landscape for success
                    </h1>
                    <Image
                        src={illustration}
                        width={600}
                        height={515}
                        alt="illustration-1"
                        className="main-1-mobile-image"
                    />
                    <p>
                        Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
                    </p>
                    <button>
                        Book a consultation
                    </button>
                </div>
                <Image
                    src={illustration}
                    width={600}
                    height={515}
                    alt="illustration-1"
                    className="main-1-image"
                />
            </div>
            <div className="main-1-companies">
                <div className="img-container">
                    <Image
                        src={amazonLogo}
                        width={124}
                        height={48}
                        alt="amazon"
                    />
                </div>
                <div className="img-container">
                    <Image
                        src={dribbleLogo}
                        width={126}
                        height={48}
                        alt="dribble"
                    />
                </div>
                <div className="img-container">
                    <Image
                        src={hubspotLogo}
                        width={129}
                        height={48}
                        alt="hubspot"
                    />
                </div>
                <div className="img-container">
                    <Image
                        src={notionLogo}
                        width={146}
                        height={48}
                        alt="notion"
                    />
                </div>
                <div className="img-container">
                    <Image
                        src={netflixLogo}
                        width={125}
                        height={48}
                        alt="netflix"
                    />
                </div>
                <div className="img-container">
                    <Image
                        src={zoomLogo}
                        width={111}
                        height={48}
                        alt="zoom"
                    />
                </div>
            </div>
        </React.Fragment>
    )
}

export default Main1;