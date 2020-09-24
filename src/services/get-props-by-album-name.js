import { ALBUMS } from '@/store/albums';

export const getPropsBy = albumName =>
  ALBUMS.filter(album => album.id === albumName)[0];
