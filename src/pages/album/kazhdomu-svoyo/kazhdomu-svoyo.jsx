import React from 'react';
import '@/pages/album/kazhdomu-svoyo/kazhdomu-svoyo.css';
import { BackHomeButton } from '@@/back-home-button/back-home-button'

import { PlatformLinks } from '@/pages/album/components/platform-links/platform-links';
import { InfoBlock } from '@/pages/album/components/info-block/info-block';

const KazhdomuSvoyo = ({
  singer,
  trackName,
  images,
  platforms,
}) => (
  <div className="background-image">
    <div className="container-block">
      <BackHomeButton isWhite />
      <InfoBlock
        singer={singer}
        trackName={trackName}
        image={images.image}
        metaImage={images.metaImage}
      />
      <PlatformLinks
        vkLink={platforms.vkLink}
        yandexLink={platforms.yandexLink}
        googleLink={platforms.googleLink}
        youtubeLink={platforms.youtubeLink}
        appleLink={platforms.appleLink}
        spotifyLink={platforms.spotifyLink}
        amazonLink={platforms.amazonLink}
        anghamiLink={platforms.anghamiLink}
        napsterLink={platforms.napsterLink}
      />
    </div>
  </div>
);

export default KazhdomuSvoyo;
