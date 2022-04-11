import React from 'react'

function Card(props) {
    document.title = "AirBnb Stores"

    const handleOrder = () => {
        props.openSpots === 0 ? alert(`${props.title} is out of stock!😞`) 
        : 
        alert(`Your order (${props.title}) is in process🤗`)
    }
    
  return (
    <div className='card'>
        {props.openSpots === 0 ?
            <div className='card--badge sold-out'>SOLD OUT!</div> 
            : 
            <div className='card--badge available'>{props.location}</div> 
        }
        <img src={require(`../images/${props.img}`)} alt='productdisplay' className='card--image'/>
        <h4 className="card--title">{props.title}</h4>
        <div className='card--stats'>
            <img src={require("../images/Star.png")} alt='star' className="card--star" />
            <span>{props.rating}</span>
            <span className="gray">({props.reviewCount}) • </span>
            <span className="gray">{props.location}</span>
        </div>
        <p className="card--description">Description: {props.description}</p>
        <p className="card--price"><span className="bold">From ${props.price}</span> / person</p>
        <button onClick={() => {handleOrder()}}>Order</button>
    </div>
  )
}

export default Card