import React from 'react'
import './section.scss'

const Section = ({model, showModel, title, hasTax, buttonText, hasWhiteButton, hasTestDrive}) => {
    return (
        <><div>
            <div className={`sectTextOverlay__${model} ${showModel && `gonZo`}`}>
                <h1>{title}</h1>
                <div className='modelButtons'>
                    <button className='greyButton'>{buttonText}</button>
                    {hasWhiteButton && <div className='space'></div>}
                    {hasWhiteButton && <button className='whiteButton'>AVAILABLE INVENTORY</button>}
                </div>
            </div>
            <section className={`spacing__${model}`}></section>
        </div>
        </>
    )
}

export default Section
