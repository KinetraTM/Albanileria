import { MessageCircle } from 'lucide-react';
import { contact } from '../data/contact';
import '../style/UI/components.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>© 2026 Gustavo Burique — Albañilería y construcción</p>
        <div className="footer__links">
          {contact.socials.map((s) => (
            <a key={s.label} href={s.url} target="_blank" rel="noreferrer">
              <MessageCircle size={18} />
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}