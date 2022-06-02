import { flatten } from './flatten-array';

test('Flattern array with nested arrays inputs.', () => {
    expect(flatten([ 1, [ 2, [ 3 ] ], 4 ])).toStrictEqual([1, 2, 3, 4]);
    
    expect(flatten([["1", ["2", ["2.5", "2.6"]]], "3", "4", ["5", ["6", "7"]]])).toStrictEqual(["1", "2", "2.5", "2.6", "3", "4", "5", "6", "7"]);

    expect(flatten([[1, [2, [2.5, 2.6]]], 3, 4, [5, [6, 7]]])).toStrictEqual([1, 2, 2.5, 2.6, 3, 4, 5, 6, 7]);
});

test('Throw error when input is not an array.', () => {

    [{}, true, "", undefined, null].forEach(dataType => {
        expect(() => {
            // @ts-ignore
            flatten(dataType);
        }).toThrow();
    });
});