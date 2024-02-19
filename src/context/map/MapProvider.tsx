import { Map, Marker, Popup } from 'mapbox-gl';
import { MapContext } from './MapContext';
import { useContext, useEffect, useReducer } from 'react';
import { mapReducer } from './MapReducer';
import { PlacesContext } from '../places/PlacesContext';

export interface MapState {
    isMapReady: boolean,
    map?: Map
    markers: Marker[],
}

const INITIAL_STATE: MapState = {
    isMapReady: false,
    map: undefined,
    markers: []
};

interface Props {
    children: JSX.Element | JSX.Element[]
}

export const MapProvider = ({children}: Props) => {

    const [state, dispatch] = useReducer(mapReducer, INITIAL_STATE);

    const { places } = useContext(PlacesContext);

    useEffect(() => {
        state.markers.forEach(marker => marker.remove());
        const newMarkers: Marker[] = [];

        for (const place of places) {

            const [lng, lat] = place.center;
            
            const popup = new Popup()
                .setHTML(`
                    <h6>${place.text_es}</h6>
                    <p>${place.place_name_es}</p>
                `);
                
            const newMarker = new Marker()
                .setPopup(popup)
                .setLngLat([lng, lat])
                .addTo(state.map!);
                
            newMarkers.push(newMarker);
        }

        //Todo Limpiar polyline

        dispatch({type: 'setMarkers', payload: newMarkers});

        console.log(places);

    }, [places]);

    const setMap = (map: Map) => {

        const myLocationPopup = new Popup()
            .setHTML(`
                <h4>Aqui estoy</h4>
                <p>En algun lugar del mundo</p>
        `);

        new Marker({
            color: '#61DAFB'
        })
            .setPopup(myLocationPopup)
            .setLngLat( map.getCenter() )
            .addTo(map);

        dispatch({type: 'setMap', payload: map});
    };

    return (
        <MapContext.Provider 
            value={{
                ...state,

                //Methods
                setMap,
            }}
        >
            {children}
        </MapContext.Provider>
    );
};
