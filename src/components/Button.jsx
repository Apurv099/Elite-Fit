import React from 'react'

export default function Button(props) {
    const { text, func } = props
    return (
        <button onClick={func} className='button'>
            <p>{text}</p>
        </button>
    )
}
