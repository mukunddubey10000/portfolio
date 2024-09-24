import React, { useEffect, useState } from 'react'
import './Mouse.css'
import { motion } from 'framer-motion';
import { useAppSelector } from '../store';
import { setCursorVariant } from './mouseUtils';

const Mouse = ({ }) => {

    const [position, setPosition] = useState({ x: 0, y: 0 });
    const cursorVariant = useAppSelector(state => {
        if (state.mouse.cursorVariant == 'intro_text')
            console.log(state);
        return state?.mouse?.cursorVariant
    });

    useEffect(() => {
        const handleMouseMovement = e => {
            setPosition({
                x: e.clientX,
                y: e.clientY
            });
        }
        window.addEventListener('mousemove', handleMouseMovement);

        return () => window.removeEventListener("mousemove", handleMouseMovement)
    }, []);

    const variants = {
        default: {
            x: position.x - 8,
            y: position.y - 8,
            height: 16,
            width: 16,
            borderRadius: 16,
            transition: {
                type: "smooth",
                duration: 0,
            },
            zIndex: 1000000000,
            position: 'fixed'
        },
        text: {
            height: 50,
            width: 50,
            x: position.x - 25,
            y: position.y - 25,
            borderRadius: 50,
            mixBlendMode: "difference",
            backgroundColor: "#30D7FB",
            transition: {
                type: "smooth", //without smooth there's a lagging behaviour
                duration: 0,
            },
            zIndex: 1000000000,
            position: 'fixed'
        },
        "intro_text": {
            height: 80,
            width: 80,
            x: position.x - 40,
            y: position.y - 40,
            borderRadius: 80,
            mixBlendMode: "difference",
            backgroundColor: "linear-gradient(#26283e, #255363)",
            transition: {
                type: "smooth", //without smooth there's a lagging behaviour
                duration: 0,
            },
            zIndex: 1000000000,
            position: 'fixed'
        }
    }

    return (
        <motion.div style={{
            position: 'absolute',
            backgroundColor: 'white',
            // height: 16,
            // width: 16,
            // borderRadius: 16,
            pointerEvents: 'none'
        }}
            variants={variants}
            animate={cursorVariant}
        />
    );
}

export default React.memo(Mouse)