
import React, { useState } from 'react';
import "./Navbar.scss";
import logo from "../../assets/images/cmong-dev-logo.jpg";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { easeOut, motion } from "framer-motion";

const Navbar = () => {
    
    const [toggle, setToggle] = useState(false);

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
            {/* <ul className="app__navbar-links">
                {["Home", "About", "Skills", "Portfolio", "Contact"].map((element) => (
                    <li key={element}>
                        <a href={`#${element}`}>{element}</a>
                    </li>
                ))}
            </ul> */}
            {/*We need to account for mobile devices by having a hamburger menu which pops out when we click on it at smaller screen widths. We will use Framer Motion for this*/}
            <div className="app__navbar-menu">
                <HiMenuAlt4 onClick={() => setToggle(true)}/>

                {/*If toggle is true, then we want the menu to pop out. It will be within a motion.div */}

                {toggle && (
                    <motion.div
                    whileInView={{x: [300, 0]}}
                    transition={{duration: 0.85, ease: "easeOut"}}>
                        {/*The "X" icon on the menu*/}
                        <HiX onClick={() => setToggle(false)}/>
                        <ul>                                          
                            {["Home", "About", "Skills", "Portfolio", "Contact"].map((element) => (
                            <li key={element}>
                                <div />
                                <a href={`#${element}`} >{element}</a>
                            </li>
                            ))}
                        </ul>

                    </motion.div>
                )}


            </div>
        </nav>
        
    )
};

export default Navbar;