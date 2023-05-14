"use strict";
// //abstruct 2 vhabe kora jay(interface diya or abstruct diya)
class Car {
    constructor(name, brand, model) {
        this.name = name;
        this.brand = brand;
        this.model = model;
    }
    startEngine() {
        console.log(' I am starting Engine ');
    }
    stopEngine() {
        console.log('I am stopping engine');
    }
    move() {
        console.log('I am stopping engine');
    }
}
const vehicle1 = new Car('car', 'BMW', '2000');
//abstruct class
// abstract class Vehicle{
//         constructor(
//         public name:string,
//         public brand:string,
//         public model: string
//     ){ }
//    abstract   startEngine(): void 
//    abstract stopEngine(): void
//     move(): void {
//         console.log('I am stopping engine');
//     }
// }
// class Car extends Vehicle{
//    startEngine(): void {
//        console.log('I am starting engine');
//    }
//    stopEngine(): void {
//        console.log('I am stopping engine');
//    }
// }
const car1 = new Car('car', 'honda', '20145');
console.log(car1.startEngine());
console.log(car1.stopEngine());
console.log(car1.brand);
