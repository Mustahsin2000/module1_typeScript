// type Alpha = string | number;
// function add(param1:Alpha,param2:Alpha):Alpha{
//     if(typeof param1==='number' && typeof param2 ==='string'){
//         return param1 + param2;
//     }else{
//         return param1.toString() + param2.toString();
//     }
// }

// add('1','2');
// add(1,2);

// //in guard

// type NormalUserType = {
//     name:string;
// }

// type AdminUserType = {
//     name:string,
//     role:'admin',
// }

// function getuser(user:NormalUserType|AdminUserType):string{
//     if('role' in user){
//         return `I am an admin and my role is ${user.role}`
//     }
//     else{
//         return `I ama normal user`
//     }
// }

// const normalUser1:NormalUserType={
//     name:'mr.kallu'
// }
// const adminUser1:AdminUserType = {
//     name:'mr.rafi',
//     role:'admin',
// }

// console.log(getuser(normalUser1));
// console.log(getuser(adminUser1));

// //instance of guard
// class Animal{
//     name:string;
//     species:string;

//     constructor(name:string,
//         species:string){
//             this.name = name;
//             this.species = species;
//         }

//         makeSound(){
//             console.log('I am making sound');
//         }
// }

// class Dog extends Animal{
//     constructor(name:string,species:string){
//         super(name,species);
//     }
//     makeBark(){
//         console.log('I am barking');
//     }
// }

// class cat extends Animal{
//     constructor(name:string,species:string){
//         super(name,species);
//     }
//     makeMew(){
//         console.log('I am mewing');
//     }
// }

// function getAnimal(animal:Animal){
//     if(animal instanceof Dog){
//         animal.makeBark();
//     }
//     else if(animal instanceof cat){
//         animal.makeMew()
//     }
//     else{
//         animal.makeSound()
//     }
// }

// const animal1 = new Dog('Ggerman','dog');
// const animal2 = new cat('Mew','cat');

// getAnimal(animal1);
// getAnimal(animal2);