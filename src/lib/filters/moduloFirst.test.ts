import {describe,it,expect} from 'vitest';
import {ModuloFirstFindN} from './moduloFirst';

describe('ModuloFirst Filter', () => {
    it('ModuloFirst a sequence', () => {
        const input = [4,2,8,3,9,4,10,5,11,6];
        const expected = [0,2,0,3,1,0,2,1,3,2];
        expect(ModuloFirstFindN(input)).toEqual(expected);
    });
});