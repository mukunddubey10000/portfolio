import React from 'react'
import './Navbar.css'
import { setCursorVariant } from '../Mouse/mouseUtils'
import store, { useAppSelector } from '../store'

const Navbar = ({ }) => {

    const cursorVariant = useAppSelector(state => state?.mouse?.cursorVariant);
    const handleMouseEnter = () => {
        return store.dispatch(setCursorVariant("text"));
    }
    const handleMouseLeave = () => {
        return store.dispatch(setCursorVariant("default"));
    }

    return (
        <div className='Navbar-container' onMouseEnter={() => handleMouseEnter()} onMouseLeave={() => handleMouseLeave()}>
            <span onClick={() => window.scrollTo({ top: document.querySelector('#Home'), behavior: 'smooth' })}>Home</span>
            <span onClick={() => window.scrollTo({ top: document.querySelector('#Experience'), behavior: 'smooth' })}>Experience</span>
            <span>Projects</span>
            <span>Achievements</span>
            <span>Contact</span>
        </div>
    )
}

export default Navbar