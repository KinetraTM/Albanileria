import { useRef } from 'react';
import { animate, scrambleText } from 'animejs';

export default function HoverScramble({ children, chars = 'a-z', duration = 500 }) {
  const ref = useRef(null);

  const run = () => {
    const el = ref.current;
    if (!el) return;
    const text = el.textContent || '';
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;
    animate(el, {
      innerHTML: scrambleText({ text, chars, duration }),
    });
  };

  return (
    <span ref={ref} onMouseEnter={run} style={{ display: 'inline-block' }}>
      {children}
    </span>
  );
}