/**
 * Calculate a person(s) age in years.
 *
 * @param {object} p An object with a birth property.
 * @returns {number} The age of the person in Year of p.
 */
export function calculateAge(p) {
    if (!p) {
        throw new Error("No argument was provided.");
    }

    if (!p.hasOwnProperty('birth')) {
        throw new Error("The object does not contain a 'birth' field.");
    }

    if (typeof p.birth === 'string') {
        const dateFormat = /^\d{4}-\d{2}-\d{2}$/;
        if (!dateFormat.test(p.birth)) {
            throw new Error("The date format is invalid. It should be yyyy-mm-dd.");
        }
        p.birth = new Date(p.birth);
    }

    if (!(p.birth instanceof Date) || isNaN(p.birth.getTime())) {
        throw new Error("The provided date is not valid.");
    }

    let dateDiff = new Date(Date.now() - p.birth.getTime());
    let age = Math.abs(dateDiff.getUTCFullYear() - 1970);

    return age;
}


/**
 * Check if the minimum Age is set on the form.
 *
 * @param {object} birthDate An object with a birth property.
 * @returns {boolean} if the age of the person is not below 18.
 */
export function isValidAge(birthDate) {
    const currentDate = new Date();
    const age = calculateAge({ birth: birthDate });

    if (age < 18) {
        return false;
    }
    return true;
}

/**
 * Check of the postal code is valid (On French Format).
 *
 * @param {object} postalCode An number .
 * @returns {boolean} test if the postalCode have 5 number rannging from 0 to 9.
 */
export function isValidPostalCode(postalCode) {
    const postalCodePattern = /^[0-9]{5}$/;
    return postalCodePattern.test(postalCode);
}

/**
 * Check if the name is valid.
 *
 * @param {object} name An string .
 * @returns {boolean} test if the name have only letters, spaces, hyphens and apostrophes.
 */
export function isValidName(name) {
    const namePattern = /^[a-zA-Zà-ÿÀ-Ÿ' -]+$/;
    return namePattern.test(name);
}

/**
 * Check if the email is valid.
 *
 * @param email
 * @returns {boolean}
 */
export function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}