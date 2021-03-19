import React, { memo } from 'react';
import { SocialLinks } from '@/pages/album/components/social-links/social-links';
import vk from '@/assets/images/icons/vk.svg';
import yandex from '@/assets/images/icons/yandex.png';
import google from '@/assets/images/icons/google.png';
import youtube from '@/assets/images/icons/youtube.png';
import apple from '@/assets/images/icons/apple.png';
import spotify from '@/assets/images/icons/spotify.png';
import amazon from '@/assets/images/icons/amazon.png';
import anghami from '@/assets/images/icons/anghami.png';
import napster from '@/assets/images/icons/napster.png';
import './platform-links.css';

const PlatformLinksComponent = ({
  vkLink,
  yandexLink,
  googleLink,
  youtubeLink,
  appleLink,
  spotifyLink,
  amazonLink,
  anghamiLink,
  napsterLink,
}) => (
  <div className="links">
    {vkLink && (
      <div className="links__item">
        <div className="links__name">
          <img src={vk} alt="" />
          <div>VK</div>
        </div>
        <a className="link__button" href={vkLink} target="_blank">
          Открыть
        </a>
      </div>
    )}

    {yandexLink && (
      <div className="links__item">
        <div className="links__name">
          <img src={yandex} alt="" />
          <div>Yandex Music</div>
        </div>
        <a className="link__button" href={yandexLink} target="_blank">
          Открыть
        </a>
      </div>
    )}

    {googleLink && (
      <div className="links__item">
        <div className="links__name">
          <img src={google} alt="" />
          <div>Google Play</div>
        </div>
        <a className="link__button" href={googleLink} target="_blank">
          Открыть
        </a>
      </div>
    )}

    {youtubeLink && (
      <div className="links__item">
        <div className="links__name">
          <img src={youtube} alt="" />
          <div>YouTube Music</div>
        </div>
        <a className="link__button" href={youtubeLink} target="_blank">
          Открыть
        </a>
      </div>
    )}

    {appleLink && (
      <div className="links__item">
        <div className="links__name">
          <img src={apple} alt="" />
          <div>Apple Music</div>
        </div>
        <a className="link__button" href={appleLink} target="_blank">
          Открыть
        </a>
      </div>
    )}

    {spotifyLink && (
      <div className="links__item">
        <div className="links__name">
          <img src={spotify} alt="" />
          <div>Spotify</div>
        </div>
        <a className="link__button" href={spotifyLink} target="_blank">
          Открыть
        </a>
      </div>
    )}

    {amazonLink && (
      <div className="links__item">
        <div className="links__name">
          <img src={amazon} alt="" />
          <div>Amazon Music</div>
        </div>
        <a className="link__button" href={amazonLink} target="_blank">
          Открыть
        </a>
      </div>
    )}

    {anghamiLink && (
      <div className="links__item">
        <div className="links__name">
          <img src={anghami} alt="" />
          <div>Anghami</div>
        </div>
        <a className="link__button" href={anghamiLink} target="_blank">
          Открыть
        </a>
      </div>
    )}

    {napsterLink && (
      <div className="links__item">
        <div className="links__name">
          <img src={napster} alt="" />
          <div>Napster</div>
        </div>
        <a className="link__button" href={napsterLink} target="_blank">
          Открыть
        </a>
      </div>
    )}

    <SocialLinks />
  </div>
);

export const PlatformLinks = memo(PlatformLinksComponent);
