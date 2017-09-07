import { sum, sum2 } from '../components/sum';
import expect from 'expect';

test('1 plus 2 equals 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('5 minus 3 equals 2', () => {
    expect(sum2(5, 3)).toBe(2);
});