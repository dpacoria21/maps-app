// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import { Map } from '!mapbox-gl';
import { createContext } from 'react';

interface MapContextProps{ 
    isMapReady: boolean,
    map?: Map,

    setMap: (map: Map) => void,
    getRouteBetweenPoints: (start: [number, number], end: [number, number]) => Promise<void>
}

export const MapContext = createContext({} as MapContextProps);