import React from 'react';
import '@/pages/album-info-page/albums/kazhdomu-svoyo/kazhdomu-svoyo.css';
import { SocialLinks } from '@/pages/album-info-page/albums/components/social-links/social-links';
import { PlatformLinks } from '@/pages/album-info-page/albums/components/platform-links/platform-links';
import { InfoBlock } from '@/pages/album-info-page/albums/components/info-block/info-block';

const KazhdomuSvoyo = props => (
  <div className="background-image">
    <div className="container-block">
      <InfoBlock
        singer={props.singer}
        trackName={props.trackName}
        image={props.images.image}
        metaImage={props.images.metaImage}
      />
      <PlatformLinks
        vkLink={props.platforms.vkLink}
        yandexLink={props.platforms.yandexLink}
        googleLink={props.platforms.googleLink}
        youtubeLink={props.platforms.youtubeLink}
        appleLink={props.platforms.appleLink}
        spotifyLink={props.platforms.spotifyLink}
        amazonLink={props.platforms.amazonLink}
        anghamiLink={props.platforms.anghamiLink}
        napsterLink={props.platforms.napsterLink}
      />
      <SocialLinks />
    </div>
  </div>
);

export default KazhdomuSvoyo;
