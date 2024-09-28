"use strict";

function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;

    const LIMIT = Math.floor(Math.sqrt(num));

    for (let i = 3; i < LIMIT; i++) {
        if (num % i === 0) return false;
    }

    return true;
}