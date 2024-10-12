export interface Seed<T> {
    readonly seed: T;
    next(): T;
}

export class Mulberry32 implements Seed<number> {
    readonly seed: number;
    private current: number;

    constructor(seed: number = 0) {
        this.seed = seed;
        this.current = seed;
    }

    next(): number {
        this.current = (this.current + 0x6d45d1) | 0;
        let t = Math.imul(this.current ^ (this.current >>> 15), 1 | this.current);
        t = (t + Math.imul(t ^ (t >>> 7), 0x9e3779b9)) | 0;
        this.current = (t ^ (t >>> 13)) >>> 0;
        return this.current / 4294967296;
    }
}
