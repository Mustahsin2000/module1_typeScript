// // a type is dependent on another type
//  type a1 = number;
//  type a2 = a1 extends string ? string : null;

//  //nested  conditional type

//  type a3 = undefined;
//  type a4 = number;

//  type d = a1 extends null ? null : a3 extends number ? number : a4 extends null ? null:never;

//  //another example

//  type sheikh = {
//     wife1:string;
//     wife2:string;
//  }

//  type checkProperty<T> = T extends {wife1:string} ? true : false;

//  type cheackWife1 = checkProperty<sheikh>;

//  //MAtha kharap Example
//  type Bandhubi = 'Monika' | 'ranu' | 'kinu';

//  type RemoveBandhubi<T> = T extends 'ranu' ? never : T;

//  type currentBandhubi = RemoveBandhubi<Bandhubi>;