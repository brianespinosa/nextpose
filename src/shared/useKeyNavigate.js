import { useEffect } from 'react';
import { useRouter } from 'next/router';

const useKeyNavigate = (currentSlide) => {
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

  let newActiveSlide;

  const downHandler = ({ keyCode }) => {
    if (NEXT_KEYS.includes(keyCode)) {
      newActiveSlide = currentSlide + 1;
      router.push({ query: { slide: newActiveSlide } });
    } else if (BACK_KEYS.includes(keyCode)) {
      newActiveSlide = currentSlide - 1;
      router.push({ query: { slide: newActiveSlide } });
    }
  };

  return newActiveSlide;
};

export default useKeyNavigate;
