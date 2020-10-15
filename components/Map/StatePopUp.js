import { Popup } from 'react-map-gl';

import styles from '../../styles/Map.module.css';

const StatePopUp = ({ setShowPopUp, currentState }) => {
  return (
    <Popup
      mapboxApiAccessToken={process.env.MAPBOX_KEY}
      className="close-btn"
      latitude={currentState.lngLat[1]}
      longitude={currentState.lngLat[0]}
      closeButton={true}
      closeOnClick={false}
      onClose={() => setShowPopUp(false)}
      anchor="top"
    >
      <div className={styles.popup}>
        <h4>{currentState.properties.admin}</h4>
        <p>{currentState.properties.name}</p>
        <a target="_blank" href={currentState.properties.wikipedia}>
          {currentState.properties.wikipedia}
        </a>
      </div>
    </Popup>
  );
};

export default StatePopUp;
