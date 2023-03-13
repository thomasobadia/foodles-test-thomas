import {
    rankWordFrequency
} from "../src/rankWordFrequency";

describe('rankWordFrequency function', () => {
    it('returns the correct word frequency ranking', () => {
        const sentence = 'the quick brown fox jumps over the lazy dog';
        const n = 3;
        const result = rankWordFrequency(sentence, n);

        expect(result).toEqual([
            ['the', 2],
            ['brown', 1],
            ['dog', 1]
        ]);
    });

    it('should return the correct result for a sentence with repeating words', () => {
        const sentence = 'baz bar foo foo zblah zblah zblah baz toto bar';
        const n = 3;
        const result = rankWordFrequency(sentence, n);

        expect(result).toEqual([
            ['zblah', 3],
            ['bar', 2],
            ['baz', 2],
        ]);
    });

    it('should return all words when n is larger than the number of distinct words', () => {
        const sentence = 'baz bar foo';
        const n = 5;
        const result = rankWordFrequency(sentence, n);

        expect(result).toEqual([
            ['bar', 1],
            ['baz', 1],
            ['foo', 1],
        ]);
    });


    it('should not be case sensitive', () => {
        const sentence = 'hello world Hello World';
        const n = 2;
        const result = rankWordFrequency(sentence, n);

        expect(result).toEqual([
            ['hello', 2],
            ['world', 2],
        ]);
    });
});