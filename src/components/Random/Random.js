import React from 'react'

export default function Random({ min, max }) {

    const randonNumber = Math.floor(Math.random() * (max - min) + min);

    return (
        <div>
            <p>{`Random value between ${min} and ${max} => ${randonNumber}`}</p>
        </div>
    )
}