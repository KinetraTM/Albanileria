import { useRef } from 'react';
import { useScramble } from '../util/scramble';

export default function Scramble({
  as: Tag = 'span',
  text,
  chars,
  duration,
  trigger = 'load',
  delay = 0,
  className,
  children,
  ...props
}) {
  const ref = useRef(null);
  const finalText = text ?? (typeof children === 'string' ? children : undefined);

  useScramble(ref, {
    text: finalText,
    chars,
    duration,
    trigger,
    delay,
  });

  return (
    <Tag ref={ref} className={className} aria-label={finalText} {...props}>
      {children}
    </Tag>
  );
}