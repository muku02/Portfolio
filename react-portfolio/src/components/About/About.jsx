import React from 'react';
import { getImageUrl } from '../../utils';
import styles from './About.module.css';

export const About = () => {
    return (
        <section className={styles.container} id='about'>
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img src={getImageUrl("/about/aboutImage.png")}  
                alt='Me working'
                className={styles.aboutImg}
                />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("/about/cursorIcon.png")} 
                        alt='cursor Icon'
                        />
                        <h3>Software Developer</h3>
                        <p>
                            I'm a Software Developer with experience in building scalable and optimized applicatiions
                        </p>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("/about/serverIcon.png")} 
                        alt='server Icon'
                        />
                        <h3>Backend Developer</h3>
                        <p>
                            I'm a Backend Developer with experience in building fast and efficient APIs
                        </p>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("/about/dbIcon.png")} 
                        alt='DB Icon'
                        />
                        <h3>DB & Cloud Developer</h3>
                        <p>
                            I'm a Database and Cloud Developer with experience in Database design, Development, optimization and effectively utilizing AWS cloud services like EC2, S3 and AWS bedrock
                        </p>
                    </li>
                </ul>
            </div>
        </section>
    );
};