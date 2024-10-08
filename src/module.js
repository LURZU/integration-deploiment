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