// class Person{
//     takeNap(){
//         console.log('I am sleeping for 8 hours');
//     }
// }

// class Student extends Person{
//     takeNap(): void {
//         console.log('I am sleeping 10  hours per day');
//     }
// }

// class Developer extends Person{
//     takeNap(): void {
//         console.log(`I am sleeping for 5 hours`);
//     }
// }

// function getNap(param:Person){
//     param.takeNap();
// }

// const person1 = new Person();
// const person2 = new Student();
// const person3 = new Developer();

// getNap(person1);
// getNap(person2);
// getNap(person3);



// //different example
// class Shape{
//     getArea():number{
//         return 0;
//     }
// }

// class Circle extends Shape{
//     radius:number;
//     constructor(radius:number){
//         super();
//         this.radius = radius;
//     }

//     getArea(): number {
//         return Math.PI*this.radius*this.radius;
//     }
// }

// class Rectangle extends Shape{
//     height:number;
//     width:number;
//     constructor(
//         height:number,
//     width:number
//     ){
//         super();
//         this.height = height;
//         this.width = width;
//     }
//     getArea(): number {
//         return this.width*this.height;
//     }
// }

// function getAreofShape(param:Shape){
//     console.log(param.getArea());
// }

// getAreofShape(new Circle(10));
// getAreofShape(new Rectangle(2,2));