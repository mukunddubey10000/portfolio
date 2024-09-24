import React, { useState } from 'react'
import './Accordion.css'
import down_arrow from '../../assets/down_arrow.png'

const Accordion = ({ Parent, Children, value, id, ...props }) => {
    const [isOpened, setIsOpened] = useState(false);

    return (
        <div className='Accordion-Container' onClick={() => setIsOpened(prev => !prev)}>
            <div className='parent-container'>
                <Parent />
                <img className={`${isOpened ? "up" : "down"}_arrow`} src={down_arrow} />
            </div>
            <div className={`accordion-child-${isOpened ? 'opened' : 'closed'}`}>
                <Children />
            </div>
        </div>
    )
}

export default Accordion