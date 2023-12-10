import React from 'react';
import frame1 from '../images/Frame1.png'
import frame2 from '../images/Frame2.png'
import frame3 from '../images/Frame3.png'
import frame4 from '../images/Frame4.png'
import leftThumb from '../images/Thumb.svg'
import rightThumb from '../images/ThumbRight.svg'

export const Works = () => {

  const items = [
    {
      id: 1,
      title: 'Tolq',
      description: 'Tolq is the translation solution built for e-commerce. It provides all pieces of the localization puzzle in one single integrated solution.',
      image: frame1
    },
    {
      id: 2,
      title: 'Feedback Labs',
      description: 'Feedback Labs turns feedback into actionable insights for your team.',
      image: frame2
    },
    {
      id: 3,
      title: 'Codekeeper',
      description: 'Codekeeper is an all-in-one solution for software developers and publishers to provide source code escrow as part of service level and license agreements.',
      image: frame3
    },
    {
      id: 4,
      title: 'LegalSite',
      description: 'Protected against legal risks, privacy compliant and always up-to-date with the latest regulatory developments.',
      image: frame4
    },
  ]

  return (
    <section className='works' id='works'>
        <div className="container">
            <h2 className='worksTitle'>Our Works</h2>
            <ul className='worksList'>
              {items.map((item, index) => {
                return (
                  <li key={index} className='worksItem'>
                    <h2 className='worksItemTitle'>{item.title}</h2>
                    <p className='worksItemText'>{item.description}</p>
                    <img src={item.image} alt=""  className='worksItemImage'/>
                    <button type="button " className='worksBtn'>More</button>
                  </li>
                )
              })}
            </ul>
            <div className='afterCards' id='startups'>
              <img src={leftThumb} alt="" />
              <p className='afterCardsText'>
              Startups create a world that actually is better.
Any problem that can be solved, will be solved by a startup, and that is a huge opportunity.
              </p>
              <img src={rightThumb} alt="" />
            </div>
        </div>
    </section>
  )
}
