import { useEffect, useState } from "react";

export default function useWindowWidth() {

  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : false);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return windowWidth;
}
