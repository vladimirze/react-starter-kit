import { increment, decrement } from './calculator';


describe('increment', () => {
    test('it should increment', () => {
        expect(increment(1)).toBe(2);
    })
})

describe('decrement', () => {
    test('it should decrement', () => {
        expect(decrement(0)).toBe(-1);
    })
})
