import React from 'react';
import { getImageUrl } from '../../utils';
import styles from "./Contact.module.css";

export const Contact = () => {
    return(
        <footer className={styles.container}>
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Feel free to reach out!</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src= {getImageUrl("/contact/emailIcon.png")} alt="Email Icon" />
                    <a href="mailto:muks.mb02@gmail.com">muks.mb02@gmail.com</a>
                </li>

                <li className={styles.link}>
                    <img src= {getImageUrl("/contact/linkedinIcon.png")} alt="LinkedIn Icon" />
                    <a href="https://www.linkedin.com/in/mukunthan-sriram-balaji/">LinkedIn/Mukunthan-Sriram-Balaji</a>
                </li>

                <li className={styles.link}>
                    <img src= {getImageUrl("/contact/githubIcon.png")} alt="Github Icon" />
                    <a href="https://github.com/csx42/cs542-fall-23-assign3-Mukund0210">Github/Mukunthan-Sriram-Balaji</a>
                </li>
            </ul>
        </footer>
    );
}