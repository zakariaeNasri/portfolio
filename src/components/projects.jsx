import React from 'react'
import project1 from "../assets/image/loginproject1.PNG"
import project2 from "../assets/image/narshop1.PNG"
import project3 from "../assets/image/corproject1.PNG"
/****Fontawesome*****/
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearchPlus} from "@fortawesome/free-solid-svg-icons";
//popup
import {PopupboxManager,PopupboxContainer} from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const projects = () => {
    /***Popup SupmtiProject*****/
    const openPopSupmti=()=>{
        const content=(<>
            <img className="project-image-popupbox" src={project1} alt="Supmti inscription"/>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque ad illo reprehenderit expedita aut modi, totam mollitia fugit a quae? Veritatis corrupti amet ex. Odit dolor nemo exercitationem dolorem repellendus?</p>
            <a className="hyper-link" onClick={()=>window.open("https://github.com/zakariaeNasri")}>Github</a>
            </>
            )
        
        PopupboxManager.open({content})
    }
   const popconfigsupmti={
       titleBar:{
           enable: true,
           text:"Supmti sign in app"
       },
       fadeIn:true,
       fadeInSpeed:500
   }
   /*****Popup Gameshop*****/
   const openPopGameshop=()=>{
    const content=(<>
        <img className="project-image-popupbox" src={project2} alt="Gameshop Web App "/>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque ad illo reprehenderit expedita aut modi, totam mollitia fugit a quae? Veritatis corrupti amet ex. Odit dolor nemo exercitationem dolorem repellendus?</p>
        <a className="hyper-link" onClick={()=>window.open("https://github.com/zakariaeNasri")}>Github</a>
        </>
        )
    
    PopupboxManager.open({content})
}
const popconfigGameshop={
   titleBar:{
       enable: true,
       text:"Gameshop web app"
   },
   fadeIn:true,
   fadeInSpeed:500
}
/***********Covid awarness popup****/
const openPopCovid=()=>{
    const content=(<>
        <img className="project-image-popupbox" src={project3} alt="In-person Learning"/>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque ad illo reprehenderit expedita aut modi, totam mollitia fugit a quae? Veritatis corrupti amet ex. Odit dolor nemo exercitationem dolorem repellendus?</p>
        <a className="hyper-link" onClick={()=>window.open("https://github.com/zakariaeNasri")}>Github</a>
        </>
        )
    
    PopupboxManager.open({content})
}
const popconfigCovid={
   titleBar:{
       enable: true,
       text:"Covid Awareness web app"
   },
   fadeIn:true,
   fadeInSpeed:500
}
    
    return (
        <div className="portfolio-wraper">
            <div className="container">
             <h1 className="text-uppercase text-center py-5">Projects</h1>
                <div className="image-box-wraper row justify-content-center">
                    <div className="project-image-box" onClick={openPopSupmti} >
                        <img className="project-image" src={project1} alt=""/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="project-icon" icon={faSearchPlus}/>
                    </div>
                    {/*********/}
                    <div className="project-image-box" onClick={openPopGameshop} >
                        <img className="project-image" src={project2} alt=""/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="project-icon" icon={faSearchPlus}/>
                    </div>
                    {/**********/}
                    <div className="project-image-box" onClick={openPopCovid}>
                        <img className="project-image" src={project3} alt=""/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="project-icon" icon={faSearchPlus}/>
                    </div>
                </div>

            </div>
            <PopupboxContainer {...popconfigsupmti}/>
            <PopupboxContainer {...popconfigGameshop}/>
            <PopupboxContainer {...popconfigCovid}/>
        </div>
    )
}

export default projects
