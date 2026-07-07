"use client";

import { useEffect, useRef } from "react";

interface Props { children: React.ReactNode; className?: string; }

export default function FadeInSection({ children, className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("is-visible"); obs.unobserve(el); } },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className={`fade-in-section ${className}`}>
      {children}
    </div>
  );
}
