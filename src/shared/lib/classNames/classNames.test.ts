import { classNames } from './classNames';

describe('classNames', () => {
    test('basic behavior', () => {
        expect(classNames('class')).toBe('class');
    });

    test('with additional class', () => {
        const expected = 'class class2';

        expect(classNames('class', {}, ['class2'])).toBe(expected);
    });

    test('with additional class and mode', () => {
        const expected = 'class class2 hovered';

        expect(classNames('class', { hovered: true }, ['class2'])).toBe(expected);
    });

    test('with additional class and mode is undefined', () => {
        const expected = 'class class2';

        expect(classNames('class', { hovered: undefined }, ['class2'])).toBe(expected);
    });
});
