import React, { useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import '@/pages/home-page/components/logotype/logotype.css';
import tree from '@/assets/images/icons/tree.png';
import play from '@/assets/images/icons/play.png';

export const Logotype = () => {
  const history = useHistory();

  const { vlaus, music, link } = useMemo(
    () => ({
      vlaus: document.getElementsByClassName('logotype__vlaus'),
      music: document.getElementsByClassName('logotype__music'),
      link: document.getElementsByClassName('link'),
    }),
    [document],
  );

  const goToAlbums = () => {
    vlaus[0].classList.add('moved');
    music[0].classList.add('moved');
    link[0].classList.add('moved');
    setTimeout(() => {
      history.push('albums');
    }, 1000);
  };

  return (
    <div className="logotype" id="swup">
      <div className="logotype__vlaus">
        <div className="logotype__vlaus-text">VLAUS</div>
        <img className="tree" src={tree} alt="tree" />
        <div className="link" onClick={goToAlbums}>
          <img className="play" src={play} alt="play" />
        </div>
      </div>
      <div className="logotype__music">
        <div className="logotype__music-text">MUSIC</div>
      </div>
    </div>
  );
};
