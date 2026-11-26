import { site } from '../data/site';
import { contact } from '../data/contact';
import '../style/UI/components.css';
export default function Header() {
  return (
    <header className="header">
      <img className="header__img" src={site.heroImage} alt={site.clientName} />
      <div className="header__overlay">
        <img src={site.logo} alt="Logo" style={{ width: 64, height: 64, marginBottom: 16 }} />
        <p className="header__eyebrow">ALBAÑILERÍA Y CONSTRUCCIÓN · CÓRDOBA</p>
        <h1 className="header__title">{site.tagline}</h1>
        <p className="header__tagline">{site.about}</p>
        <div className="header__cta">
          <a className="btn btn--accent" href={`https://wa.me/${contact.whatsapp}`}>Contactar por WhatsApp</a>
        </div>
        <div className="header__stats">
          {site.stats.map((s) => (
            <div key={s.label} className="header__stat">
              <span className="header__stat-value">{s.value}</span>
              <span className="header__stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
