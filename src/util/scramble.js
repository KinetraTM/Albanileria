import { useEffect } from 'react';
import { animate, scrambleText, createScope } from 'animejs';

/**
 * Animates an element's text with anime.js scrambleText().
 *
 * @param {React.RefObject<HTMLElement>} ref
 * @param {object} options
 * @param {string} [options.text] Final text (defaults to element's textContent).
 * @param {string} [options.chars] Character set used while scrambling.
 * @param {number} [options.duration] Animation duration in ms.
 * @param {'load'|'view'} [options.trigger] When to start.
 * @param {number} [options.delay] Delay before starting.
 */
export function useScramble(ref, options = {}) {
  const {
    text,
    chars = 'a-zA-Z0-9!%#_',
    duration = 1200,
    trigger = 'load',
    delay = 0,
    revealRate,
    settleRate,
    cursor,
  } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const finalText = text ?? el.textContent ?? '';
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduced) {
      el.textContent = finalText;
      el.setAttribute('aria-label', finalText);
      return;
    }

    let scope = null;
    let observer = null;

    const run = () => {
      scope = createScope({ root: el }).add(() => {
        animate(el, {
          innerHTML: scrambleText({
            text: finalText,
            chars,
            duration,
            delay,
            ...(revealRate !== undefined ? { revealRate } : {}),
            ...(settleRate !== undefined ? { settleRate } : {}),
            ...(cursor !== undefined ? { cursor } : {}),
          }),
        });
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

    el.setAttribute('aria-label', finalText);

    return () => {
      observer?.disconnect();
      scope?.revert();
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
}