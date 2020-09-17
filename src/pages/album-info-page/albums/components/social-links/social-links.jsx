import React from 'react'
import vkVlaus from '@/assets/images/icons/vk-vlaus.png';
import instagramVlaus from '@/assets/images/icons/instagram-vlaus.png';
import './social-links.css';

export const SocialLinks = () => {
    
    const socialItems = document.getElementsByClassName('social__item');
    setTimeout(() => {
        for (const social of socialItems)
            social.classList.add('active')
    }, 0)
    
    return (
        <div className="social">
            <div className="social__item">
                <a 
                    className="social__link" 
                    href="https://vk.com/vlados_lalala" 
                    target="_blank"
                >
                    <img src={vkVlaus} alt=""/>
                </a>
            </div>

            <div className="social__item">
                <a 
                    className="social__link"
                    href="https://www.instagram.com/vlados_lalala/"
                    target="_blank"
                >
                    <img src={instagramVlaus} alt=""/>
                </a>
            </div>
        </div>
    )
}