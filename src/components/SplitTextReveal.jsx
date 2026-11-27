import { useRef } from 'react';
import { useSplitText } from '../util/split';

export default function SplitTextReveal({
  as: Tag = 'span',
  unit = 'chars',
  duration,
  delay = 0,
  trigger = 'view',
  fromY,
  blur,
  className,
  children,
  ...props
}) {
  const ref = useRef(null);
  useSplitText(ref, { unit, duration, delay, trigger, fromY, blur });
  return (
    <Tag ref={ref} className={className} {...props}>
      {children}
    </Tag>
  );
}