import { useEffect, useState } from 'react';

interface IntersectionObserverProps {
  onIntersect: () => void;
  options?: IntersectionObserverInit;
}

export default function useIntersectionObserver({ onIntersect, options }: IntersectionObserverProps) {
  const [ref, setRef] = useState(null);

  function handleIntersection([entry]: IntersectionObserverEntry[]) {
    if (entry.isIntersecting) {
      onIntersect();
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, options);

    if (ref) {
      observer.observe(ref);
    }

    return () => {
      if (ref) {
        observer.unobserve(ref);
      }
    }
  }, [ref])

  return [setRef];
}
