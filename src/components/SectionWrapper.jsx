import React from 'react'

export default function SectionWrapper(props) {
    const { children, header, title, id } = props
    return (
        <section id={id} className='section'>
            <div className='section__header'>
                <p className='section__header-label'>{header}</p>
                <h2 className='section__title'>{title[0]} <span className='section__title-accent'>{title[1]}</span> {title[2]}</h2>
            </div>
            <div className='section__content'>
                {children}
            </div>
        </section>
    )
}
