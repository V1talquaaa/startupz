import React from 'react'

export const Button = ({text, color, backgroundColor}) => {

    const buttonColor = {
        color: `${color}`,
        backgroundColor: `${backgroundColor}`,
    }

  return (
    <button type="button" className='btn' style={buttonColor}>{text}</button>
  )
}
