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

  let newActiveSlide;

  const downHandler = ({ key }) => {
    if (key === 'ArrowRight') {
      newActiveSlide = currentSlide + 1;
      router.push('/' + newActiveSlide);
    } else if (key === 'ArrowLeft') {
      newActiveSlide = currentSlide - 1;
      router.push('/' + newActiveSlide);
    }
  };

  return newActiveSlide;
};

export default useKeyNavigate;
