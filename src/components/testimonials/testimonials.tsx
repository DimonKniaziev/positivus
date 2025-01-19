'use client'
import React from "react";
import "./testimonials.scss";
import bubble from './Bubble.svg';
import Image from "next/image";
import inactiveCarouselPoint from "./Inactive-carousel-point.svg";
import activeCarouselPoint from "./Active-carousel-point.svg";
import arrowLeft from "./Arrow-left.svg";
import arrowRight from "./Arrow-right.svg";

const Testimonials: React.FC = () => {
    return (
        <div className="testimonials">
            <div className="topic-header">
                <div className="topic-header-label">
                    <h2>Testimonials</h2>
                </div>
                <div>
                    <p>
                        Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services
                    </p>
                </div>
            </div>
            <div className="testimonials-content">
                <div className="carousel-content">
                    <div className="carousel-item">
                        <div className="comment-container">
                            <Image
                                src={bubble}
                                width={606}
                                height={266}
                                alt="bubble"
                            />
                            <div className="text-container">
                                <p>
                                    {`"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."`}
                                </p>
                            </div>
                        </div>
                        <div className="comentator-name-content">
                            <h4 className="comentator-name">
                                John Smith
                            </h4>
                            <span>Marketing Director at XYZ Corp</span>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="comment-container">
                            <Image
                                src={bubble}
                                width={606}
                                height={266}
                                alt="bubble"
                            />
                            <div className="text-container">
                                <p>
                                    {`"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."`}
                                </p>
                            </div>
                        </div>
                        <div className="comentator-name-content">
                            <h4 className="comentator-name">
                                John Smith
                            </h4>
                            <span>Marketing Director at XYZ Corp</span>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="comment-container">
                            <Image
                                src={bubble}
                                width={606}
                                height={266}
                                alt="bubble"
                            />
                            <div className="text-container">
                                <p>
                                    {`"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."`}
                                </p>
                            </div>
                        </div>
                        <div className="comentator-name-content">
                            <h4 className="comentator-name">
                                John Smith
                            </h4>
                            <span>Marketing Director at XYZ Corp</span>
                        </div>
                    </div>
                   
                </div>
                <div className="carousel-switcher">
                    <button className="arrow-left">
                        <Image
                            src={arrowLeft}
                            width={20}
                            height={30}
                            alt="arrow left"
                        />
                    </button>
                    <button className="carousel-point">
                        <Image
                            src={activeCarouselPoint}
                            width={14}
                            height={14}
                            alt="point"
                        />
                    </button>
                    <button className="carousel-point">
                        <Image
                            src={inactiveCarouselPoint}
                            width={14}
                            height={14}
                            alt="point"
                        />
                    </button>
                    <button className="carousel-point">
                        <Image
                            src={inactiveCarouselPoint}
                            width={14}
                            height={14}
                            alt="point"
                        />
                    </button>
                    <button className="carousel-point">
                        <Image
                            src={inactiveCarouselPoint}
                            width={14}
                            height={14}
                            alt="point"
                        />
                    </button>
                    <button className="carousel-point">
                        <Image
                            src={inactiveCarouselPoint}
                            width={14}
                            height={14}
                            alt="point"
                        />
                    </button>
                    <button className="arrow-right">
                        <Image
                            src={arrowRight}
                            width={20}
                            height={25}
                            alt="arrow right"
                        />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Testimonials;