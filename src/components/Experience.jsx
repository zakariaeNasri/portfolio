import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'

const Experience = () => {
    return (
        <div className="experience">
            <div className="d-flex justify-content-center my-5">
                <h1>EXPERIENCE</h1>
            </div>
            <div className="container experience-wrapper">
                <div className="timeline-block timeline-block-right">
                    <div className="marker">
                    </div>
                        <div className="timeline-content">
                            <ScrollAnimation animateIn="animate__fadeInRight" animateOut="animate__fadeOutRight">

                            <h3>2017-2018</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                               Harum dolore provident eius nostrum dignissimos praesentium,
                               illo similique incidunt sapiente minus
                               accusantium explicabo assumenda itaque
                               earum, expedita illum fugit, vel ratione!
                            </p>
                            </ScrollAnimation>
                        </div>
                </div>
                {/************** */}
                <div className="timeline-block timeline-block-left">
                    <div className="marker">
                    </div>
                        <div className="timeline-content">
                        <ScrollAnimation animateIn="animate__fadeInLeft" animateOut="animate__fadeOutLeft">

                            <h3>2018-2019</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                               Harum dolore provident eius nostrum dignissimos praesentium,
                               illo similique incidunt sapiente minus
                               accusantium explicabo assumenda itaque
                               earum, expedita illum fugit, vel ratione!
                            </p>
                        </ScrollAnimation>
                        </div>
                </div>
                {/************** */}
                <div className="timeline-block timeline-block-right">
                    <div className="marker">
                    </div>
                        <div className="timeline-content">
                        <ScrollAnimation animateIn="animate__fadeInRight" animateOut="animate__fadeOutRight">

                            <h3>2019-2020</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                               Harum dolore provident eius nostrum dignissimos praesentium,
                               illo similique incidunt sapiente minus
                               accusantium explicabo assumenda itaque
                               earum, expedita illum fugit, vel ratione!
                            </p>
                        </ScrollAnimation>
                        </div>
                </div>
                {/*************** */}
                <div className="timeline-block timeline-block-left">
                    <div className="marker">
                        </div>
                        <div className="timeline-content">
                        <ScrollAnimation animateIn="animate__fadeInLeft" animateOut="animate__fadeOutLeft">

                            <h3>2020-2021</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                               Harum dolore provident eius nostrum dignissimos praesentium,
                               illo similique incidunt sapiente minus
                               accusantium explicabo assumenda itaque
                               earum, expedita illum fugit, vel ratione!
                            </p>
                        </ScrollAnimation>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Experience
