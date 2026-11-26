import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Section from '../components/Section';
import Card from '../components/Card';
import { works, workCategories } from '../data/works';

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

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, background: 'rgba(0,0,0,.85)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        zIndex: 100, padding: 16, overflow: 'auto',
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: 'var(--bg-secondary)', borderRadius: 16, maxWidth: 900, width: '100%',
          padding: 24, position: 'relative',
        }}
      >
        <button
          onClick={onClose}
          style={{ position: 'absolute', top: 12, right: 16, background: 'none', border: 'none', color: 'var(--text-primary)', fontSize: '1.5rem', cursor: 'pointer' }}
          aria-label="Cerrar"
        >
          ✕
        </button>
        <img src={work.images[imgIndex]} alt={work.title} style={{ width: '100%', height: 360, objectFit: 'cover', borderRadius: 12, marginBottom: 12 }} />
        {work.images.length > 1 && (
          <div style={{ display: 'flex', gap: 8, marginBottom: 16, overflowX: 'auto' }}>
            {work.images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt=""
                onClick={() => setImgIndex(i)}
                style={{ width: 72, height: 54, objectFit: 'cover', borderRadius: 6, cursor: 'pointer', border: i === imgIndex ? '2px solid var(--accent-primary)' : '2px solid transparent' }}
              />
            ))}
          </div>
        )}
        <h2 style={{ color: 'var(--accent-primary)', marginBottom: 4 }}>{work.title}</h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '.85rem', textTransform: 'uppercase', letterSpacing: '.06em', marginBottom: 12 }}>
          {work.category} · {work.location} · {work.year}
        </p>
        <p style={{ color: 'var(--text-secondary)', marginBottom: 16 }}>{work.fullDescription}</p>
        <h3 style={{ color: 'var(--text-primary)', fontSize: '1rem', marginBottom: 8 }}>Detalles técnicos</h3>
        <ul style={{ color: 'var(--text-secondary)', paddingLeft: 18, margin: 0 }}>
          {work.technicalDetails.map((d) => <li key={d}>{d}</li>)}
        </ul>
      </div>
    </div>
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
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 24 }}>
          {workCategories.map((c) => (
            <button
              key={c.value}
              className={`btn ${filter === c.value ? 'btn--accent' : 'btn--secondary'}`}
              onClick={() => setFilter(c.value)}
              style={{ padding: '8px 16px', fontSize: '.85rem' }}
            >
              {c.label}
            </button>
          ))}
        </div>
        <div className="grid grid--3">
          {filtered.map((w) => (
            <div key={w.id} onClick={() => open(w)} style={{ cursor: 'pointer' }}>
              <Card title={w.title} text={w.shortDescription} image={w.coverImage} meta={`${w.category} · ${w.year} · ${w.location}`} />
            </div>
          ))}
        </div>
      </Section>

      {selected && <Detail key={selected.id} work={selected} onClose={close} />}
    </>
  );
}
