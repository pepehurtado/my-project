"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

/**
 * Entrada sutil al hacer scroll.
 *
 * Regla no negociable: el contenido nunca puede quedarse invisible.
 * - Sin JavaScript, el <noscript> del layout lo fuerza a visible.
 * - Sin IntersectionObserver, se muestra de inmediato.
 * - Si el observer no dispara por cualquier motivo, un temporizador de
 *   seguridad lo muestra igualmente.
 * - Con prefers-reduced-motion, aparece sin transición.
 */
export function Reveal({ children, delay = 0, className }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(element);
    const safety = window.setTimeout(() => setVisible(true), 1200);

    return () => {
      observer.disconnect();
      window.clearTimeout(safety);
    };
  }, []);

  return (
    <div
      ref={ref}
      data-reveal={visible ? "in" : "out"}
      style={delay ? { transitionDelay: `${delay}s` } : undefined}
      className={`reveal${className ? ` ${className}` : ""}`}
    >
      {children}
    </div>
  );
}

export default Reveal;
