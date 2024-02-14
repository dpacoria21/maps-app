import { PlacesContext } from './PlacesContext';

export interface PlacesStore {
    isLoading: boolean,
    userLocation?: [number, number]
}

const INITIAL_STATE: PlacesStore = {
    isLoading: true,
    userLocation: undefined
};

interface Props {
    children: JSX.Element | JSX.Element[],
}

export const PlacesProvider = ({children}: Props) => {
    return (
        <PlacesContext.Provider value={{
            isLoading: true,
            userLocation: undefined,
        }}>
            {children}
        </PlacesContext.Provider>
    );
};
