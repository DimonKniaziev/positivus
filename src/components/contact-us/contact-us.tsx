import React from "react";
import './contact-us.scss';
import illustration from "./Illustration.svg";
import Image from "next/image";

const ContactUs: React.FC = () => {
    return (
        <div className="contact-us">
            <div className="topic-header">
                <div className="topic-header-label">
                    <h2>Contact Us</h2>
                </div>
                <div>
                    <p>
                        {`Connect with Us: Let's Discuss Your Digital Marketing Needs`}
                    </p>
                </div>
            </div>
            <div className="contact-us-content">
                <div className="contact-form">
                    <div className="radio-container">
                        <input type="radio" id="say-hi-radio-button" name="option"/>
                        <label htmlFor="say-hi-radio-button"><p>Say Hi</p></label>
                        <input type="radio" id="get-a-quote-radio-button" name="option"/>
                        <label htmlFor="get-a-quote-radio-button"><p>Get a Quote</p></label>
                    </div>
                    <div className="name-input text-input">
                        <span>Name</span>
                        <input type="text" placeholder="Name"/>
                    </div>
                    <div className="email-input text-input">
                        <span>Email*</span>
                        <input type="text" placeholder="Email"/>
                    </div>
                    <div className="message-input text-input">
                        <span>Message*</span>
                        <textarea placeholder="Message"/>
                    </div>
                    <button>Send Message</button>
                </div>
                <Image
                    src={illustration}
                    width={691}
                    height={648}
                    alt="illustration"
                />
            </div>
        </div>
    );
}

export default ContactUs;