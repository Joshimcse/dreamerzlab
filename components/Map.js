import { useState } from 'react';
import ReactMapGL, { Source, Layer } from 'react-map-gl';

import StatePopUp from './StatePopUp';

import usStatesGeoJSON from '../data/us-state-geojson.json';
import styles from '../styles/Map.module.css';

const Map = () => {
  const [showPopUp, setShowPopUp] = useState(false);
  const [currentState, setCurrentState] = useState(null);
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

  // State information popup
  const popUpHandler = e => {
    if (e.features && e.features.length > 0) {
      const feature = e.features;

      if (Object.keys(feature[0].properties).length > 1) {
        setCurrentState({
          properties: feature[0].properties,
          lngLat: e.lngLat,
        });
        setShowPopUp(true);
      } else {
        setShowPopUp(false);
        setCurrentState(null);
      }
    }
  };

  return (
    <div className={styles.mapWrapper}>
      <ReactMapGL
        mapStyle="mapbox://styles/mapbox/dark-v10"
        mapboxApiAccessToken={process.env.MAPBOX_KEY}
        {...viewport}
        onViewportChange={nextViewport => setViewport(nextViewport)}
        onClick={e => popUpHandler(e)}
      >
        <Source id="polylineLayer" type="geojson" data={usStatesGeoJSON}>
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

          <Layer
            id="fillLayer"
            type="fill"
            source="my-data"
            sourceLayer=""
            layout={{}}
            // filter={['==', '$type', 'Polygon']}
            paint={{
              'fill-color': 'rgba(247, 189, 0, .1)',
            }}
          />
        </Source>

        {showPopUp ? <StatePopUp setShowPopUp={setShowPopUp} currentState={currentState} /> : null}
      </ReactMapGL>
    </div>
  );
};

export default Map;
