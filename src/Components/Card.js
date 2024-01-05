import React from 'react';
import {  motion } from "framer-motion";

import { Link } from "react-router-dom";

import "../Styles/Scroll.css"

function Card({ foodName, hueA, hueB, link }) {
    const cardVariants = {
        offscreen: {
            y: 200
        },
        onscreen: {
            y: 50,
            rotate: -10,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 0.8
            }
        }
    };

    const hue = (h) => `hsl(${h}, 100%, 50%)`;
    const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;

    return (

        <motion.div
            className="card-container"
            initial="offscreen"
            animate="onscreen" 
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
        >

            <div style={{}}>

                <motion.div className={`card ${foodName.replace(/ /g, "")}`} variants={cardVariants} style={{ marginBottom: '210px' }}>
                    <Link to={`/${foodName}`} style={{ textDecoration: "none", color: 'white', padding: '20px' }}>
                        <div style={{ marginBottom: '-10px' }}>    {foodName}   </div>
                    </Link>
                </motion.div>

            </div>

        </motion.div>

    );
}

export default Card;