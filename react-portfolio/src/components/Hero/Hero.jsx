import React from "react";
import { getImageUrl } from "../../utils";
import styles from './Hero.module.css';

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Mukunthan</h1>
                <p className={styles.description}>
                    I'm a Software Developer with experience in Java, React, AWS, MySQL. 
                    Reach out to me if you'd like to connect!
                </p>
                <a href="https://www.linkedin.com/in/mukunthan-sriram-balaji/" className={styles.contactBtn}>Contact me</a>
            </div>
            <img src={getImageUrl("/image/hero.png")} alt="Image of me" className={styles.heroImg}/>
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    );
};