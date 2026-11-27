import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import Section from '../components/Section';
import Card from '../components/Card';
import { works, workCategories } from '../data/works';
import { staggerContainer, staggerItem } from '../util/motion';
import { ArrowLeft, MapPin, Calendar, Tag, X, ChevronLeft, ChevronRight } from 'lucide-react';

function Detail({ work, onClose }) {
  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') setImgIndex((i) => (i + 1) % work.images.length);
      if (e.key === 'ArrowLeft') setImgIndex((i) => (i - 1 + work.images.length) % work.images.length);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [work, onClose]);

  const prev = () => setImgIndex((i) => (i - 1 + work.images.length) % work.images.length);
  const next = () => setImgIndex((i) => (i + 1) % work.images.length);

  return (
    <motion.div
      key="overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, background: 'rgba(0,0,0,.78)',
        backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        zIndex: 100, padding: 16, overflow: 'auto',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.98 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        style={{
          background: 'var(--bg-secondary)', borderRadius: 20, maxWidth: 980, width: '100%',
          padding: 0, position: 'relative', overflow: 'hidden',
          boxShadow: '0 30px 80px rgba(0,0,0,.5)',
          border: '1px solid var(--border-subtle)',
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute', top: 12, right: 16, zIndex: 2,
            background: 'rgba(11,18,32,.6)', border: '1px solid var(--border-subtle)',
            color: 'var(--text-primary)', fontSize: '1.25rem', cursor: 'pointer',
            width: 36, height: 36, borderRadius: '50%', display: 'flex',
            alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(4px)',
          }}
          aria-label="Cerrar"
        >
          <X size={18} />
        </button>

        <div
          style={{
            display: 'grid', gap: 0,
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          }}
        >
          {/* Galería de imágenes */}
          <div style={{ background: 'var(--bg-primary)', padding: 20, display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div style={{ position: 'relative', borderRadius: 14, overflow: 'hidden', height: 340, background: '#0b1220' }}>
              <AnimatePresence mode="wait">
                <motion.img
                  key={imgIndex}
                  src={work.images[imgIndex]}
                  alt={work.title}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </AnimatePresence>
              {work.images.length > 1 && (
                <>
                  <button
                    onClick={prev}
                    aria-label="Anterior"
                    style={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)', background: 'rgba(0,0,0,.5)', border: 'none', color: '#fff', width: 34, height: 34, borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={next}
                    aria-label="Siguiente"
                    style={{ position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)', background: 'rgba(0,0,0,.5)', border: 'none', color: '#fff', width: 34, height: 34, borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                  >
                    <ChevronRight size={18} />
                  </button>
                </>
              )}
            </div>
            {work.images.length > 1 && (
              <div style={{ display: 'flex', gap: 8, overflowX: 'auto', paddingBottom: 4 }}>
                {work.images.map((img, i) => (
                  <motion.img
                    key={i}
                    src={img}
                    alt=""
                    onClick={() => setImgIndex(i)}
                    whileHover={{ scale: 1.06 }}
                    whileTap={{ scale: 0.96 }}
                    style={{
                      width: 72, height: 54, objectFit: 'cover', borderRadius: 8, cursor: 'pointer',
                      border: i === imgIndex ? '2px solid var(--accent-primary)' : '2px solid transparent',
                      opacity: i === imgIndex ? 1 : 0.6,
                      flexShrink: 0,
                    }}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Información */}
          <div style={{ padding: 28, display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.4 }}
                style={{ color: 'var(--accent-primary)', marginBottom: 6, fontSize: '1.6rem', fontFamily: 'var(--font-display)', textTransform: 'uppercase', letterSpacing: '.04em' }}
              >
                {work.title}
              </motion.h2>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, color: 'var(--text-muted)', fontSize: '.85rem' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}><Tag size={14} /> {work.category}</span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}><MapPin size={14} /> {work.location}</span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}><Calendar size={14} /> {work.year}</span>
              </div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.4 }}
              style={{ color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}
            >
              {work.fullDescription}
            </motion.p>

            <div>
              <h3 style={{ color: 'var(--text-primary)', fontSize: '1rem', marginBottom: 8 }}>Detalles técnicos</h3>
              <motion.ul
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                style={{ color: 'var(--text-secondary)', paddingLeft: 0, margin: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 6 }}
              >
                {work.technicalDetails.map((d) => (
                  <motion.li
                    key={d}
                    variants={staggerItem}
                    style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '.9rem' }}
                  >
                    <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent-primary)', flexShrink: 0 }} />
                    {d}
                  </motion.li>
                ))}
              </motion.ul>
            </div>

            <div style={{ marginTop: 'auto', display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <button
                onClick={onClose}
                className="btn btn--secondary"
                style={{ padding: '10px 18px', fontSize: '.85rem' }}
              >
                Volver a la galería
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Galeria() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filter, setFilter] = useState('todas');

  const selectedId = searchParams.get('id');
  const selected = works.find((w) => w.id === selectedId) || null;

  const filtered = filter === 'todas' ? works : works.filter((w) => w.category === filter);

  const open = (w) => setSearchParams({ id: w.id });
  const close = () => setSearchParams({});

  return (
    <>
      <Section id="galeria" title="Galería de obras" subtitle="Todos nuestros trabajos realizados">
        <div style={{ display: 'flex', justifyContent: 'flex-start', marginBottom: 16 }}>
          <Link to="/" className="btn btn--secondary" style={{ padding: '8px 16px', fontSize: '.85rem', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            <ArrowLeft size={16} /> Volver al inicio
          </Link>
        </div>

        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 24 }}>
          {workCategories.map((c) => (
            <motion.button
              key={c.value}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className={`btn ${filter === c.value ? 'btn--accent' : 'btn--secondary'}`}
              onClick={() => setFilter(c.value)}
              style={{ padding: '8px 16px', fontSize: '.85rem' }}
            >
              {c.label}
            </motion.button>
          ))}
        </div>

        <motion.div
          className="grid grid--3"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          key={filter}
        >
          {filtered.map((w) => (
            <div key={w.id} onClick={() => open(w)} style={{ cursor: 'pointer' }}>
              <Card
                title={w.title}
                text={w.shortDescription}
                image={w.coverImage}
                meta={`${w.category} · ${w.year} · ${w.location}`}
              />
            </div>
          ))}
        </motion.div>
      </Section>

      <AnimatePresence>
        {selected && <Detail key={selected.id} work={selected} onClose={close} />}
      </AnimatePresence>
    </>
  );
}