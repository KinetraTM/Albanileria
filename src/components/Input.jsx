import '../style/UI/components.css';
export default function Input({ label, error, ...props }) {
  return (
    <div className="field">
      {label && <label>{label}</label>}
      <input className="input" {...props} />
      {error && <p className="field__error">{error}</p>}
    </div>
  );
}
