import React from 'react'

export default function Member(params) {
    const { details } = params

    return (
        <div>
            <h2>{details.teammember}</h2>
            <p>Email: {details.email}</p>
            <p>Role: {details.role}</p>
            <p>Skills: {details.skillset}</p>
        </div>
    )
    
}