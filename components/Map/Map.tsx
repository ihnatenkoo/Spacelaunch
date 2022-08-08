import React, { FC, useRef } from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import { useAppSelector } from '../../hooks';

const containerStyle = {
  width: '100%',
  height: '492px',
};

const defaultOptions = {
  fullscreenControl: false,
  streetViewControl: false,
  panControl: false,
};

export const Map: FC = () => {
  const { eventCoordinates } = useAppSelector((state) => state.singleLaunch);

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: String(process.env.NEXT_PUBLIC_MAPS_API_KEY),
  });

  const mapRef = useRef(undefined);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onLoad = React.useCallback(function callback(map: any) {
    mapRef.current = map;
  }, []);

  const onUnmount = React.useCallback(function callback() {
    mapRef.current = undefined;
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={eventCoordinates}
      zoom={9}
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
