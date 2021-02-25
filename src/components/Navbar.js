import React from "react";
import ndit from "../logo_transparent.png";
//react fontawsome import
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
           <a className="navbar-brand" href="#"><img className="logo" src={ndit} alt="logo"/></a>
           <h3 className="h3">New Digital information technologie</h3>
            <div className="container">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
         aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <FontAwesomeIcon icon={faBars} style={{color:"#bff"}}/>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About me</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>
                    </ul>
                </div>
            </div>
        </nav>
        )
}

export default Navbar