import React from 'react';
import closeIcon from '../../images/cross.svg'

export const Modal = ({closeModal, item}) => {

  return (
    <div className='modalBackground'>
        <div className="modalContainer">
            <button type='button' className='closeModalBtn' onClick={() => closeModal(false)}>
                <img src={closeIcon} alt="" width={24} height={24}/>
            </button>
            <div className="modalTitle">
                <h2 className='worksTitle'>{item.title}</h2>
                <img src={item.image} alt="project" className='modalImage'/>
            </div>
            <div className="modaBody">
                <p className='worksItemText'>{item.description}</p>
                <p className='worksItemText'>{item.lorem}</p>
            </div>
            <div className="modalFooter"></div>
        </div>
    </div>
  )
}
