import IconArrow from '../../../images/icon-arrow.svg';
import { useMapContext } from '../../utils/MapContext';

export default function Form() {
  const { inputValue, handleInputChange, toggleButton } = useMapContext();
  const placeHolder = 'Search for any IP address or domain';

  return (
    <>
      <form className="form">
        <input
          value={inputValue}
          onChange={handleInputChange}
          className="form-input"
          type="text"
          placeholder={placeHolder}
        />

        <button
          type="submit"
          className="form-input-button"
          onClick={toggleButton}
        >
          <img className="form-input-image" src={IconArrow} alt="Submit Icon" />
        </button>
      </form>
    </>
  );
}
