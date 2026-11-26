import '../style/UI/components.css';
export default function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="section reveal">
      <div className="container">
        {title && <h2 className="section__title">{title}</h2>}
        {subtitle && <p className="section__subtitle">{subtitle}</p>}
        {children}
      </div>
    </section>
  );
}
