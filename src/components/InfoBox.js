import React from 'react'

const InfoBox = ({ title, description }) => {
    return (
        <div className="infoBox spacing">
            <h4>{title}</h4>
            <p>{description}</p>
            <a href="#">more</a>
        </div>
    )
}

export default InfoBox;