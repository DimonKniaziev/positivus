import React from "react";
import './services.scss';
import Link from "next/link";
import Image from "next/image";
import iconLinkGreen from './icon-link-green.svg';
import iconLinkBlack from './icon-link-black.svg';
import servicesItemImage1 from "./services-item-image1.png";
import servicesItemImage2 from "./services-item-image2.png";
import servicesItemImage3 from "./services-item-image3.png";
import servicesItemImage4 from "./services-item-image4.png";
import servicesItemImage5 from "./services-item-image5.png";
import servicesItemImage6 from "./services-item-image6.png";

const Services: React.FC = () => {
    return (
        <div className="services">
            <div className="topic-header">
                <div className="topic-header-label">
                    <h2>Services</h2>
                </div>
                <p>
                    At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:
                </p>
            </div>
            <div className="services-content">
                <div className="services-content-item bg-gray">
                    <div className="services-content-item-info">
                        <div className="service-content-item-label item-label-green">
                            <h3>Search engine</h3>
                            <h3>optimization</h3>
                        </div>
                        <div className="link-container">
                            <Link href="#">
                                <div className="service-content-item-link">
                                    <Image
                                        src={iconLinkGreen}
                                        width={41}
                                        height={41}
                                        alt="link-icon"
                                    />
                                    <span>
                                        Learn more
                                    </span>    
                                </div>
                            </Link>
                            <div className="services-content-item-image-mobile">
                                <Image
                                    src={servicesItemImage1}
                                    width={210}
                                    height={166}
                                    alt="search engine"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="services-content-item-image">
                        <Image
                            src={servicesItemImage1}
                            width={210}
                            height={166}
                            alt="search engine"
                        />
                    </div>
                </div>
                <div className="services-content-item bg-green">
                    <div className="services-content-item-info">
                        <div className="service-content-item-label item-label-white">
                            <h3>Pay-per-click</h3>
                            <h3>advertising</h3>
                        </div>
                        <div className="link-container">
                            <Link href="#">
                                <div className="service-content-item-link">
                                    <Image
                                        src={iconLinkGreen}
                                        width={41}
                                        height={41}
                                        alt="link-icon"
                                    />
                                    <span>
                                        Learn more
                                    </span>    
                                </div>
                            </Link>
                            <div className="services-content-item-image-mobile">
                                <Image
                                    src={servicesItemImage2}
                                    width={210}
                                    height={166}
                                    alt="search engine"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="services-content-item-image">
                        <Image
                            src={servicesItemImage2}
                            width={210}
                            height={148}
                            alt="search engine"
                        />
                    </div>
                </div>            
                <div className="services-content-item bg-dark">
                    <div className="services-content-item-info">
                        <div className="service-content-item-label item-label-white">
                            <h3>Social media</h3>
                            <h3>marketing</h3>
                        </div>
                        <div className="link-container">
                            <Link href="#">
                                <div className="service-content-item-link">
                                    <Image
                                        src={iconLinkBlack}
                                        width={41}
                                        height={41}
                                        alt="link-icon"
                                    />
                                    <span>
                                        Learn more
                                    </span>    
                                </div>
                            </Link>
                            <div className="services-content-item-image-mobile">
                                <Image
                                    src={servicesItemImage3}
                                    width={210}
                                    height={166}
                                    alt="search engine"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="services-content-item-image">
                        <Image
                            src={servicesItemImage3}
                            width={210}
                            height={210}
                            alt="search engine"
                        />
                    </div>
                </div>
                <div className="services-content-item bg-gray">
                    <div className="services-content-item-info">
                        <div className="service-content-item-label item-label-green">
                            <h3>Email</h3>
                            <h3>marketing</h3>
                        </div>
                        <div className="link-container">
                            <Link href="#">
                                <div className="service-content-item-link">
                                    <Image
                                        src={iconLinkGreen}
                                        width={41}
                                        height={41}
                                        alt="link-icon"
                                    />
                                    <span>
                                        Learn more
                                    </span>    
                                </div>
                            </Link>
                            <div className="services-content-item-image-mobile">
                                <Image
                                    src={servicesItemImage4}
                                    width={210}
                                    height={166}
                                    alt="search engine"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="services-content-item-image">
                        <Image
                            src={servicesItemImage4}
                            width={210}
                            height={193}
                            alt="search engine"
                        />
                    </div>
                </div>            
                <div className="services-content-item bg-green">
                    <div className="services-content-item-info">
                        <div className="service-content-item-label item-label-white">
                            <h3>Coontent</h3>
                            <h3>creation</h3>
                        </div>
                        <div className="link-container">
                            <Link href="#">
                                <div className="service-content-item-link">
                                    <Image
                                        src={iconLinkGreen}
                                        width={41}
                                        height={41}
                                        alt="link-icon"
                                    />
                                    <span>
                                        Learn more
                                    </span>    
                                </div>
                            </Link>
                            <div className="services-content-item-image-mobile">
                                <Image
                                    src={servicesItemImage5}
                                    width={210}
                                    height={166}
                                    alt="search engine"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="services-content-item-image">
                        <Image
                            src={servicesItemImage5}
                            width={210}
                            height={196}
                            alt="search engine"
                        />
                    </div>
                </div>
                <div className="services-content-item bg-dark">
                    <div className="services-content-item-info">
                        <div className="service-content-item-label item-label-green">
                            <h3>Analytics and</h3>
                            <h3>tracking</h3>
                        </div>
                        <div className="link-container">
                            <Link href="#">
                                <div className="service-content-item-link">
                                    <Image
                                        src={iconLinkBlack}
                                        width={41}
                                        height={41}
                                        alt="link-icon"
                                    />
                                    <span>
                                        Learn more
                                    </span>    
                                </div>
                            </Link>
                            <div className="services-content-item-image-mobile">
                                <Image
                                    src={servicesItemImage6}
                                    width={210}
                                    height={166}
                                    alt="search engine"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="services-content-item-image">
                        <Image
                            src={servicesItemImage6}
                            width={210}
                            height={170}
                            alt="search engine"
                        />
                    </div>
                </div>                
            </div>
        </div>
    )
}

export default Services;