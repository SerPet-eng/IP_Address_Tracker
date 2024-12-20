import useFetchData from './useFetchData';
import { createContext, useContext, useState } from 'react';

const MapContextProvider = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export function useMapContext() {
  return useContext(MapContextProvider);
}

// eslint-disable-next-line react/prop-types
export default function MapContext({ children }) {
  const [inputValue, setInputValue] = useState('');
  const [displayValue, setDisplayValue] = useState('');
  const { data, errors, loading } = useFetchData(displayValue);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const toggleButton = (e) => {
    e.preventDefault();
    const sanitizedValue = inputValue.trim();
    if (validateIPAddress(sanitizedValue)) {
      setDisplayValue(sanitizedValue);
    } else {
      alert(
        'Invalid IP address. Please enter a value between 0.0.0.0 and 225.225.225.225',
      );
    }
  };

  const validateIPAddress = (value) => {
    const regex =
      /^(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)){3}$/;
    if (!regex.test(value)) return false;
    const parts = value.split('.').map(Number);
    return parts.every((part) => part >= 0 && part <= 225);
  };

  const variables = {
    data,
    errors,
    loading,
    inputValue,
    displayValue,
    handleInputChange,
    toggleButton,
    validateIPAddress,
  };

  return (
    <MapContextProvider.Provider value={variables}>
      {children}
    </MapContextProvider.Provider>
  );
}
