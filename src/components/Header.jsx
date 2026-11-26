import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import { site } from '../data/site';
import { contact } from '../data/contact';
import { heroContainer, heroItem } from '../util/motion';
import '../style/UI/components.css';

export default function Header() {
  return (
    <header className="header">
      <img className="header__img" src={site.heroImage} alt={site.clientName} />
      <motion.div
        className="header__overlay"
        variants={heroContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.img
          src={site.logo}
          alt="Logo"
          style={{ width: 64, height: 64, marginBottom: 16 }}
          variants={heroItem}
        />
        <motion.p className="header__eyebrow" variants={heroItem}>
          ALBAÑILERÍA Y CONSTRUCCIÓN · CÓRDOBA
        </motion.p>
        <motion.h1 className="header__title" variants={heroItem}>
          {site.tagline}
        </motion.h1>
        <motion.p className="header__tagline" variants={heroItem}>
          {site.about}
        </motion.p>
        <motion.div className="header__cta" variants={heroItem}>
          <a className="btn btn--accent" href={`https://wa.me/${contact.whatsapp}`}>
            <MessageCircle size={18} />
            Contactar por WhatsApp
          </a>
        </motion.div>
        <motion.div className="header__stats" variants={heroContainer}>
          {site.stats.map((s) => (
            <motion.div key={s.label} className="header__stat" variants={heroItem}>
              <span className="header__stat-value">{s.value}</span>
              <span className="header__stat-label">{s.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </header>
  );
}