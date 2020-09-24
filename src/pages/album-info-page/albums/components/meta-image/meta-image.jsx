import React, { memo } from 'react';
import './meta-image.css';

const MetaImageComponent = ({ image }) => (
  <img className="meta-image" src={image} alt="" />
);

export const MetaImage = memo(MetaImageComponent);
