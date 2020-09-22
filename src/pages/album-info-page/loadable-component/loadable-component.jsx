import { getPropsBy } from '../../../services/get-props-by-album-name';
import React, { memo } from 'react';
import { useParams } from 'react-router';
import loadable from '@loadable/component';
import { ErrorBoundary } from '@@/error-boundary/error-boundary';
    
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