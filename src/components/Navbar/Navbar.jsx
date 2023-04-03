
import React from 'react';
import "./Navbar.scss";
import logo from "../../assets/images/cmong-dev-logo.jpg"

const Navbar = () => {
  return (
    <nav className="app__navbar">
        <div className="app__navbar-logo">
            <img src={logo} alt="logo" />
        </div>
        <ul className="app__navbar-links">
            {["Home", "About", "Skills", "Portfolio", "Contact"].map((element) => (
                <li className="app__flex p-text" style={{listStyleType: "none"}}key={`link-${element}`}>
                    <div />
                    <a href={`#${element}`}>{element}</a>
                </li>
            ))}
        </ul>
        {/*We need to account for mobile devices by having a hamburger menu which pops out when we click on it at smaller screen widths*/}
        <div className="app__navbar-menu">

        </div>
    </nav>
    
  )
};

export default Navbar;