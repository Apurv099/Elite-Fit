import React from 'react'
import Button from './Button'

export default function Hero() {
    return (
        <div className='hero'>
            <div className='hero__heading-container'>
                <p>IT'S TIME TO GET</p>
                <h1 className='hero__title'>Swole<span className='hero__accent'>normous</span></h1>
            </div>
            <p className='hero__description'>I hereby acknowledgement that I may become <span className='hero__description-accent'>unbelievably swolenormous</span> and accept all risks of becoming the local <span className='hero__description-accent'>mass montrosity</span>, afflicted with severe body dismorphia, unable to fit through doors.</p>
            <Button func={() => {
                window.location.href = '#generate'
            }} text={"Accept & Begin"}></Button>
        </div>
    )
}
