import { motion } from 'motion/react';
import { staggerContainer, staggerItem } from '../util/motion';
import '../style/UI/components.css';

export default function Testimonials({ items }) {
  return (
    <motion.div
      className="grid grid--3"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      {items.map((t) => (
        <motion.div key={t.id} className="card testimonial" variants={staggerItem}>
          <div className="testimonial__stars">{'★'.repeat(t.rating)}</div>
          <p className="testimonial__text">“{t.text}”</p>
          <p className="testimonial__author">{t.name}</p>
          <p className="testimonial__role">{t.role}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}