"use strict";
// //generic type
// type GenericType<T> = Array<T>;
// const rollNumbers1:GenericType<number> = [44,44,44];
// const rollNumbers2:GenericType<string> = ['4','4'];
// //generic Interface
// interface crushInterface<T,U>{
//     name:string,
//     husband:T,
//     wife:U,
// }
// const crush11:crushInterface<boolean,string>={
//     name:'rsfi',
//     husband:true,
//     wife:'sokina',
// }
// const crush22:crushInterface<string,boolean>={
//     name:'ra',
//     husband:'rafi',
//     wife:false
// }
// const crush33:crushInterface<object,number>={
//     name:'gen',
//     husband:{
//         name:'hus',
//         salary:45,
//     },
//     wife:4,
// }
// //generic type
// type genericTuple<X,Y> = [X,Y];
// interface relationshipSalaryInterface {
//     name:string,
//     age:number,
// }
// const relationshipSalary:genericTuple<relationshipSalaryInterface,string> = [
//     {
//         name:'rafi',
//         age:45,
//     },
//     'kala'
// ]
