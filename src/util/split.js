import { useEffect } from 'react';
import { animate, splitText, stagger } from 'animejs';

export function useSplitText(ref, options = {}) {
  const {
    unit = 'chars',
    duration = 900,
    delay = 0,
    trigger = 'load',
    fromY = 18,
    blur = true,
  } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;

    const split = splitText(el, { [unit]: true });
    const targets = split[unit] || [];
    if (!targets.length) return;

    let anim = null;
    let observer = null;

    const run = () => {
      anim = animate(targets, {
        opacity: [0, 1],
        y: [fromY, 0],
        ...(blur ? { filter: ['blur(6px)', 'blur(0px)'] } : {}),
        duration,
        delay: stagger(28, { start: delay }),
        ease: 'outExpo',
      });
    };

    if (trigger === 'view') {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              run();
              observer.disconnect();
            }
          });
        },
        { threshold: 0.35 }
      );
      observer.observe(el);
    } else {
      run();
    }

    return () => {
      observer?.disconnect();
      anim?.revert();
      split?.revert();
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
}