"use strict";

var _module = require("./module");
describe('CalculateAge', () => {
  it('should throw an error if no argument is provided', () => {
    expect(() => (0, _module.calculateAge)()).toThrow("No argument was provided.");
  });
  it('should return the correct age', () => {
    const p = {
      birth: new Date('2002-05-22')
    };
    const currentYear = new Date().getFullYear();
    const expectedAge = currentYear - 2002;
    expect((0, _module.calculateAge)(p)).toEqual(expectedAge);
  });
  it('should convert a valid string birth date (yyyy-mm-dd) to a Date object and calculate the age', () => {
    const p = {
      birth: '2002-05-22'
    };
    const currentYear = new Date().getFullYear();
    const expectedAge = currentYear - 2002;
    expect((0, _module.calculateAge)(p)).toEqual(expectedAge);
  });
  it('should throw an error if the object does not contain a birth field', () => {
    const p = {};
    expect(() => (0, _module.calculateAge)(p)).toThrow("The object does not contain a 'birth' field.");
  });
  it('should throw an error if the provided date is invalid', () => {
    const p = {
      birth: new Date('invalid-date')
    };
    expect(() => (0, _module.calculateAge)(p)).toThrow("The provided date is not valid.");
  });
  it('should throw an error if the date format is invalid (dd-mm-yy instead of yyyy-mm-dd)', () => {
    const p = {
      birth: '22-05-2002'
    };
    expect(() => (0, _module.calculateAge)(p)).toThrow("The date format is invalid. It should be yyyy-mm-dd.");
  });
});
describe('isValidAge', () => {
  it('should return true if the user is 18 or older', () => {
    const validDate = new Date(new Date().setFullYear(new Date().getFullYear() - 18));
    expect((0, _module.isValidAge)(validDate)).toBe(true);
  });
  it('should return false if the user is under 18', () => {
    const under18Date = new Date(new Date().setFullYear(new Date().getFullYear() - 17));
    expect((0, _module.isValidAge)(under18Date)).toBe(false);
  });
});
describe('isValidPostalCode', () => {
  it('should return true for a valid postal code', () => {
    expect((0, _module.isValidPostalCode)('75001')).toBe(true);
  });
  it('should return false for an invalid postal code', () => {
    expect((0, _module.isValidPostalCode)('ABCDE')).toBe(false);
    expect((0, _module.isValidPostalCode)('123')).toBe(false);
    expect((0, _module.isValidPostalCode)('123456')).toBe(false);
  });
});
describe('isValidName', () => {
  it('should return true for a valid name', () => {
    expect((0, _module.isValidName)('Pierre-Alexis')).toBe(true);
    expect((0, _module.isValidName)('María')).toBe(true);
    expect((0, _module.isValidName)('Loïs')).toBe(true);
    expect((0, _module.isValidName)("O'Connor")).toBe(true);
  });
  it('should return false for an invalid name', () => {
    expect((0, _module.isValidName)('JAlex123')).toBe(false);
    expect((0, _module.isValidName)('JAlex@Doe')).toBe(false);
    // Dsl Elon Ton fils peut pas être inscrit au capyclub
    expect((0, _module.isValidName)('X Æ A-12')).toBe(false);
  });
});
describe('isValidEmail', () => {
  it('should return true for a valid email', () => {
    expect((0, _module.isValidEmail)('test@example.com')).toBe(true);
    expect((0, _module.isValidEmail)('user.name+tag+sorting@example.com')).toBe(true);
  });
  it('should return false for an invalid email', () => {
    expect((0, _module.isValidEmail)('plainaddress')).toBe(false);
    expect((0, _module.isValidEmail)('@@example.com')).toBe(false);
    expect((0, _module.isValidEmail)('email.example.com')).toBe(false);
    expect((0, _module.isValidEmail)('email@example@example.com')).toBe(false);
  });
});