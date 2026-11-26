import '../style/UI/components.css';
export default function Testimonials({ items }) {
  return (
    <div className="grid grid--3">
      {items.map((t) => (
        <div key={t.id} className="card testimonial">
          <div className="testimonial__stars">{'★'.repeat(t.rating)}</div>
          <p className="testimonial__text">“{t.text}”</p>
          <p className="testimonial__author">{t.name}</p>
          <p className="testimonial__role">{t.role}</p>
        </div>
      ))}
    </div>
  );
}
