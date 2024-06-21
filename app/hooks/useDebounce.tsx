import { useRef } from 'react';

export default function useDebounce<T>(func: (arg: T) => void, delay: number) {
  // Store a reference to the timeout handle
  const handlerRef = useRef<NodeJS.Timeout | null>(null);

  // Return a function that debounces calls to `func`
  return (arg: T) => {
    // Clear the previous timeout
    if (handlerRef.current) {
      clearTimeout(handlerRef.current);
    }

    // Set a new timeout
    handlerRef.current = setTimeout(() => {
      func(arg);
    }, delay);
  };
}