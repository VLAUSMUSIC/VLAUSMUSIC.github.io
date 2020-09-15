import loadable from '@loadable/component'
import { ErrorBoundary } from '@@/error-boundary/error-boundary'
import React from 'react';
import { useParams } from 'react-router';

export const AlbumInfo = () => {
    const { albumName } = useParams();
    const AlbumInfoPage = loadable(
        () => import(/* webpackChunkName: "albumName" */
            `@/pages/album-info/components/${albumName}/${albumName}`
            )
    );

    return (
        <ErrorBoundary>
            <AlbumInfoPage />
        </ErrorBoundary>
    )
}