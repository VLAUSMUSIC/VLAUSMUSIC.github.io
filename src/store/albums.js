import kazhdomu_svoyo from '@/assets/images/albums-images/kazhdomu-svoyo/kazhdomu-svoyo.jpg';
import notes from '@/assets/images/icons/music.png';

import dusha_diktovala_a_ya_zapisyval from '@/assets/images/albums-images/dusha-diktovala-a-ya-zapisyval/dusha-diktovala-a-ya-zapisyval.jpg';
import musical_notes from '@/assets/images/icons/musical-notes.png';

const SINGER = 'VLAUS';

export const ALBUMS = [
  {
    id: 'kazhdomu-svoyo',
    singer: SINGER,
    trackName: 'Каждому своё',
    images: {
      image: kazhdomu_svoyo,
      metaImage: notes,
    },
    platforms: {
      vkLink:
        'https://vk.com/music/album/-2000196728_8196728_598e6ea6667f92374a',
      yandexLink: 'https://music.yandex.ru/album/11558123/track/69216822',
      googleLink:
        'https://play.google.com/store/music/album/Vlaus_%D0%9A%D0%B0%D0%B6%D0%B4%D0%BE%D0%BC%D1%83_%D1%81%D0%B2%D0%BE%D1%91?id=Bjppimwrptbthzodad7a7kjes5m',
      youtubeLink:
        'https://music.youtube.com/watch?v=3CFP2si-WCA&list=RDAMVM3CFP2si-WCA',
      appleLink:
        'https://music.apple.com/ru/album/%D0%BA%D0%B0%D0%B6%D0%B4%D0%BE%D0%BC%D1%83-%D1%81%D0%B2%D0%BE%D1%91-single/1524872746',
      spotifyLink:
        'https://open.spotify.com/album/2yz0czELViyv5jZxjoET6s?highlight=spotify:track:4uqRkuy92H5FOdyLrKUvMI',
      amazonLink: 'https://music.amazon.com.au/albums/B08DKL4H82',
      anghamiLink: 'https://play.anghami.com/song/81957561',
      napsterLink:
        'https://us.napster.com/artist/vlaus/album/--495387378/track/-',
    },
  },

  {
    id: 'dusha-diktovala-a-ya-zapisyval',
    singer: SINGER,
    trackName: 'Душа диктовала, а я записывал',
    images: {
      image: dusha_diktovala_a_ya_zapisyval,
      metaImage: musical_notes,
    },
    platforms: {
      vkLink: 'https://vk.com/music/album/-2000715295_10715295_f1485365ec05bfc38e',
      yandexLink: 'https://music.yandex.ru/album/14400419',
      youtubeLink: 'https://music.youtube.com/playlist?list=OLAK5uy_nkGFP_u9ZTozfTJe-CdcvmpniKHGJyMdA',
      appleLink: 'https://music.apple.com/ru/album/%D0%B4%D1%83%D1%88%D0%B0-%D0%B4%D0%B8%D0%BA%D1%82%D0%BE%D0%B2%D0%B0%D0%BB%D0%B0-%D0%B0-%D1%8F-%D0%B7%D0%B0%D0%BF%D0%B8%D1%81%D1%8B%D0%B2%D0%B0%D0%BB/1558312977?ls',
      spotifyLink: 'https://open.spotify.com/album/6h4FIwU6HMKNxplZlQrtrU?si=ZUlMnKAKQG2PJocIqB9n2A&nd=1',
      amazonLink: 'https://music.amazon.com.au/albums/B08YX2S8TS?marketplaceId=A39IBJ37TRP1C6&musicTerritory=AU',
      anghamiLink: 'https://play.anghami.com/album/1018662702',
      napsterLink: 'https://us.napster.com/artist/vlaus/album/--565772689',
    },
  },
];
