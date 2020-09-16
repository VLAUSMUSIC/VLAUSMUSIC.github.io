import React from 'react';
import { useParams } from 'react-router';
import { getComponentByAlbum } from '../../../services/get-component-by-album';

export const AlbumInfo = () => {
    const { albumName } = useParams();

    return getComponentByAlbum(albumName);
}