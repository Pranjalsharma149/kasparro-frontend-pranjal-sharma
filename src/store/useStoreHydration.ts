// src/store/useStoreHydration.ts
import { useEffect, useState } from 'react';
import { useCounterStore } from './useCounterStore'; 

/**
 * Custom hook to track if the store has been hydrated from local storage.
 */
export const useStoreHydration = () => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    if (useCounterStore.persist.hasHydrated()) {
      setIsHydrated(true);
    }

    const unsubHydrate = useCounterStore.persist.onHydrate(() => setIsHydrated(false)); 
    const unsubFinishHydration = useCounterStore.persist.onFinishHydration(() => setIsHydrated(true));

    return () => {
      unsubHydrate();
      unsubFinishHydration();
    };
  }, []);

  return isHydrated;
};