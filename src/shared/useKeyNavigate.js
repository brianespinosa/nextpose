import { useEffect } from 'react';
import { useRouter } from 'next/router';

const useKeyNavigate = (activeSlide, slideLength) => {
  const router = useRouter();
  // Add event listeners
  useEffect(() => {
    window.addEventListener('keydown', downHandler);
    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener('keydown', downHandler);
    };
  });

  const NEXT_KEYS = [32, 39];
  const BACK_KEYS = [37];

  let newActiveSlide = activeSlide;

  const downHandler = ({ keyCode }) => {
    if (NEXT_KEYS.includes(keyCode) && newActiveSlide < slideLength - 1) {
      newActiveSlide++;
      router.push({ query: { activeSlide: newActiveSlide } });
    } else if (BACK_KEYS.includes(keyCode) && newActiveSlide > 0) {
      newActiveSlide--;
      router.push({ query: { activeSlide: newActiveSlide } });
    }
  };
};

export default useKeyNavigate;
