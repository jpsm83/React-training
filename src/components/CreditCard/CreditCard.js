import React from 'react'

export default function CreditCard({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) {
    return (
        <div className="creditCard" style={{backgroundColor: bgColor, color: color}}>
            <p>{type}</p>
            <p>**** **** **** {number.slice(12)}</p>
            <p>Expires {expirationMonth}/{expirationYear}</p>
            <p>{bank}</p>
            <p>{owner}</p>
        </div>
    )
}