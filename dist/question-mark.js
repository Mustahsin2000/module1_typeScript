"use strict";
var _a, _b;
const agee = 22;
// if(agee>=18){
//     console.log('yes');
// }else{
//     console.log('no');
// }
//ternary operator
const isAdult = agee >= 18 ? 'Yes' : 'No';
console.log(isAdult);
//Nullish coalescing operator
//Null and undefined
//dekhbo othentic user kina?
//na hole guest hishebe print kore dibo
const isAuthenticUser = '';
const userName = isAuthenticUser !== null && isAuthenticUser !== void 0 ? isAuthenticUser : 'guest'; //double ?? mane Nullish Coenslencing operator
const userName2 = isAuthenticUser ? isAuthenticUser : 'guest';
console.log({ userName }, { userName2 });
const manush1 = {
    name: 'rafi',
    age: 14,
    address: {
        city: 'NO City',
        road: 'No Road',
    }
};
const home = (_b = (_a = manush1 === null || manush1 === void 0 ? void 0 : manush1.address) === null || _a === void 0 ? void 0 : _a.home) !== null && _b !== void 0 ? _b : 'No Home';
console.log({ home });
