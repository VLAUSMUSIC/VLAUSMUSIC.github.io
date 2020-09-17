import React, { memo } from 'react';
import { useParams } from 'react-router';
import loadable from '@loadable/component';
import { ErrorBoundary } from '@@/error-boundary/error-boundary';
import kazhdomu_svoyo from '@/assets/images/albums-images/kazhdomu-svoyo/kazhdomu-svoyo.jpg';
import notes from '@/assets/images/icons/music.png';

const SINGER = 'VLAUS';

const ALBUMS = [
    {
        id: 'kazhdomu-svoyo',
        singer: SINGER,
        trackName: 'Каждому своё',
        images: {
            image: kazhdomu_svoyo,
            metaImage: notes,
        },
        platforms: {
            vkLink: 'https://vk.com/music/album/-2000196728_8196728_598e6ea6667f92374a',
            yandexLink: 'https://music.yandex.ru/album/11558123/track/69216822',
            googleLink: 'https://play.google.com/store/music/album/Vlaus_%D0%9A%D0%B0%D0%B6%D0%B4%D0%BE%D0%BC%D1%83_%D1%81%D0%B2%D0%BE%D1%91?id=Bjppimwrptbthzodad7a7kjes5m',
            youtubeLink: 'https://music.youtube.com/watch?v=3CFP2si-WCA&list=RDAMVM3CFP2si-WCA',
            appleLink: 'https://music.apple.com/ru/album/%D0%BA%D0%B0%D0%B6%D0%B4%D0%BE%D0%BC%D1%83-%D1%81%D0%B2%D0%BE%D1%91-single/1524872746',
            spotifyLink: 'https://open.spotify.com/album/2yz0czELViyv5jZxjoET6s?highlight=spotify:track:4uqRkuy92H5FOdyLrKUvMI',
            amazonLink: 'https://music.amazon.com.au/albums/B08DKL4H82',
            anghamiLink: 'https://play.anghami.com/song/81957561',
            napsterLink: 'https://us.napster.com/artist/vlaus/album/--495387378/track/-',
        }
    },
];

const getPropsBy = (albumName) => ALBUMS.filter((album) => album.id === albumName)[0];
    
export const LoadableComponent = () => {
    const { albumName } = useParams();
    const AlbumComponent = loadable(() => import(
        `@/pages/album-info-page/albums/${albumName}/${albumName}`
    ));

    const props = getPropsBy(albumName);
    
    return (
        <ErrorBoundary>
            <AlbumComponent {...props} />
        </ErrorBoundary>
    );
};

export const Loadable = memo(LoadableComponent);