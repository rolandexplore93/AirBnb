import React from 'react'

function Hero() {
  return (
    <section className="hero">
            <img src={require('../images/herofeaturedimage.png')} className="hero--photo" alt='herofeaturedimage' />
            <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--text">Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>
        </section>
  )
}

export default Hero