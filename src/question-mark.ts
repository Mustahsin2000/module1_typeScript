const agee:number = 22;

// if(agee>=18){
//     console.log('yes');
// }else{
//     console.log('no');
// }
//ternary operator
const isAdult = agee>=18 ? 'Yes' : 'No';
console.log(isAdult);

//Nullish coalescing operator
//Null and undefined
//dekhbo othentic user kina?
//na hole guest hishebe print kore dibo
const isAuthenticUser = '';
const userName = isAuthenticUser ?? 'guest'//double ?? mane Nullish Coenslencing operator
const userName2 = isAuthenticUser ? isAuthenticUser : 'guest'
console.log({userName},{userName2});

type Manush = {
    name:string,
    age:number,
    address:{
        city:'NO City',
        road:'No Road',
        home?:'',
    }
}

const manush1:Manush={
    name:'rafi',
    age:14,
    address:{
        city:'NO City',
        road:'No Road',

    }
}

const home = manush1?.address?.home ?? 'No Home'
console.log({home});
