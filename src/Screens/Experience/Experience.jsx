import React from 'react'
import './Experience.css'
import Accordion from '../../Components/Accordion/Accordion'

const Experience = () => {
    const cardsTitle = ["Boost Order", "Flipkart SuperCoins", "Coin Social Sentiment Tracker", "Realtime Rates"];
    const Children_component_mapper = {
        "Boost Order": (<div className='accordion-description-container'>
            <div style={{ height: "0.35rem" }} />
            <span className='accordion-description'>A simplified version of Crypto Futures trading with long positions.</span>
            <span className='accordion-description'>Features such as auto-exit, manual exit, realtime updates,  portfolio, orders & history section, invoice download, performance improvements etc</span>
            <span className='accordion-description'>Max trading user retention achieved over 77%, traded volume in first ~1.5 months with 1k experimental users reached INR 1.5Cr+. Currently made live to {'>'}50k users.</span>
        </div>),

        "Flipkart SuperCoins": (
            <div className='accordion-description-container'>
                <div style={{ height: "0.35rem" }} />
                <span className='accordion-description'>Integration of flipkart supercoins to enable users redeem crypto vouchers against their supercoin balance.</span>
            </div>
        ),

        "Coin Social Sentiment Tracker": (
            <div className='accordion-description-container'>
                <div style={{ height: "0.35rem" }} />
                <span className='accordion-description'>
                    Individual assets sentiment analysis to show users what other peopl think of that crypto.
                </span>
                <span className='accordion-description'>
                    Achieved 12% user retention.
                </span>
            </div>
        ),

        "Realtime Rates": (
            <div className='accordion-description-container'>
                <div style={{ height: "0.35rem" }} />
                <span className='accordion-description'>
                    Increased performance of app to handle rate updates from 1 minute to 1 second to make prices realtime throughout the
                    app which uses graphQL subscriptions accounting to 98.33% improvement.
                </span>
            </div>
        )
    }

    return (
        <div className='Experience-Container' id="Experience">
            <div className='card-container-experience'>
                <div className='left-container-experience'>
                    <span>SDE 1, Coinswitch</span>
                    <span>Backend For Frontend(BFF) architecture, also known as Server Driven UI.</span>
                    <span>Used NewRelic for on-call purposes.</span>
                    <div style={{ marginTop: '1rem' }} />
                    {
                        cardsTitle.map(ele => {
                            const Parent = () => <span>{ele}</span>
                            const Children = () => Children_component_mapper[ele]
                            return <Accordion Parent={Parent} Children={Children} id={"Boost"} />
                        })
                    }
                </div>
                <div className='right-container-experience'>
                    {[..."EXPERIENCE".split('')].map(character => <span>{character}</span>)}
                </div>
            </div>
        </div>
    )
}

export default Experience