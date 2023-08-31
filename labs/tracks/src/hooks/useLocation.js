import { useState, useEffect } from "react";
import { watchPositionAsync } from 'expo-location'

export default (callback) => {
    const [err, setErr] = useState(null);
    const startWatching = async () => {

        try {
        const { granted } = await requestForegroundPermissionsAsync();
        if (!granted) {
            setErr('You dont allow us to use your location');
        }
        }
        catch(e) {
            setErr("Something went wrong 1");
        }

        try {
            await watchPositionAsync({
                accuracy: Accuracy.BestForNavigation,
                timeInterval: 100,
                distanceInterval: 10
            }, 
                callback
                )
        }
        catch(err) {
            setErr('Someting went wrong 2');
        }
    }

    useEffect(() => {startWatching()}, []);

    return [err];
}