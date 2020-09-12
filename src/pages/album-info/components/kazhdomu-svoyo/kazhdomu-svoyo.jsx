import React from 'react';
import '@/pages/album-info/components/kazhdomu-svoyo/kazhdomu-svoyo.css'
import kazhdomu_svoyo from '@/assets/images/albums-images/kazhdomu-svoyo/kazhdomu-svoyo.jpg';
import vk from '@/assets/images/icons/vk.png';
import yandex from '@/assets/images/icons/yandex.png';
import google from '@/assets/images/icons/google.png';
import youtube from '@/assets/images/icons/youtube.png';
import apple from '@/assets/images/icons/apple.png';
import spotify from '@/assets/images/icons/spotify.png';
import vkVlaus from '@/assets/images/icons/vk-vlaus.png';
import instagramVlaus from '@/assets/images/icons/instagram-vlaus.png';

const KazhdomuSvoyo = () => {
      
    return (
        <div className="background-image">
            <div className="container">
               <div className="info">
                    <div className="info__poster">
                        <img src={kazhdomu_svoyo} alt="poster"/>
                    </div>
                    <div className="info__meta">
                        <div className="singer">
                            VLAUS
                        </div>
                        <div className="track-name">
                            Каждому своё - Single
                        </div>
                    </div>
               </div>
               <div className="links">
                   <div className="links__item">
                        <div className="links__name">
                            <img src={vk} alt=""/>
                            <div>VK</div>
                        </div>
                        <a 
                            className="link"
                            href="https://vk.com/music/album/-2000196728_8196728_598e6ea6667f92374a"
                            target="_blank"
                        >
                            Открыть
                        </a>
                   </div>
                   <div className="links__item">
                        <div className="links__name">
                            <img src={yandex} alt=""/>
                            <div>Yandex Music</div>
                        </div>
                        <a 
                            className="link"
                            href="https://music.yandex.ru/album/11558123/track/69216822"
                            target="_blank"
                        >
                            Открыть
                        </a>
                   </div>
                   <div className="links__item">
                        <div className="links__name">
                            <img src={google} alt=""/>
                            <div>Google Play</div>
                        </div>
                        <a 
                            className="link"
                            href="https://play.google.com/store/music/album/Vlaus_%D0%9A%D0%B0%D0%B6%D0%B4%D0%BE%D0%BC%D1%83_%D1%81%D0%B2%D0%BE%D1%91?id=Bjppimwrptbthzodad7a7kjes5m"
                            target="_blank"
                        >
                            Открыть
                        </a>
                   </div>
                   <div className="links__item">
                        <div className="links__name">
                            <img src={youtube} alt=""/>
                            <div>YouTube Music</div>
                        </div>
                        <a 
                            className="link"
                            href="https://music.youtube.com/watch?v=3CFP2si-WCA&list=RDAMVM3CFP2si-WCA"
                            target="_blank"
                        >
                            Открыть
                        </a>
                   </div>
                   <div className="links__item">
                        <div className="links__name">
                            <img src={apple} alt=""/>
                            <div>Apple Music</div>
                        </div>
                        <a 
                            className="link"
                            href="https://music.apple.com/ru/album/%D0%BA%D0%B0%D0%B6%D0%B4%D0%BE%D0%BC%D1%83-%D1%81%D0%B2%D0%BE%D1%91-single/1524872746"
                            target="_blank"
                        >
                            Открыть
                        </a>
                   </div>
                   <div className="links__item">
                        <div className="links__name">
                            <img src={spotify} alt=""/>
                            <div>Spotify</div>
                        </div>
                        <a 
                            className="link"
                            href="https://open.spotify.com/album/2yz0czELViyv5jZxjoET6s?highlight=spotify:track:4uqRkuy92H5FOdyLrKUvMI"
                            target="_blank"
                        >
                            Открыть
                        </a>
                   </div>
               </div>
               <div className="social">
                    <div className="social__item">
                        <a className="social__link" href="https://vk.com/vlados_lalala" target="_blank">
                            <img src={vkVlaus} alt=""/>
                        </a>
                    </div>
                    <div className="social__item">
                        <a className="social__link" href="https://www.instagram.com/vlados_lalala/" target="_blank">
                            <img src={instagramVlaus} alt=""/>
                        </a>
                    </div>
               </div>
            </div>
        </div>
    )
};

export default KazhdomuSvoyo;