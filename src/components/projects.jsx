import {useState}  from 'react'
import project1 from "../assets/image/loginproject1.PNG"
import project11 from "../assets/image/menuproject1.PNG"
import project12 from "../assets/image/geproject11.PNG"
import project13 from "../assets/image/geprojet12.PNG";
import project2 from "../assets/image/narshop1.PNG"
import project3 from "../assets/image/corproject1.PNG"
/****Fontawesome*****/
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearchPlus} from "@fortawesome/free-solid-svg-icons";
//popup
import {PopupboxManager,PopupboxContainer} from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";
//carousel
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";




const Projects = () => {
    /***Popup SupmtiProject*****/
    
    const openPopSupmti= () =>{
        setPopconfig({
            titleBar:{
                enable: true,
                text:"gameshop"
            },
            fadeIn:true,
            fadeInSpeed:500
         })
        const content=(
            <>
        <Carousel className="cr"   >
            <div className="pop">
                <img className="project-image-popupbox" src={project1} alt="Supmti inscription"/>
               
            </div>
            <div className="pop">
                <img className="project-image-popupbox" src={project11} alt="Supmti inscription"/>
            </div>
            <div className="pop">
                <img className="project-image-popupbox" src={project12} alt="Supmti inscription"/>
                
            </div>
            <div className="pop">
                <img className="project-image-popupbox" src={project13} alt="Supmti inscription"/>
                
            </div>
            
        </Carousel>
        <p className="par"> totam mollitia fugit a quae? Veritatis corrupti amet ex. Odit dolor nemo exercitationem dolorem repellendus?</p>
            <a className="hyper-link" onClick={()=>window.open("https://github.com/zakariaeNasri")}>Github</a>
        </>
            )
        
        PopupboxManager.open({content})
    }
   
   /*****Popup Gameshop*****/
   const openPopGameshop=()=>{
    setPopconfig({
        titleBar:{
            enable: true,
            text:"Supmti"
        },
        fadeIn:true,
        fadeInSpeed:500
     })
    const content=(
        <>
        <Carousel className="cr"   >
            <div className="pop">
                <img className="project-image-popupbox" src={project2} alt="Supmti inscription"/>
               
            </div>
            <div className="pop">
                <img className="project-image-popupbox" src={project2} alt="Supmti inscription"/>
            </div>
            <div className="pop">
                <img className="project-image-popupbox" src={project2} alt="Supmti inscription"/>
                
            </div>
            
        </Carousel>
        <p className="par"> totam mollitia fugit a quae? Veritatis corrupti amet ex. Odit dolor nemo exercitationem dolorem repellendus?</p>
            <a className="hyper-link" onClick={()=>window.open("https://github.com/zakariaeNasri")}>Github</a>
        </>
        )
    
    PopupboxManager.open({content})
}

/***********Covid awarness popup*****/
const openPopCovid=()=>
    {
        setPopconfig({
            titleBar:{
                enable: true,
                text:"Covid Web App"
            },
            fadeIn:true,
            fadeInSpeed:500
         })
        
        const content=(<>
            <img className="project-image-popupbox" src={project3} alt="In-person Learning"/>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque ad illo reprehenderit expedita aut modi, totam mollitia fugit a quae? Veritatis corrupti amet ex. Odit dolor nemo exercitationem dolorem repellendus?</p>
            <a className="hyper-link" onClick={()=>window.open("https://github.com/zakariaeNasri")}>Github</a>
            </>
        )
    
        PopupboxManager.open({content})
    }   
    const [popconfig,setPopconfig]=useState({})
    
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
                    <div className="project-image-box" onClick={openPopCovid} >
                        <img className="project-image" src={project3} alt=""/>
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="project-icon" icon={faSearchPlus}/>
                       
                    </div>
                </div>

            </div>
            <PopupboxContainer {...popconfig}/>
            
            
            
        </div>
        
    )
}
export default Projects
