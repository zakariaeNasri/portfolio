import React from 'react'
import me from "../assets/image/image.jpg"


const Aboutme = () => {
    return (
        <>
            <div className="container cont py-5">
                <div className="row">
                    <div className="col-lg-6 col-xm-12">
                        <div className="photo-wrap mb-5">
                        <img className="profile-img" src={me} alt="Myphoto"></img>
                        </div>
                    </div>
                    <div className="bio col-lg-6 col-xm-12">
                        <h1 className="aboutmehead">About me</h1>
                        <p className="aboutmep">Hello ! , Im Zakariae , im Full-stack Web And Desktop Devlopper for 2 years.
                            Technologie i use is (HTML5, CSS3, Javascript ,ReactJs, Nodejs, Bootstrap, PHP , ADO.NET...).
                            I create responsive Websites that are displayed on all devices desktops and smartphones.
                            Off course before we begin developping any app ,landing page , business website or E-commerce ,
                            i need to have a ready-made project layout </p>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Aboutme
