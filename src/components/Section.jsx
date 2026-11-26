import { motion } from 'motion/react';
import { fadeUp } from '../util/motion';
import '../style/UI/components.css';

export default function Section({ id, title, subtitle, children }) {
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
            className="section__title"
            variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1 } } }}
          >
            {title}
          </motion.h2>
        )}
        {subtitle && (
          <motion.p
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