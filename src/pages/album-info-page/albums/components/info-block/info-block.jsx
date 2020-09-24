import React, { memo } from 'react';
import { MetaImage } from '../meta-image/meta-image';
import './info-block.css';

const InfoBlockComponent = ({ singer, trackName, image, metaImage }) => (
  <div className="info">
    <div className="info__poster">
      <img src={image} alt="poster" />
    </div>
    <div className="info__meta">
      <div className="info__text">
        <div className="singer">{singer}</div>
        <div className="track-name">{trackName}</div>
      </div>
      <MetaImage image={metaImage} />
    </div>
  </div>
);

export const InfoBlock = memo(InfoBlockComponent);
