import React from "react";
import './team.scss';
import Image from "next/image";
import socialIcon from './social-icon.svg'
import teamImage1 from './team-image1.jpg'
import teamImage2 from './team-image2.jpg'
import teamImage3 from './team-image3.jpg'
import teamImage4 from './team-image4.jpg'
import teamImage5 from './team-image5.jpg'
import teamImage6 from './team-image6.jpg'


const Team: React.FC = () => {
    return (
        <div className="team">
            <div className="topic-header">
                <div className="topic-header-label">
                    <h2>Team</h2>
                </div>
                <div>
                    <p>
                        Meet the skilled and experienced team behind our successful digital marketing strategies
                    </p>
                </div>
            </div>

            <div className="team-content">
                <div className="team-content-item">
                    <div className="team-content-item-header">
                        <Image
                            src={teamImage1}
                            width={106}
                            height={103}
                            alt="John Smith"
                        />
                        <div className="team-content-item-header-right">
                            <Image
                                src={socialIcon}
                                width={34}
                                height={34}
                                alt="social icon"
                            />
                            <div className="team-content-item-name">
                                <h4>John Smith</h4>
                                <p>CEO and Founder</p>
                            </div>
                        </div>                        
                    </div>
                    <div className="team-content-item-border"></div>
                    <p>
                        10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy
                    </p>                 
                </div>
                <div className="team-content-item">
                    <div className="team-content-item-header">
                        <Image
                            src={teamImage2}
                            width={106}
                            height={103}
                            alt="Jane Doe"
                        />
                        <div className="team-content-item-header-right">
                            <Image
                                src={socialIcon}
                                width={34}
                                height={34}
                                alt="social icon"
                            />
                            <div className="team-content-item-name">
                                <h4>Jane Doe</h4>
                                <p>Director of Operations</p>
                            </div>                            
                        </div>
                    </div>
                    <div className="team-content-item-border"></div>
                    <p>
                        7+ years of experience in project management and team leadership. Strong organizational and communication skills
                    </p>                 
                </div>
                <div className="team-content-item">
                    <div className="team-content-item-header">
                        <Image
                            src={teamImage3}
                            width={106}
                            height={103}
                            alt="Michael Brown"
                        />
                        <div className="team-content-item-header-right">
                            <Image
                                src={socialIcon}
                                width={34}
                                height={34}
                                alt="social icon"
                            />
                            <div className="team-content-item-name">
                                <h4>Michael Brown</h4>
                                <p>Senior SEO Specialist</p>
                            </div>
                        </div>
                    </div>
                    <div className="team-content-item-border"></div>
                    <p>
                        5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization
                    </p>                 
                </div>
                <div className="team-content-item">
                    <div className="team-content-item-header">
                        <Image
                            src={teamImage4}
                            width={106}
                            height={103}
                            alt="Emily Johnson"
                        />
                        <div className="team-content-item-header-right">
                            <Image
                                src={socialIcon}
                                width={34}
                                height={34}
                                alt="social icon"
                            />                            
                            <div className="team-content-item-name">
                                <h4>Emily Johnson</h4>
                                <p>PPC Manager</p>
                            </div>
                        </div>
                    </div>
                    <div className="team-content-item-border"></div>
                    <p>
                        3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis
                    </p>                 
                </div>
                <div className="team-content-item">
                    <div className="team-content-item-header">
                        <Image
                            src={teamImage5}
                            width={106}
                            height={103}
                            alt="Brian Williams"
                        />
                        <div className="team-content-item-header-right">
                            <Image
                                src={socialIcon}
                                width={34}
                                height={34}
                                alt="social icon"
                            />
                            <div className="team-content-item-name">
                                <h4>Brian Williams</h4>
                                <p>Social Media Specialist</p>
                            </div>
                        </div>
                    </div>
                    <div className="team-content-item-border"></div>
                    <p>
                        4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement
                    </p>                 
                </div>
                <div className="team-content-item">
                    <div className="team-content-item-header">
                        <Image
                            src={teamImage6}
                            width={106}
                            height={103}
                            alt="Sarah Kim"
                        />
                        <div className="team-content-item-header-right">
                            <Image
                                src={socialIcon}
                                width={34}
                                height={34}
                                alt="social icon"
                            />
                            <div className="team-content-item-name">
                                <h4>Sarah Kim</h4>
                                <p>Content Creator</p>
                            </div>
                        </div>
                    </div>
                    <div className="team-content-item-border"></div>
                    <p>
                        2+ years of experience in writing and editing <br/>
                        Skilled in creating compelling, SEO-optimized content for various industries
                    </p>                 
                </div>
            </div>
            <div className="team-content-button-container">
                <button>See all team</button>
            </div>
        </div>
    )
}

export default Team;