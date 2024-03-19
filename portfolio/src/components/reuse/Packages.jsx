import React from 'react'

const Packages = (props) => {
    return (
        <>
            <div className='price-card'>
                <h2>{props.title}</h2>
                <p>{props.detail}</p>
                <h5>{props.price}</h5>
            </div>
        </>
    )
}

export default Packages
