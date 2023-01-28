import React from 'react';
import CardTitle from './CardTitle';
import CardInfo from './CardInfo';
import CardImage from './CardImage';




function Card({ baslik, bilgi, resim, onClick }) {


    return (
        <div className='card w-25 text-center mx-5 my-3' onClick={onClick}>
            <CardImage image={resim} />
            <div className="card-body">
                <CardTitle title={baslik} />
                <CardInfo info={bilgi} />
            </div>
        </div>
    )
}

export default Card