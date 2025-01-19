import React from "react";
import './get-proposal.scss';
import getProposal from './get-proposal-image.svg';
import Image from "next/image";

const GetProposal: React.FC = () => {
    return (
        <div className="get-proposal">
            <div className="get-proposal-content">
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
                src={getProposal}
                width={359}
                height={395}
                alt="contact us image"
            />
        </div>
    )
}

export default GetProposal;