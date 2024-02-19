import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { MapsApp } from './MapsApp.tsx';

import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_KEY;

if(!navigator.geolocation) {
    alert('Tu navegador no tiene opcion de Geolocation');
    throw new Error('Tu navegador no tiene opcion de Geolocation');
}

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <MapsApp />
    </React.StrictMode>
);
