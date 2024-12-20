import { useState, useEffect } from 'react';
import FormHandler from './components/FormHandler';
import Map from './components/Map';
import ImageDesktop from '../images/pattern-bg-desktop.png';
import ImageMobile from '../images/pattern-bg-mobile.png';

export default function App() {
  const [currentImage, setCurrentImage] = useState(ImageDesktop);

  useEffect(() => {
    const updateImage = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth <= 650) {
        setCurrentImage(ImageMobile);
      } else {
        setCurrentImage(ImageDesktop);
      }
    };

    updateImage();

    window.addEventListener('resize', updateImage);

    return () => window.removeEventListener('resize', updateImage);
  }, []);

  return (
    <div className="app">
      <div className="app-image-section">
        <img className="app-image" src={currentImage} alt={currentImage} />
      </div>
      <FormHandler />
      <Map />
    </div>
  );
}
