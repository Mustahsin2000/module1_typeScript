type PersonType = {
    name:string,
    age:number,
    address:string,
}

type newtype = 'name' | 'age' | 'address';

type newTypeKeyOf = keyof PersonType


// const a: newtype = 'age';
// const b:newTypeKeyOf = 'address'

//({name:'rafi',age:100},'age) to get a property
function getProperty<X,Y extends keyof X>(obj:X,key:Y){
obj[key]
}

const property = getProperty({name:'rsfi',age:45},'age');