import React from "react";
import './case-studies.scss'
import Image from "next/image";
import Link from "next/link";
import linkIcon from './link-icon.svg'
const CaseStudies: React.FC = () => {
    return (
        <div className="case-studies">
            <div className="topic-header">
                <div className="topic-header-label">
                    <h2> Case Studies</h2>
                </div>
                <div>
                    <p>
                        Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies
                    </p>
                </div>
            </div> 

            <div className="case-studies-content">
                <div className="case-studies-content-item">
                    <p>
                    For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.
                    </p>
                    <Link className="case-studies-content-cell-link" href="#">
                        <span>Learn more</span>
                        <Image
                        src={linkIcon}
                        width={28}
                        height={28}
                        alt="link icon"                        
                        />
                    </Link>
                </div>
                <div className="case-studies-content-border"></div>
                <div className="case-studies-content-item">
                    <p>
                    For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.
                    </p>
                    <Link className="case-studies-content-cell-link" href="#">
                        <span>Learn more</span>
                        <Image
                        src={linkIcon}
                        width={28}
                        height={28}
                        alt="link icon"                        
                        />
                    </Link>
                </div>
                <div className="case-studies-content-border"></div>
                <div className="case-studies-content-item">
                    <p>
                    For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.
                    </p>
                    <Link className="case-studies-content-cell-link" href="#">
                        <span>Learn more</span>
                        <Image
                        src={linkIcon}
                        width={28}
                        height={28}
                        alt="link icon"                        
                        />
                    </Link>
                </div>
            </div>           
        </div>
    )
}

export default CaseStudies;