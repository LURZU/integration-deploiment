import { calculateAge } from './module';

/**
 * @function calculateAge
 */
describe('calculateAge Unit Tests Suites', () => {

    it('should throw an error if no argument is provided', () => {
        expect(() => calculateAge()).toThrow("No argument was provided.");
    });

    it('should return the correct age', () => {
        const p = {
            birth: new Date('2002-05-22')
        };

        const currentYear = new Date().getFullYear();
        const expectedAge = currentYear - 2002;

        expect(calculateAge(p)).toEqual(expectedAge);
    });

    it('should convert a valid string birth date (yyyy-mm-dd) to a Date object and calculate the age', () => {
        const p = { birth: '2002-05-22' };
        const currentYear = new Date().getFullYear();
        const expectedAge = currentYear - 2002;
        expect(calculateAge(p)).toEqual(expectedAge);
    });

    // eslint-disable-next-line jest/no-identical-title
    it('should throw an error if no argument is provided', () => {
        expect(() => calculateAge()).toThrow("No argument was provided.");
    });



    it('should throw an error if the object does not contain a birth field', () => {
        const p = {};
        expect(() => calculateAge(p)).toThrow("The object does not contain a 'birth' field.");
    });


    it('should throw an error if the provided date is invalid', () => {
        const p = { birth: new Date('invalid-date') };
        expect(() => calculateAge(p)).toThrow("The provided date is not valid.");
    });


    it('should throw an error if the date format is invalid (dd-mm-yy instead of yyyy-mm-dd)', () => {
        const p = { birth: '22-05-2002' };
        expect(() => calculateAge(p)).toThrow("The date format is invalid. It should be yyyy-mm-dd.");
    });

    it('should throw an error if the date is not valid', () => {
        const p = { birth: new Date('invalid-date') };
        expect(() => calculateAge(p)).toThrow("The provided date is not valid.");
    });

});