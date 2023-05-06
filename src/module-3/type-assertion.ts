let emni:any;

emni = 'next level web development';

//emni ta ashole kon type sheta define kore kaj
//kora ta ee holo type aseertion kora
(emni as string).length;

function kgtogrm(param:string|number):string|number|undefined{
    if(typeof param === 'string'){
        const value = parseFloat(param)*1000;
        return `converted value ${value}`
    }
    if(typeof param === "number"){
        const value = param * 1000;
        return value;
    }
}

const result = kgtogrm(1000) as number;//assertion diye janay dilam je ekhane number type hobe
const result1 = kgtogrm('23') as string;


//another example

type custom={
    message:string;
}

try{

}catch(err){
console.log((err as custom).message);
}