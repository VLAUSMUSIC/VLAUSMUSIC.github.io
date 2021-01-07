import React, { memo } from 'react';
import './back-home-button.css';
import BackHomeImageBlack from '@/assets/images/icons/home-black.svg';
import BackHomeImageWhite from '@/assets/images/icons/home-white.svg';

const BackHomeButtonComponent = ({isWhite = false}) => (
  <div className="back-button">
    <a href="/" title="To home">
      <img src={isWhite ? BackHomeImageWhite : BackHomeImageBlack} alt="back-to-home" />
    </a>
  </div>
);

export const BackHomeButton = memo(BackHomeButtonComponent);
