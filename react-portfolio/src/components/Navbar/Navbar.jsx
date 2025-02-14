import React, {useState} from "react";

import { getImageUrl } from "../../utils.js";
import styles from "./Navbar.module.css"



export const Navbar = () =>{
    const[menuOpen, setMenuOpen] = useState(false);
    return (<nav className= {styles.navbar}>
        <a className = {styles.title} href = "/">Mukunthan Sriram Balaji</a>
        <div className= {styles.menu}>
            <img 
            className= {styles.menuBtn} 
            src= {menuOpen 
                ? getImageUrl("/nav/closeIcon.png") 
                : "/react-portfolio/assets/nav/ham.png"} 
            alt={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen(!menuOpen)}
            />
            <ul className= {`${styles.menuItems} ${menuOpen && styles.menuOpen}`}>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#experience">Experience</a>
                </li>
                <li>
                    <a href="#projects">Projects</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>
    </nav>);
};