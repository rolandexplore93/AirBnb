import React from 'react'

function Card() {
  return (
    <div className='card'>
        <div className='card--badge sold-out'>SOLD OUT</div>
        <div className='card--badge available'>AVAILABLE</div>
        <img src={require('../images/messi-jersey.png')} alt='productdisplay' className='card--image'/>
        <div className='card--stats'>
            <img src={require("../images/Star.png")} alt='star' className="card--star" />
            <span>rating</span>
            <span className="gray">(reviewCount) • </span>
            <span className="gray">location</span>
        </div>
        <p className="card--title">title</p>
        <p className="card--price"><span className="bold">From $price</span> / person</p>
    </div>
  )
}

export default Card