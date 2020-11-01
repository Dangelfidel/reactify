import { sum } from './sum';

test('basic', () => {
  expect(sum(0,2)).toBe(2);
});

test('basic again', () => {
  expect(sum(1, 2)).toBe(3);
})