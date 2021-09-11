import React from 'react'
import Rating from '../Rating/Rating'

export default function DriverCard({ name, rating, img, car }) {
    return (
        <div className="driverCard">
            <div className="driverPhot">
                <img src={img} alt={name} />
            </div>
            <div className="driverDetails">
                <p>{name}</p>
                <p><Rating>{rating}</Rating></p>
                <p>{car['model']} - {car['licensePlate']}</p>
            </div>
        </div>
    )
}