import React from 'react';

export default function IdCard({ lastName, firstName, picture, gender, height, birth }) {
    return (
        <div className="idCard">
            <div className="photID">
                <img src={picture} alt={`${firstName} ${lastName}`} />
            </div>
            <div className="idDetails">
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Gender: {gender}</p>
                <p>Height: {height/100}m</p>
                {/* toDateString() method returns the date portion of a Date object in English */}
                <p>Birth: {birth.toDateString()}</p>
            </div>
        </div>
    )
}