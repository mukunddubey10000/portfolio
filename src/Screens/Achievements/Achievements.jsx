import React from 'react'
import './Achievements.css'
import Accordion from '../../Components/Accordion/Accordion'
import leetcode_icon from '../../assets/leetcode_icon.png';
import codechef_icon from '../../assets/codechef_icon.png';
import icpc_icon from '../../assets/icpc_logo.png';

const Achievements = () => {
    const achievements = [
        "Best Intern 2023 @ Coinswitch",
        "2x ACM ICPC Regionals",
        "Leetcode",
        "CodeChef"
    ]
    const achievements_description = {
        "2x ACM ICPC Regionals": (
            <div className='accordion-description-container'>
                <span className='accordion-description'>
                    • Led a team of 3 and secured AIR 112, best rank of college in ICPC till date [Year 2021]
                </span>
                <span>
                    • Led a team of 3 and secured AIR 491 among 4300+ participating teams [Year 2020]
                </span>
            </div>)
    }
    const images = [undefined, icpc_icon, leetcode_icon, codechef_icon];

    return (
        <div id="Achievements">
            <div style={{ marginTop: '10rem' }} />
            <div className='Achievement-Container'>
                <div className='left-container-achievement'>

                </div>
                <div className='right-container-achievement'>
                    {achievements.map((ele, index) => {
                        const Parent = () => (<div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span>{ele}</span>
                            {images?.[index] && <img src={images[index]} height={30} width={'auto'} style={{ marginLeft: '15px' }} />}
                        </div>)
                        const Children = () => (<span>{achievements_description?.[ele]}</span>)
                        return (<Accordion Parent={Parent} Children={Children} />)
                    })}
                </div>
            </div>
        </div>
    )
}

export default Achievements