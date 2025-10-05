import { validateForm } from './validate.js';

describe('Form Validation', () => {
  test('returns false if fields are empty', () => {
    expect(validateForm({ name: '', email: '', password: '' })).toBe(false);
  });

  test('returns false for invalid email', () => {
    expect(validateForm({ name: 'John', email: 'john@', password: '123456' })).toBe(false);
  });

  test('returns false for short password', () => {
    expect(validateForm({ name: 'John', email: 'john@example.com', password: '123' })).toBe(false);
  });

  test('returns true for valid inputs', () => {
    expect(
      validateForm({ name: 'John', email: 'john@example.com', password: 'abcdef' })
    ).toBe(true);
  });
});
