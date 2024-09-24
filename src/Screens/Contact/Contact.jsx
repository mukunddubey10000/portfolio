import React from 'react'
import './Contact.css'
import linkedin from '../../assets/LinkedIn.png'
import phone from '../../assets/Phone.png'
import email from '../../assets/Email.png'

const Contact = () => {
    return (
        <div className='Contact-Container'>
            <div className='Contact-left-container'>
                <span>Liked the resume? Get in touch</span>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: '3rem', gap: '2rem' }}>
                    <img src={linkedin} height={60} width={60} onClick={() => window.open("https://www.linkedin.com/in/mukund-dubey-2154341ab/")} />
                    <img src={phone} height={60} width={60} onClick={() => window.open("tel:9731768928")} />
                    <img src={email} height={60} width={60} onClick={() => window.open("mailto:mukunddubey10000@gmail.com")} />
                </div>
            </div>
            {/* <div className='Contact-right-container'>
            </div> */}
        </div >
    )
}

export default Contact