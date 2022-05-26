import React, { FC, useRef } from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '492px'
};

const defaultOptions = {
  fullscreenControl: false,
  streetViewControl: false,
  panControl: false
};

interface MapProps {
  eventCoordinates: {
    lat: number;
    lng: number;
  };
}

export const Map: FC<MapProps> = ({ eventCoordinates }) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: String(process.env.NEXT_PUBLIC_MAPS_API_KEY)
  });

  const mapRef = useRef(undefined);

  const onLoad = React.useCallback(function callback(map: any) {
    mapRef.current = map;
  }, []);

  const onUnmount = React.useCallback(function callback(map: any) {
    mapRef.current = undefined;
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={eventCoordinates}
      zoom={7}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={defaultOptions}
    >
      <Marker position={eventCoordinates} />
    </GoogleMap>
  ) : (
    <h2>Loading map....</h2>
  );
};
