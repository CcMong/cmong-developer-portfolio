
import React from 'react';
import "./Header.scss";
import { motion } from 'framer-motion';
import headerImage from "../../assets/images/about-me-mugshot.jpeg";
import circle from "../../assets/images/grey-circle-bg.jpg";

const Header = () => {
  return (
    <div className="app__header app__flex">
        <motion.div
        whileInView={{x: [-100,0], opacity: [0, 1]}}
        transition={{duration: 0.5}}
        className="app__header-info"
        >
            <div className='app__header-badge'>
                <div className='badge-cmp app__flex'>
                    <span>👋</span>
                    <div style={{marginLeft: 20 }}>
                        <p className='p-text'>
                            Hello, I am
                        </p>
                        <h1 className='header-text'>Charles Mong</h1>    
                    </div>
                </div>

                <div className='tag-cmp app__flex'>
                    <p className="p-text">Front-End Web Developer</p>
                </div>
            </div>            
        </motion.div>

        <motion.div
        whileInView={{opacity: [0, 1]}}
        transition={{duration: 0.5, delayChildren: 0.5}}
        className="app__header-img"
        >
            <img src={headerImage} alt="profile-bg"/>
            <motion.img
            whileInView={{scale: [0, 1]}}
            transition={{duration: 1, ease: "easeInOut"}}
            src={circle}
            alt="profile_circle"
            className="circular_bg"
            />            
        </motion.div>

        <motion.div
        variants={{
            whileInView: {
                scale: [0, 1], 
                opacity: [0, 1],
                transition: {
                    duration: 1, 
                    ease: "easeInOut"
                }
            }            
        }}
        whileInView={{scale: [0, 1], opacity: [0, 1], transition: {duration: 1, ease: "easeInOut"}}}
        className="app__header-circles"    
        >
            

        </motion.div>
        
    </div>
  )
}

export default Header