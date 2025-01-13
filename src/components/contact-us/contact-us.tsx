import React from "react";
import './contact-us.scss';
import contactUsImage from './contact-us-image.svg';
import Image from "next/image";

const ContactUs: React.FC = () => {
    return (
        <div className="contact-us">
            <div className="contact-us-content">
                <h3>
                    Let’s make things happen
                </h3>
                <p>
                    Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.
                </p>
                <button>
                    Get your free proposal
                </button>
            </div>
            <Image
                src={contactUsImage}
                width={359}
                height={395}
                alt="contact us image"
            />
        </div>
    )
}

export default ContactUs;