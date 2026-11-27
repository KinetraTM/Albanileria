import { motion } from 'motion/react';
import { staggerItem } from '../util/motion';
import SplitTextReveal from './SplitTextReveal';
import '../style/UI/components.css';

export default function Card({ title, text, image, meta, children }) {
  return (
    <motion.article
      className="card"
      variants={staggerItem}
      whileHover={{ y: -8, transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] } }}
    >
      {image && (
        <div className="card__img-wrap">
          <img className="card__img" src={image} alt={title} loading="lazy" />
        </div>
      )}
      {title && (
        <SplitTextReveal as="h3" className="card__title" unit="chars" duration={700} trigger="view">
          {title}
        </SplitTextReveal>
      )}
      {text && <p className="card__text">{text}</p>}
      {meta && <p className="card__meta">{meta}</p>}
      {children}
    </motion.article>
  );
}