import { cap, reverseString, Calculator } from './script'

test('Capitalize Test', () => {
    expect(cap("hello")).toBe("Hello");
});

test('Reverse String', () => {
    expect(reverseString("car AC")).toBe("CA rac");
});

test('Calculator Test', () => {
    const cal1 = Calculator();
    expect(cal1.add(1,1)).toBe(2);
    expect(cal1.subtract(2,1)).toBe(1);
    expect(cal1.divide(4,2)).toBe(2);
    expect(cal1.multiply(2,2)).toBe(4);
})