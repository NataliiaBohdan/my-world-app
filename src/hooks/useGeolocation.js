import { useState } from "react";

export function useGeolocation(defaultPosition = null) {
  const [location, setLocation] = useState(defaultPosition);
  const [isLoading, setIsLoading] = useState(false);

  function getLocation() {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser ⛔️");
    } else {
      setIsLoading(true);
      navigator.geolocation.getCurrentPosition((location) => {
        setLocation({
          lat: location.coords.latitude,
          lng: location.coords.longitude,
        });
      });
      setIsLoading(false);
    }
  }
  return { location, isLoading, getLocation };
}
