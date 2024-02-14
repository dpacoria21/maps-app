import { useContext } from 'react';
import { PlacesContext } from '../context';
import { Loading } from './Loading';

export const MapView = () => {

    const {isLoading, userLocation} = useContext(PlacesContext);

    console.log({isLoading, userLocation});

    if(isLoading) {
        return (
            <Loading />
        );
    }

    return (
        <div>
            {userLocation}
        </div>
    );
};
