import React from 'react'

export default function NumbersTable(props) {
    // Array.from() static method creates a new, shallow-copied Array instance from an array-like or iterable object
    let numbersArr = Array.from(Array(props.limit).keys())
    console.log(numbersArr)
    return (
      <div className="flex-wrapper">
        {numbersArr.map((number, index) => {
          return (
            <div
              key={index}
              style={{ backgroundColor: number % 2 === 0 ? 'red' : 'white' }}
              className="numbersBlock"
            >
              <span>{number + 1}</span>
            </div>
          );
        })}
      </div>
    );
  }