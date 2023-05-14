//Pick

interface Person{
    name:string,
    email:string,
    contactNo:string,
}

type pickSomeProperty = Pick<Person,'email'|'contactNo'>;

//omit

type omitProperty = Omit<Person,'email'>

//partial
//To make all the properties be optional type

type optionalTypes = Partial<Person>
type RequiredType = Required<Person>

const person:Readonly<Person>={
    name:'rafi',
    email:'mus@gmail',
    contactNo:'122222',
}
// person.name = 'kafi';

//Record Type

// type myObj = {
//     a:string,
//     b:string,
//     c:string,
// }

// type myObj = {
//    [key:string]:string
// }

// Record 'a'|'b'|'c'|'d'
type myObj= Record<'a'|'b'|'c'|'d',string>

const obj: myObj = {
    a:'1',
    b:'2',
    c:'3',
    d:'4',
}
