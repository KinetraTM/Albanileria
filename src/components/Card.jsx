import '../style/UI/components.css';
export default function Card({ title, text, image, meta, children }) {
  return (
    <article className="card">
      {image && <img className="card__img" src={image} alt={title} loading="lazy" />}
      {title && <h3 className="card__title">{title}</h3>}
      {text && <p className="card__text">{text}</p>}
      {meta && <p className="card__meta">{meta}</p>}
      {children}
    </article>
  );
}
