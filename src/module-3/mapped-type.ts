const arrayofNumbers = [1,2,3];

const arrayofStrings = arrayofNumbers.map((number)=>number.toString())
console.log(arrayofStrings);

type AreaNumber = {
    height:number,
    width:number,
    depth:number,
}

type AreaString = {
    height:string,
    width:string,
}

type Area = {
    [key in keyof AreaNumber] : string;
}

type AreaReadOnly = {
   readonly height:number,
   readonly width:number,
}

const rectangulaerArea:AreaReadOnly = {
    height:10,
    width:12,
}

// rectangulaerArea.height=45;

type A = AreaNumber['height']; //look up types
type B = keyof AreaNumber; // Union type(width or height hobe)


// const arrayofNumbers = [1,2,3];

// const arrayofStrings = arrayofNumbers.map((number)=>number.toString())
// console.log(arrayofStrings);

// type AreaNumber = {
//     height:number,
//     width:number,
//     depth:number,
// }

// type AreaString = {
//     height:string,
//     width:string,
// }

// //if we want generic
// type Area<T> = {
//     [key in keyof T] : T[key];
// }

// const area1 : Area<{height:number,width:string}>={
//     height:75,width:'77'
// }

// type AreaReadOnly = {
//    readonly height:number,
//    readonly width:number,
// }

// const rectangulaerArea:AreaReadOnly = {
//     height:10,
//     width:12,
// }

// // rectangulaerArea.height=45;

// type A = AreaNumber['height']; //look up types
// type B = keyof AreaNumber; // Union type(width or height hobe)
