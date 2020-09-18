import React from 'react';
import './logotype.css'
import tree from '../../../../assets/images/icons/tree.png'
import play from '../../../../assets/images/icons/play.png'
import { Link } from 'react-router-dom';

export const Logotype = () => (
    <div className='logotype'>
        <div className='logotype__vlaus'>
            <div className='logotype__vlaus-text'>
                VLAUS
            </div>
            <img className="tree" src={tree} alt="tree"/>
        </div>
        <Link className="link" to='/albums'>
            <img className="play" src={play} alt="play"/>
        </Link>
        <div className='logotype__music'>
            <div className='logotype__music-text'>
                MUSIC
            </div>
        </div>
    </div> 
);