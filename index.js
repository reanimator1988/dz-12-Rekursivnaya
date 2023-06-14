"use strict";

function reccursivePow(num, degree) {
    if (typeof num !== 'number' || !Number.isInteger(num) || num < 0) {
        console.log('Invalid num');
    }
    if (degree === 0) {
        return 1;
    }
    return num * reccursivePow(num, degree - 1);
}
console.log(reccursivePow(5, 3));