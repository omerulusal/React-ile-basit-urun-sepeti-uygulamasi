import React from 'react'

function CardImage({ image}) {


    return (
        <div className='card-img py-2'>
            <img src={image} className='card-img-top img-fluid rounded' alt="products" />
        </div>
    )
}

export default CardImage