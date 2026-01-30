"use client";

import { useEffect, useRef, useState } from "react";

export function useInView(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target); // animate once
        }
      },
      { threshold: 0.2, ...options },
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [options]);

  return { ref, visible };
}
