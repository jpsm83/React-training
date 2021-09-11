import React from 'react'

export default function Greetings({ lang, children }) {
    const greetings = {
        de: 'Hallo',
        en: 'Hello',
        es: 'Hola',
        fr: 'Bonjour'
    }

    return (
        <div className="greetings">
            <p>{greetings[lang]} {children}</p>
        </div>
    )
}