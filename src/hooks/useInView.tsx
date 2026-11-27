import { useEffect, useRef, useState } from "react";

export function useInView<T extends HTMLElement>(threshold = 1) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  //useEffect (runs once): creates the IntersectionObserver and says: "watch this element"
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        } else if (entry.intersectionRatio === 0) {
          setInView(false);
        }
      },
      { threshold: [0, threshold] },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}
