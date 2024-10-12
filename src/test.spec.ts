import { Mulberry32 } from './index';

describe('Mulberry32', () => {
    it('generates the same sequence for the same mulberry32', () => {
        const seed = 12345;
        const generator1 = new Mulberry32(seed);
        const generator2 = new Mulberry32(seed);

        for (let i = 0; i < 1000; i++) {
            expect(generator1.next()).toBe(generator2.next());
        }
    });

    it('generates different sequences for different seeds', () => {
        const generator1 = new Mulberry32(12345);
        const generator2 = new Mulberry32(54321);

        for (let i = 0; i < 1000; i++) {
            expect(generator1.next()).not.toBe(generator2.next());
        }

    });

    it('generates numbers within the expected range', () => {
        const generator = new Mulberry32(12345);

        for (let i = 0; i < 1000; i++) {
            const randomNumber = generator.next();
            expect(randomNumber).toBeGreaterThanOrEqual(0);
            expect(randomNumber).toBeLessThan(1);
        }
    });
});
