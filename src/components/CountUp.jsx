import { useRef, useEffect } from 'react';
import { animate } from 'animejs';

export default function CountUp({ value, duration = 1400, className, ...props }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const match = String(value).match(/^(\d+)(.*)$/);
    const target = match ? parseInt(match[1], 10) : 0;
    const suffix = match ? match[2] : '';

    if (reduced) {
      el.textContent = value;
      return;
    }

    const obj = { val: 0 };
    const anim = animate(obj, {
      val: target,
      duration,
      ease: 'outExpo',
      onUpdate: () => {
        el.textContent = Math.round(obj.val) + suffix;
      },
    });

    return () => anim.revert();
  }, [value, duration]);

  return (
    <span ref={ref} className={className} aria-label={value} {...props}>
      {value}
    </span>
  );
}