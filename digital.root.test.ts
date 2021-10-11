import {SumOfDigits} from './digital.root';

let sumOfDigits = new SumOfDigits(456);
let sumOfDigits1 = new SumOfDigits(16);
let sumOfDigits2 = new SumOfDigits(4);
let sumOfDigits3 = new SumOfDigits(942);
let sumOfDigits4 = new SumOfDigits(132189);
let sumOfDigits5 = new SumOfDigits(493193);

describe('Tests for the Digital Root sum.', () => 
{
    test('It receives 456 and should return 6', () => 
    {
        expect(sumOfDigits.digitalRoot()).toBe(6);
    });

    test('It receives 16 and should return 7', () => 
    {
        expect(sumOfDigits1.digitalRoot()).toBe(7);
    });

    test('It receives 4 and should return 4', () => 
    {
        expect(sumOfDigits2.digitalRoot()).toBe(4);
    });

    test('It receives 942 and should return 6', () => 
    {
        expect(sumOfDigits3.digitalRoot()).toBe(6);
    });

    test('It receives 132189 and should return 6', () => 
    {
        expect(sumOfDigits4.digitalRoot()).toBe(6);
    });

    test('It receives 493193 and should return 2', () => 
    {
        expect(sumOfDigits5.digitalRoot()).toBe(2);
    });
});