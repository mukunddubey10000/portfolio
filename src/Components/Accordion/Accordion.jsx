import React, { useState, useRef, useEffect } from 'react';
import './Accordion.css';
import down_arrow from '../../assets/down_arrow.png';

const Accordion = ({ Parent, Children, value, id, ...props }) => {
    const [isOpened, setIsOpened] = useState(false);
    const contentRef = useRef(null);

    useEffect(() => {
        if (isOpened && contentRef.current) {
            contentRef.current.style.maxHeight = `${contentRef.current.scrollHeight}px`;
        } else if (contentRef.current) {
            contentRef.current.style.maxHeight = '0px';
        }
    }, [isOpened]);

    return (
        <div className='Accordion-Container'>
            <div
                className='parent-container'
                onClick={() => setIsOpened(!isOpened)}
                role="button"
                aria-expanded={isOpened}
                aria-controls={`accordion-content-${id}`}
            >
                <Parent />
                <img className={`${isOpened ? "up" : "down"}_arrow`} src={down_arrow} alt="Toggle Accordion" />
            </div>
            <div
                id={`accordion-content-${id}`}
                ref={contentRef}
                className={`accordion-child ${isOpened ? 'opened' : 'closed'}`}
                aria-hidden={!isOpened}
            >
                <Children />
            </div>
        </div>
    );
};

export default Accordion;
