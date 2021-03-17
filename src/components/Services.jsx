import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faDesktop,faFileCode,faObjectUngroup,faMobile} from "@fortawesome/free-solid-svg-icons";
import ScrollAnimation from 'react-animate-on-scroll';

const Services = () => {
    return (
        <div className="services">
            <ScrollAnimation animateIn="animate__rollIn">

            <h1 className="py-5 Mys">My SErVICES</h1>
            </ScrollAnimation>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <ScrollAnimation animateIn="animate__fadeInLeft" animateOut="animate__fadeOutLeft">

                            <div className="box">
                                <div className="circle"><FontAwesomeIcon className="ico" icon={faObjectUngroup} size="2x" /></div>
                                <h3>Analyse and Conception</h3>
                                <p>It is the first thing i do when i begin a project.</p>
                            </div>
                            </ScrollAnimation>
                        </div>
                        {/*----------- */}
                        <div className="col-md-3 col-sm-6">
                        <ScrollAnimation animateIn="animate__fadeInLeft" animateOut="animate__fadeOutLeft">
                            <div className="box">
                            <div className="circle"><FontAwesomeIcon className="ico" icon={faFileCode} size="2x" /></div>
                                <h3>Web Development</h3>
                                <p>Your website will be build with New technologies</p>
                            </div>
                         </ScrollAnimation>
                        </div>
                        {/*-------------- */}
                        <div className="col-md-3 col-sm-6">
                            <ScrollAnimation animateIn="animate__fadeInRight" animateOut="animate__fadeOutRight">
                            <div className="box">
                                <div className="circle"><FontAwesomeIcon className="ico" icon={faDesktop}/></div>
                                <h3>Desktop Apps</h3>
                                <p>The best Desktop app with design is here</p>
                            </div>
                            </ScrollAnimation>
                        </div>
                        {/*-----------------*/}
                        <div className="col-md-3 col-sm-6">
                            <ScrollAnimation animateIn="animate__fadeInRight" animateOut="animate__fadeOutRight">

                            <div className="box">
                                <div className="circle"><FontAwesomeIcon className="ico" icon={faMobile}/></div>
                                <h3>Mobile Apps</h3>
                                <p>Mobile app is our speciality Too </p>
                            </div>
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>
            
            
        </div>
    )
}

export default Services
