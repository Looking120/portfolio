import React from 'react';
import './service.css';

const Service = () => {
    return (
        <section className="section__skills section" id="skills">
            <h2 className="section__title">Services</h2>
            <span className="section__subtitle">offers for my services</span>

            <div className="services-container container grid" id="container">
                <div className="services-contain">
                    <div>
                        <i className="uil uil-web-grid service__icon"></i>
                        <h3 className="services-title">Products <br /> Designer</h3>
                    </div>

                    <span className="services-button">More
                        <i className="uil uil-arrow-right service-button-icon"></i>
                    </span>
                    <div className="services-modal">
                        <div className="services-modal-items">
                            <i className="uil uil-times services-modal-close"></i>

                            <h3 className="services-modal-title">Products Designer</h3>
                            <p className="services-modal-description">
                                With over a year of experience in the IT field, I have just completed my academic year. 
                                I am now ready to put my skills to the service of various clients and explore new professional opportunities.
                            </p>

                            <ul className="services-modal-services grid">
                                <li className="services-modal-services">
                                    <i className="uil uil-check-circle  services__modal-icon"></i>
                                    <p className="service-modal-info">
                                        I develope the user interface
                                    </p>
                                </li>

                                <li className="services-modal-service ">
                                    <i className="uil uil-check-circle  services__modal-icon"></i>
                                    <p className="service-modal-info">
                                        Web page development
                                    </p>
                                </li>

                                <li className="services-modal-service ">
                                    <i className="uil uil-check-circle  services__modal-icon"></i>
                                    <p className="service-modal-info">
                                        I create ux element interface
                                    </p>
                                </li>

                                <li className="services-modal-service  ">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="service-modal-info">
                                        Design an mockups
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services-contain">
                    <div>
                        <i className="uil uil-arrow service__icon"></i>
                        <h3 className="services-title">Ui/Ux <br /> Designer</h3>
                    </div>

                    <span className="services-button">More
                        <i className="uil uil-arrow-right service-button-icon"></i>
                    </span>
                    <div className="services-modal">
                        <div className="services-modal-items">
                            <i className="uil uil-times services-modal-close"></i>

                            <h3 className="services-modal-title">Ui/Ux Designer</h3>
                            <p className="services-modal-description">
                                With over a year of experience in the IT field, I have just completed my academic year. 
                                I am now ready to put my skills to the service of various clients and explore new professional opportunities.
                            </p>

                            <ul className="services-modal-service grid">
                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle"></i>
                                    <p className="service-modal-info">
                                        I develope the user interface
                                    </p>
                                </li>

                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle"></i>
                                    <p className="service-modal-info">
                                        Web page development
                                    </p>
                                </li>

                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle"></i>
                                    <p className="service-modal-info">
                                        I create ux element interface
                                    </p>
                                </li>

                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle"></i>
                                    <p className="service-modal-info">
                                        Design an mockups
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="services-contain">
                    <div>
                        <i className="uil uil-edit service__icon"></i>
                        <h3 className="services-title">Visual <br /> Designer</h3>
                    </div>

                    <span className="services-button">More
                        <i className="uil uil-arrow-right service-button-icon"></i>
                    </span>
                    <div className="services-modal">
                        <div className="services-modal-items">
                            <i className="uil uil-times services-modal-close"></i>

                            <h3 className="services-modal-title">Visual Designer</h3>
                            <p className="services-modal-description">
                                With over a year of experience in the IT field, I have just completed my academic year. 
                                I am now ready to put my skills to the service of various clients and explore new professional opportunities.
                            </p>

                            <ul className="services-modal-service grid">
                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle"></i>
                                    <p className="service-modal-info">
                                        I develope the user interface
                                    </p>
                                </li>

                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle"></i>
                                    <p className="service-modal-info">
                                        Web page development
                                    </p>
                                </li>

                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle"></i>
                                    <p className="service-modal-info">
                                        I create ux element interface
                                    </p>
                                </li>

                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle"></i>
                                    <p className="service-modal-info">
                                        Design an mockups
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                
            </div>
        </section>
    );
}

export default Service;