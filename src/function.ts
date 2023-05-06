//normal function
//default perameter
function add(num1:number=10,num2:number=20){
    return num1+num2;
}
console.log(add());

//spread operator
const myfriends = ['rafi','kafi','tafi'];
const newfriends = ['aro','paru','charu'];

myfriends.push(...newfriends);
console.log(myfriends);

const arrowFunction = (num1:number,num2:number)=>num1+num2;

const arr = [1,2,5];

const newArray = arr.map((element:number)=>element*element)

const person:{
    name:string,
    balance:number,
    addBalance(money:number):string,
} = {
    name:'rafi',
    balance:5,
    addBalance(money:number){
        return `My new balance is ${this.balance + money}`;
    },
};

//rest operator or perameter
const greetOperator = (...friends:string[]):void=>friends.forEach((friend)=>console.log(`Hi ${friend}`));
greetOperator('ami','tumi','danish','gao','chao','hao','kaka');

//array or object destructuring
const myBestfriends = {
    fullName:'abul bashar',
    age:21,
}
const {fullName} = myBestfriends;
const {age} = myBestfriends;
console.log(fullName,age);