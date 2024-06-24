import React from "react";
import { useCurrentLocation } from "./useCurrentLocation";

export function LocationComponent() {
    const { location, loading, error, getCurrentLocation } = useCurrentLocation();

    function handleGetLocation() {
        getCurrentLocation();
    }

    return (
        <div>
            <button onClick={handleGetLocation}>Get Current Location</button>
            {loading && <h1>Loading...</h1>}
            {error && <h1>Error: {error.message}</h1>}
            {location && (
                <div>
                    <h1>Latitude: {location.latitude}</h1>
                    <h1>Longitude: {location.longitude}</h1>
                </div>
            )}
        </div>
    );
}

export default LocationComponent;