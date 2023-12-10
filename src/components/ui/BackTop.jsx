import React from 'react';
import BackTopIcon from '../../images/circle-up.svg';

export const BackTop = () => {
  return (
    <div className='backTopWrap'>
        <a href="/">
            <img src={BackTopIcon} alt="back" width={48} height={48}/>
        </a>
    </div>
  )
}
