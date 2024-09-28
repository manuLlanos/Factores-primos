"use strict";

function isPrime(num) {
    if (num <= 1) return false;
    if (num == 2) return true;
    if (num % 2 == 0) return false;

    const LIMIT = Math.floor(Math.sqrt(num));

    for (let i = 3; i < LIMIT; i++) {
        if (num % i == 0) return false;
    }

    return true;
}

function getPrimeFactors(num) {
    if (num <= 0) return null;
    if (num == 1) return [1];
    if (isPrime(num)) return [num];

    let factors = [];
    let value = num;


    while (!isPrime(value)) {
        for (let i = 2; i <= value; i++) {
            if (value % i == 0) {
                factors.push(i);
                value /= i;
                break;
            }
        }
    }

    factors.push(value);

    return factors.sort((a, b) => a - b);
}

function formatFactorList(arr) {
    let counterObj = {};

    for (let value of arr) {
        if (value in counterObj) counterObj[value]++;
        else counterObj[value] = 1;
    }

    let formatedString = "";
    for (const base in counterObj) {
        let exp = counterObj[base];

        if (exp == 1) formatedString += `${base}`;
        else formatedString += `${base}^${counterObj[base]}`;

        formatedString += " * ";
    }
    formatedString = formatedString.slice(0, -3);

    return formatedString;
}
