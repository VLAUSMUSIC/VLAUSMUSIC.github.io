import React from 'react';
import './logotype.css'
import tree from '../../../../assets/images/icons/tree.png'

export const Logotype = () => (
    <div className='logotype'>
        <div className='logotype__vlaus'>
            <img className="tree" src={tree} alt=""/>
            <div className='logotype__vlaus-text'>
                VLAUS
            </div>
        </div>
        <div className="link"></div>
        <div className='logotype__music'>
            <div className='logotype__music-text'>
                MUSIC
            </div>
        </div>
    </div> 
);