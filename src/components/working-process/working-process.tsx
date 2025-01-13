import React from "react";
import './working-process.scss'
import Image from "next/image";
import minusIcon from './minus-icon.svg';
import plusIcon from './plus-icon.svg';

const WorkingProcess: React.FC = () => {
    return (
        <div className="working-process">
            <div className="topic-header">
                <div className="topic-header-label">
                    <h2>
                        Our Working Process 
                    </h2>
                </div>
                <div>
                    <p className="w-72">
                        Step-by-Step Guide to Achieving Your Business Goals
                    </p>
                </div>
            </div>

            <div className="working-process-content">
                <div className="working-process-content-item active-content">
                    <div className="working-process-content-item-header">
                        <div className="working-process-content-item-header-label">
                            <span className="number">01</span>
                            <h3>Consultation</h3>    
                        </div>
                        <button>
                            <Image
                                src={plusIcon}
                                width={58}
                                height={58}
                                alt="show more"                            
                            />
                        </button>
                    </div>
                    <div className="working-process-content-item-border"></div>
                    <div className="working-process-content-item-text">
                        <p>
                            During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.
                        </p>
                    </div>
                </div>
                <div className="working-process-content-item inactive-content">
                    <div className="working-process-content-item-header">
                        <div className="working-process-content-item-header-label">
                            <span className="number">02</span>
                            <h3>Consultation</h3>
                        </div>
                        <button>
                            <Image
                                src={minusIcon}
                                width={58}
                                height={58}
                                alt="show more"                            
                            />
                        </button>
                    </div>
                    <div className="working-process-content-item-border"></div>
                    <div className="working-process-content-item-text">
                        <p>
                            During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.
                        </p>
                    </div>
                </div>
                <div className="working-process-content-item inactive-content">
                    <div className="working-process-content-item-header">
                        <div className="working-process-content-item-header-label">
                            <span className="number">03</span>
                            <h3>Implementation</h3>
                        </div>
                        <button>
                            <Image
                                src={minusIcon}
                                width={58}
                                height={58}
                                alt="show more"                            
                            />
                        </button>
                    </div>
                    <div className="working-process-content-item-border"></div>
                    <div className="working-process-content-item-text">
                        <p>
                            During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.
                        </p>
                    </div>
                </div>
                <div className="working-process-content-item inactive-content">
                    <div className="working-process-content-item-header">
                        <div className="working-process-content-item-header-label">
                            <span className="number">04</span>
                            <h3>Monitoring and Optimization</h3>
                        </div>
                        <button>
                            <Image
                                src={minusIcon}
                                width={58}
                                height={58}
                                alt="show more"                            
                            />
                        </button>
                    </div>
                    <div className="working-process-content-item-border"></div>
                    <div className="working-process-content-item-text">
                        <p>
                            During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.
                        </p>
                    </div>
                </div>
                <div className="working-process-content-item inactive-content">
                    <div className="working-process-content-item-header">
                        <div className="working-process-content-item-header-label">
                            <span className="number">05</span>
                            <h3>Reporting and Communication</h3>
                        </div>
                        <button>
                            <Image
                                src={minusIcon}
                                width={58}
                                height={58}
                                alt="show more"                            
                            />
                        </button>
                    </div>
                    <div className="working-process-content-item-border"></div>
                    <div className="working-process-content-item-text">
                        <p>
                            During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.
                        </p>
                    </div>
                </div>
                <div className="working-process-content-item inactive-content">
                    <div className="working-process-content-item-header">
                        <div className="working-process-content-item-header-label">
                            <span className="number">06</span>
                            <h3>Continual Improvement</h3>
                        </div>
                        <button>
                            <Image
                                src={minusIcon}
                                width={58}
                                height={58}
                                alt="show more"                            
                            />
                        </button>
                    </div>
                    <div className="working-process-content-item-border"></div>
                    <div className="working-process-content-item-text">
                        <p>
                            During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkingProcess;