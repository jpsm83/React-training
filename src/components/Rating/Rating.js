import React from 'react'

export default function Rating({ children }) {
    const stars = {
        0: '☆☆☆☆☆',
        1: '★☆☆☆☆',
        2: '★★☆☆☆',
        3: '★★★☆☆',
        4: '★★★★☆',
        5: '★★★★★'
    }
    return (
        <div>
            <p>{stars[Math.round(children)]}</p>
        </div>
    )
}