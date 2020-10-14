import { useState } from 'react';
import ReactMapGL, { Source, Layer } from 'react-map-gl';

import styles from '../styles/Map.module.css';

const Map = ({ MAPBOX_TOKEN, polygonsGeoJSON }) => {
  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    latitude: 51.3,
    longitude: -106,
    zoom: 2.46,
    bearing: -7.5,
    pitch: 42,
    altitude: 1.5,
    minZoom: 1,
  });

  return (
    <div className={styles.mapWrapper}>
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
    </div>
  );
};

export default Map;
