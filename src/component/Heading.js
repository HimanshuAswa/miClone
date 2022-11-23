import React from 'react'
import "../style/Heading.css"

const Heading = ({text}) => {
    return (
        <div className='head'>
            <div></div>
            <p>{text}</p>
            <div></div>
        </div>
    )
}

export default Heading
