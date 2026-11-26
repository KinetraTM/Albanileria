export function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function validateForm({ name, email, message }) {
  const errors = {};
  if (!name || name.trim().length < 2) errors.name = 'Ingresá tu nombre';
  if (!validateEmail(email)) errors.email = 'Email inválido';
  if (!message || message.trim().length < 5) errors.message = 'Mensaje muy corto';
  return errors;
}
