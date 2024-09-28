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
