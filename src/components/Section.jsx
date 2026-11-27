import { useRef } from 'react';
import { motion } from 'motion/react';
import { fadeUp } from '../util/motion';
import { useSplitText } from '../util/split';
import '../style/UI/components.css';

export default function Section({ id, title, subtitle, children }) {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useSplitText(titleRef, {
    unit: 'chars',
    duration: 900,
    trigger: 'view',
    fromY: 16,
    blur: true,
  });
  useSplitText(subtitleRef, {
    unit: 'words',
    duration: 800,
    trigger: 'view',
    delay: 120,
    fromY: 12,
    blur: true,
  });

  return (
    <motion.section
      id={id}
      className="section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={fadeUp}
    >
      <div className="container">
        {title && (
          <motion.h2
            ref={titleRef}
            className="section__title"
            variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1 } } }}
          >
            {title}
          </motion.h2>
        )}
        {subtitle && (
          <motion.p
            ref={subtitleRef}
            className="section__subtitle"
            variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.15 } } }}
          >
            {subtitle}
          </motion.p>
        )}
        {children}
      </div>
    </motion.section>
  );
}