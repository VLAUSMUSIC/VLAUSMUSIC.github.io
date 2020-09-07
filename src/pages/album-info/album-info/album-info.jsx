import React from 'react';
import { useParams } from 'react-router';

export const AlbumInfo = () => {
    const { albumName } = useParams();
    return (
        <h1>{albumName}</h1>
    )
}