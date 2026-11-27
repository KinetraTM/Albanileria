import { useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import { site } from '../data/site';
import { contact } from '../data/contact';
import { heroContainer, heroItem } from '../util/motion';
import { useSplitText } from '../util/split';
import { animate, onScroll } from 'animejs';
import CountUp from '../components/CountUp';
import '../style/UI/components.css';

export default function Header() {
  const eyebrowRef = useRef(null);
  const titleRef = useRef(null);
  const headerRef = useRef(null);
  const imgRef = useRef(null);

  useSplitText(eyebrowRef, {
    unit: 'chars',
    duration: 900,
    trigger: 'load',
    fromY: 14,
    blur: true,
  });
  useSplitText(titleRef, {
    unit: 'chars',
    duration: 1100,
    trigger: 'load',
    fromY: 26,
    blur: true,
  });

  useEffect(() => {
    const header = headerRef.current;
    const img = imgRef.current;
    if (!header || !img) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;

    const anim = animate(img, {
      scale: [1.05, 1.2],
      y: [0, 90],
      autoplay: onScroll({
        target: header,
        enter: 'top top',
        leave: 'bottom top',
        sync: 'playback',
      }),
    });

    return () => anim.revert();
  }, []);

  return (
    <header ref={headerRef} className="header">
      <img ref={imgRef} className="header__img" src={site.heroImage} alt={site.clientName} />
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
        <motion.p ref={eyebrowRef} className="header__eyebrow" variants={heroItem}>
          ALBAÑILERÍA Y CONSTRUCCIÓN · CÓRDOBA
        </motion.p>
        <motion.h1 ref={titleRef} className="header__title" variants={heroItem}>
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
              <CountUp className="header__stat-value" value={s.value} duration={1500} />
              <span className="header__stat-label">{s.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </header>
  );
}