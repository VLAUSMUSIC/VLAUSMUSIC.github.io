import React, { memo, useMemo } from 'react';
import { useParams } from 'react-router';

import { ErrorBoundary } from '@@/error-boundary/error-boundary';
import loadable from '@loadable/component';
import { getPropsBy } from '@/services/get-props-by-album-name';

export const AlbumComponent = () => {
  const { albumName } = useParams();
  const AlbumComponent = loadable(() =>
    import(`@/pages/album/${albumName}/${albumName}`),
  );

  const props = useMemo(() => getPropsBy(albumName), [albumName, getPropsBy]);

  return (
    <ErrorBoundary>
      <AlbumComponent {...props} />
    </ErrorBoundary>
  );
};

export const Album = memo(AlbumComponent);
