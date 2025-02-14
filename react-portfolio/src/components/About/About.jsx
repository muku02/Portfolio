import React from 'react';
import { getImageUrl } from '../../utils';

export const About = () => {
    return (
        <section>
            <h2>About</h2>
            <div>
                <img src={getImageUrl("/about/aboutImage.png")}  
                alt='Me working'
                />
                <ul>
                    <li>
                        <img src={getImageUrl("/about/cursorIcon.png")} 
                        alt='cursor Icon'
                        />
                        <h3>Software Developer</h3>
                        <p>
                            I'm a Software Developer with experience in building scalable and optimized applicatiions
                        </p>
                    </li>
                </ul>
            </div>
        </section>
    );
};