import React from 'react'

const IntroductionCard = ({ title, description, img }) => {
    return (
        <div className="iCard spacing">
            <img src={img} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
            <a href="#">more</a>
        </div>
    )
}

export default IntroductionCard;