import React from 'react';
import { KazhdomuSvoyo } from "@/pages/album-info/albums/kazhdomu-svoyo/kazhdomu-svoyo";
import { Test } from "@/pages/album-info/albums//test/test";
import { Page404 } from '@@/404/page404';

export const getComponentByAlbum = (album) => {
    switch (album) {
        case 'kazhdomu-svoyo': {
            return <KazhdomuSvoyo />
        }
        case 'test': {
            return <Test />
        }
        default:
            return <Page404 />;
    }
}