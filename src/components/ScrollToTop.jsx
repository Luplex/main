import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);  // Réinitialise le scroll chaque fois que le chemin change

  return null;  // Ce composant ne rend rien
};

export default ScrollToTop;
