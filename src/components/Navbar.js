import React from "react";
import PropTypes from "prop-types";
export default function Navbar(props) {
  return (
    <>
     <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link disabled" aria-current="page" href="#">
                  {props.home}
                </a>
              </li>          
            </ul>
            <div className="navbarSupportedContent colorPallets">
            <div className="black color-box" onClick={props.darkMode}></div>
            <div className="blue color-box" onClick={props.blueMode}></div>
            <div className="red color-box" onClick={props.redMode}></div>
            <div className="green color-box" onClick={props.greenMode}></div>
            <div className="white color-box" onClick={props.lightMode}></div>
         </div>
         </div>
          
         </div>
          
        
     </nav>
    </>
  );
}
Navbar.propTypes = {
  title: PropTypes.string,
};
