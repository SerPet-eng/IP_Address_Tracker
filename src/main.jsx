import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './css/style.css';
import App from './App.jsx';
import MapContext from './utils/MapContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MapContext>
      <App />
    </MapContext>
  </StrictMode>,
);
