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

  const NEXT_KEYS = new Set([32, 39]);
  const BACK_KEYS = new Set([37]);

  let newActiveSlide = activeSlide;

  const downHandler = ({ keyCode }) => {
    if (NEXT_KEYS.has(keyCode) && newActiveSlide < slideLength - 1) {
      newActiveSlide++;
      router.push({ query: { activeSlide: newActiveSlide } });
    } else if (BACK_KEYS.has(keyCode) && newActiveSlide > 0) {
      newActiveSlide--;
      router.push({ query: { activeSlide: newActiveSlide } });
    }
  };
};

export default useKeyNavigate;
