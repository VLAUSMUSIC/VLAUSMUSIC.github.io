import '@/pages/home-page/logotype/logotype.css';
import React from 'react';
import { Link } from 'react-router-dom';

export const Logotype = () => (
    <div className='logotype'>
        <Link to='/' className='logotype__link'>
            <span className='logotype__text'>
                VLAUSMUSIC
            </span>
        </Link>
    </div>
    
);