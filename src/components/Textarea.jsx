import '../style/UI/components.css';
export default function Textarea({ label, error, ...props }) {
  return (
    <div className="field">
      {label && <label>{label}</label>}
      <textarea className="textarea" rows={4} {...props} />
      {error && <p className="field__error">{error}</p>}
    </div>
  );
}
