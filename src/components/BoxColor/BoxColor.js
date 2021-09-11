import React from 'react'

export default function BoxColor({ r, g, b }) {
    const boxColor = `rgb(${r},${g},${b})`

    function rgbToHex({r}, {g}, {b}) {
        return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
      }

    return (
        <div className="boxColor" style={{backgroundColor: boxColor}} >
            <p>{boxColor}</p>
            <p>{rgbToHex({r}, {g}, {b})}</p>
        </div>
    )
}