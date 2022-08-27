import { useEffect, useState } from 'react';
import { isWindowDefined } from '../windowDefined';

export function useDirection(fallback = 'ltr') {
  const [direction, setDirection] = useState(fallback);

  useEffect(() => {
    if (!isWindowDefined()) return setDirection(fallback);

    let htmlTagValue = document.querySelector('html')?.getAttribute('dir');
    if (typeof htmlTagValue === null) htmlTagValue = fallback;

    const localStorageValue = localStorage.getItem('dir');
    setDirection(localStorageValue || htmlTagValue || 'ltr');
  }, [fallback]);
  return [direction, setDirection];
}
