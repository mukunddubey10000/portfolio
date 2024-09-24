import React from 'react'
import './Hero.css'
import html_icon from '../assets/html_icon.png'
import css_icon from '../assets/css_icon.png'
import graphql_icon from '../assets/graphql_icon.png'
import js_icon from '../assets/js_icon.png'
import react_icon from '../assets/react_icon.png'
import hero_background from '../assets/background.jpg'
import store from '../store'
import { setCursorVariant } from '../Mouse/mouseUtils'

function Hero() {
    const handleMouseEnter = () => {
        return store.dispatch(setCursorVariant("intro_text"));
    }
    const handleMouseLeave = () => {
        return store.dispatch(setCursorVariant("default"));
    }

    return (
        <>
            <img
                className='hero-background-image'
                src="https://img.freepik.com/premium-vector/beautiful-night-landscape-with-pine-forest-silhouette-moon_116220-63.jpg?w=996"
                // src="https://img.freepik.com/free-vector/silhouette-shadow-forest-scene_1308-102219.jpg?t=st=1727121575~exp=1727125175~hmac=096079d6914521b9f7f1713671c5f73c0fad2cd1d364d2df777177a06800ebec&w=1060"
                // height={'80%'}
                // width={'100%'}
                style={{ opacity: 0.5 }}
            />
            <div className='Hero-Root-Container' id="Home">
                <div className='left-hero-container'>

                    <span className='intro-text' onMouseEnter={() => handleMouseEnter()} onMouseLeave={() => handleMouseLeave()}>Frontend React</span>
                    <span className='intro-text' onMouseEnter={() => handleMouseEnter()} onMouseLeave={() => handleMouseLeave()}>Developer</span>

                    <div style={{ marginTop: '1.25rem' }} />
                    <span className='intro-text-description'>
                        Hi I am Mukund Dubey working
                    </span>
                    <span className='intro-text-description'>
                        as a Front-end Developer
                    </span>
                    <span className='intro-text-description'>
                        at coinswitch.
                    </span>

                    <div style={{ marginTop: '2.25rem' }} />

                    <div className='tech-stack-container'>
                        <span className='tech-stack'>Tech Stack |</span>
                        <img src={html_icon} alt="HTML" />
                        <img src={css_icon} alt="CSS" />
                        <img src={js_icon} alt="JS" />
                        <img src={graphql_icon} alt="GraphQl" />
                        <img src={react_icon} alt="React" />
                    </div>
                </div>
                <div className='right-hero-container'>

                </div>
            </div >
        </>
    )
}

export default Hero
