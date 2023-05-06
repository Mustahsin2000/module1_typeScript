type crushtype = {
    name:string,
    age?:number,
    profession:string,
    address:string
}

const crush1:crushtype = {
    name:'kakas',
    age:45,
    profession:'web developer',
    address:'kakatua',
}

const crush2:crushtype = {
    name:'koli',
    age:45,
    profession:'web developer',
    address:'poga',
}

type course = string;

const courseName:course = 'web development'



type operationType = (x:number,y:number)=>number
const calculate = (
    number1:number,
    number2:number,
    operation:operationType
)=>{
    return operation(number1,number2)
};
calculate(10,20,(x,y)=>x+y);
calculate(10,20,(x,y)=>x-y);
calculate(10,20,(x,y)=>x*y);
calculate(10,20,(x,y)=>x/y);