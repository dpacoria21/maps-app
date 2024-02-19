import { useContext } from 'react';
import { PlacesContext } from '../context';
import { LoadingPlaces } from './LoadingPlaces';

export const SearchResults = () => {

    const {places, isLoadingPlaces} = useContext(PlacesContext);

    if(isLoadingPlaces) {
        return (
            <LoadingPlaces />
        );
    }

    if(places.length === 0) {
        return<></>;
    }

    return (
        <ul className="list-group mt-3">
            {
                places.map((place, i) => (
                    <li key={place.id+i} className="list-group-item list-group-item-action">
                        <h6>{place.text_es}</h6>
                        <p className="text-muted" style={{fontSize: '12px'}}>
                            {place.place_name_es}
                        </p>
                        <button className="btn btn-outline-primary btn-sm">
                            Direcciones
                        </button>
                    </li>
                ))
            }
        </ul>
    );
};
