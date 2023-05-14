"use strict";
//normal function
//default perameter
function add(num1 = 10, num2 = 20) {
    return num1 + num2;
}
console.log(add());
//spread operator
const myfriends = ['rafi', 'kafi', 'tafi'];
const newfriends = ['aro', 'paru', 'charu'];
myfriends.push(...newfriends);
console.log(myfriends);
const arrowFunction = (num1, num2) => num1 + num2;
const arr = [1, 2, 5];
const newArray = arr.map((element) => element * element);
const person = {
    name: 'rafi',
    balance: 5,
    addBalance(money) {
        return `My new balance is ${this.balance + money}`;
    },
};
//rest operator or perameter
const greetOperator = (...friends) => friends.forEach((friend) => console.log(`Hi ${friend}`));
greetOperator('ami', 'tumi', 'danish', 'gao', 'chao', 'hao', 'kaka');
//array or object destructuring
const myBestfriends = {
    fullName: 'abul bashar',
    age: 21,
};
const { fullName } = myBestfriends;
const { age } = myBestfriends;
console.log(fullName, age);
