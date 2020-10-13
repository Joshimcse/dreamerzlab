import { useState } from 'react';
import ReactMapGL, { Source, Layer } from 'react-map-gl';

const Map = ({ MAPBOX_TOKEN, polygonsGeoJSON }) => {
  const [viewport, setViewport] = useState({
    width: '100vw',
    height: '100vh',
    latitude: 52.03,
    longitude: -113.5,
    zoom: 2.3,
    pitch: 15,
    minZoom: 1,
    transitionDuration: 1,
  });

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/mapbox/dark-v10"
      mapboxApiAccessToken={MAPBOX_TOKEN}
      {...viewport}
      onViewportChange={nextViewport => setViewport(nextViewport)}
    >
      <Source id="polylineLayer" type="geojson" data={polygonsGeoJSON}>
        <Layer
          id="lineLayer"
          type="line"
          source="my-data"
          layout={{
            'line-join': 'round',
            'line-cap': 'round',
          }}
          paint={{
            'line-color': 'rgba(247, 189, 0, .7)',
            'line-width': 1.5,
          }}
        />
      </Source>
    </ReactMapGL>
  );
};

export default Map;
