import React from 'react'

export const Hero = () => {
  return (
    <section className='hero'>
        <div className="container">
            <h1 className='heroTitle'>We Create <br /> Startups.</h1>
            <p className='heroText'>We are startup studio that develops and launches new companies.</p>
                <button type='button' className='heroBtn'><a href="#works">See our works</a></button>
        </div>
    </section>
  )
}
