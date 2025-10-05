export function validateForm({ name, email, password }) {
  if (!name || !email || !password) return false;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) return false;

  if (password.length < 6) return false;

  return true;
}
