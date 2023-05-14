"use strict";
let emni;
emni = 'next level web development';
//emni ta ashole kon type sheta define kore kaj
//kora ta ee holo type aseertion kora
emni.length;
function kgtogrm(param) {
    if (typeof param === 'string') {
        const value = parseFloat(param) * 1000;
        return `converted value ${value}`;
    }
    if (typeof param === "number") {
        const value = param * 1000;
        return value;
    }
}
const result = kgtogrm(1000); //assertion diye janay dilam je ekhane number type hobe
const result1 = kgtogrm('23');
try {
}
catch (err) {
    console.log(err.message);
}
