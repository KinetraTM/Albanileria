export function formatPhone(phone) {
  return phone.replace(/\s+/g, ' ').trim();
}

export function formatDate(iso) {
  if (!iso) return '';
  const [y, m] = iso.split('-');
  const months = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];
  return `${months[Number(m) - 1]} ${y}`;
}
