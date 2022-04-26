import showHealth from '../health';

test('healthy', () => {
  const received = showHealth({ name: 'Маг', health: 90 });
  expect(received).toBe('healthy');
});

test('wounded', () => {
  const received = showHealth({ name: 'Маг', health: 40 });
  expect(received).toBe('wounded');
});

test('critical', () => {
  const received = showHealth({ name: 'Маг', health: 10 });
  expect(received).toBe('critical');
});

test('Error!', () => {
  expect(() => {
    showHealth({ name: 'Маг', health: 'Маг' });
  }).toThrow();
});

test('Error!', () => {
  expect(() => {
    showHealth({ name: 'Маг', health: -20 });
  }).toThrow();
});

test('Error!', () => {
  expect(() => {
    showHealth({});
  }).toThrow();
});
