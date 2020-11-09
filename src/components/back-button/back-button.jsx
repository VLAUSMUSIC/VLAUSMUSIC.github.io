import React, { memo }  from 'react';
import './back-button.css';
import BackButtonImage from '@/assets/images/icons/back-button.png'

const BackButtonComponent = () => (
  <div className="back-button">
    <a href="/">
      <img src={BackButtonImage} alt=""/>
    </a>
  </div>
);

export const BackButton = memo(BackButtonComponent);
