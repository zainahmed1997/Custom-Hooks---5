import { useState } from "react";

export function useCurrentLocation() {
    const [location, setLocation] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const getCurrentLocation = () => {
        if (!navigator.geolocation) {
            setError(new Error('Geolocation is not supported by your browser'));
            return;
        }

        setLoading(true);
        setError(null);

        navigator.geolocation.getCurrentPosition(
            (position) => {
                setLocation({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                });
                setLoading(false);
            },
            (err) => {
                setError(err);
                setLoading(false);
            }
        );
    };

    return { location, loading, error, getCurrentLocation };
}