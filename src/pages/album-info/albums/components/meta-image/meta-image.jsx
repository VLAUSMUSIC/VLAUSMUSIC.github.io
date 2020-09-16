import { memo } from "react";

import React from 'react';
import './meta-image.css'

const MetaImageComponent = ({ image }) => (
    <img className="meta-image" src={image} alt=""/>
);

export const MetaImage = memo(MetaImageComponent);