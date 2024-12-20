import 'leaflet/dist/leaflet.css';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  ZoomControl,
} from 'react-leaflet';
import { Icon } from 'leaflet';
import IconMarker from '../../images/icon-location.svg';
import { useMapContext } from '../utils/MapContext';
import PropTypes from 'prop-types';

function UpdateMapCenter({ lat, lng }) {
  const map = useMap();

  if (lat && lng) {
    map.setView([lat, lng], 13);
  }

  return null;
}

export default function Map() {
  const { data } = useMapContext();
  const customIcon = new Icon({
    iconUrl: IconMarker,
    iconSize: [33, 40],
  });

  return (
    <div className="map">
      <MapContainer center={[48.8566, 2.3522]} zoom={13} zoomControl={false}>
        <TileLayer
          attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <UpdateMapCenter lat={data.lat} lng={data.lng} />

        <Marker position={[data.lat, data.lng]} icon={customIcon}>
          <Popup>{data.region}</Popup>
        </Marker>

        <ZoomControl position="bottomright" />
      </MapContainer>
    </div>
  );
}

UpdateMapCenter.propTypes = {
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired,
};
