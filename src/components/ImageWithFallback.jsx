import { useState } from 'react';
export default function ImageWithFallback({ src, alt, ...props }) {
  const [err, setErr] = useState(false);
  if (err) return <div style={{ background: '#e5e7eb', height: 200, borderRadius: 8 }} />;
  return <img src={src} alt={alt} onError={() => setErr(true)} {...props} />;
}
