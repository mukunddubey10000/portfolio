import React, { useRef } from 'react'
import './Hero.css'
import html_icon from '../assets/html_icon.png'
import css_icon from '../assets/css_icon.png'
import graphql_icon from '../assets/graphql_icon.png'
import js_icon from '../assets/js_icon.png'
import react_icon from '../assets/react_icon.png'
import hero_background from '../assets/background.jpg'
import store from '../store'
import { setCursorVariant } from '../Mouse/mouseUtils'
import { useEffect } from 'react'

function Hero() {

    const backgroundRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                entry.target.classList.toggle("show", entry.isIntersecting);
            });
        });

        const background_observer = new IntersectionObserver((ele) => {
            ele.forEach(entry => entry.target.classList.toggle("show", entry.isIntersecting));
        })

        const animate_elements = document.querySelectorAll([".tech-stack-container"]); //select multiple
        animate_elements.forEach((ele) => observer.observe(ele));

        const animate_background = document.querySelector([".hero-background-image"]); //select single DOM ele
        background_observer.observe(animate_background);

        // Cleanup observer on unmount
        return () => {
            animate_elements.forEach((ele) => observer.unobserve(ele));
            background_observer.unobserve(animate_background);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (backgroundRef.current) {
                const scrollPosition = window.scrollY;
                const maxScroll = document.body.scrollHeight - window.innerHeight;
                const scrollFraction = scrollPosition / maxScroll;

                // Adjust the properties of the background image based on scroll position
                const scale = 1 + scrollFraction * 0.5; // Scale from 1 to 1.5
                const zoom = 100 + scrollFraction * 100; // Zoom from 100% to 150%
                const opacity = 0.5 + scrollFraction * 0.1; // Opacity from 0.5 to 1
                const blur = scrollFraction * 10; // Blur from 0 to 10px

                backgroundRef.current.style['background-size'] = `${zoom}%`;
                backgroundRef.current.style.opacity = `${opacity}`;
                backgroundRef.current.style.filter = `blur(${blur}px)`;
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup scroll event listener on unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

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
                // src="https://img.freepik.com/premium-vector/beautiful-night-landscape-with-pine-forest-silhouette-moon_116220-63.jpg?w=996"
                ref={backgroundRef}
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
                        <img className='html-logo' src={html_icon} alt="HTML" />
                        <img className='css-logo' src={css_icon} alt="CSS" />
                        <img className='js-logo' src={js_icon} alt="JS" />
                        <img className='graphql-logo' src={graphql_icon} alt="GraphQl" />
                        <img className='react-logo' src={react_icon} alt="React" />
                    </div>
                </div>
                <div className='right-hero-container'>

                </div>
            </div >
        </>
    )
}

export default Hero
