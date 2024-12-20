import { useMapContext } from '../../utils/MapContext';

export default function Result() {
  const { data } = useMapContext();

  return (
    <div className="result">
      <div className="result-container">
        <p className="result-container-text">ip address</p>
        <p className="result-container-display">{data.ip}</p>
      </div>

      <div className="result-container">
        <p className="result-container-text">location</p>
        <p className="result-container-display">{data.city}</p>
      </div>

      <div className="result-container">
        <p className="result-container-text">timezone</p>
        <p className="result-container-display">{data.timeZone}</p>
      </div>

      <div className="result-container" id="isp">
        <p className="result-container-text">isp</p>
        <p className="result-container-display">{data.isp}</p>
      </div>
    </div>
  );
}
