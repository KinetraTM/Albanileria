import { useState } from 'react';
import '../style/UI/components.css';
export default function Accordion({ items }) {
  const [open, setOpen] = useState(null);
  return (
    <div>
      {items.map((it) => (
        <div key={it.id} className={`accordion ${open === it.id ? 'accordion--open' : ''}`}>
          <button className="accordion__header" onClick={() => setOpen(open === it.id ? null : it.id)} aria-expanded={open === it.id}>
            <span>{it.question}</span>
            <span>{open === it.id ? '−' : '+'}</span>
          </button>
          <div className="accordion__panel"><p>{it.answer}</p></div>
        </div>
      ))}
    </div>
  );
}
