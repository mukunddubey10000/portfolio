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
            <li><a href="#Home">Home</a></li>
            <li><a href="#Experience">Experience</a></li>
            <li><a href="#Projects">Projects</a></li>
            <li><a href="#Achievements">Achievements</a></li>
            <li><a href="#Contact">Contact</a></li>
        </div>
    )
}

export default Navbar