import { PlacesProvider } from './context';
import { HomeScreen } from './screens';
import './index.css';

export const MapsApp = () => {
    return (
        <PlacesProvider>
            <HomeScreen />
        </PlacesProvider>
    );
};
