// //Mocking
// //json place holder

// interface Itodo {
//     userId:number;
//     id:number;
//     title:string;
//     completed:boolean;
// }

// const getTodo = async ():Promise<Itodo>=>{
//     const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//     return await response.json();
// }

// const getTodoData =async ():Promise<void> => {
//     const result = await getTodo();
//     console.log(result);
// }

// getTodoData();

// const makePromise = ():Promise<string>=>{
//     return new Promise<string>((resolve,reject)=>{
//        const data:string = 'data is featched';
//         if(data){
//             resolve(data)
//         }
//         else{
//             reject('Failed to featch data')
//         }
//     })
   
// }
// const getPromiseData = async():Promise<string>=>{
//     const data  = makePromise();
//     return data;
// }


// //object diye korle ki hoy
// type DataType={
//     data:string;
// }

// const makePromiseObject = ():Promise<DataType>=>{
//     return new Promise<DataType>((resolve,reject)=>{
//        const data:DataType = {data:'data is feached'};
//         if(data){
//             resolve(data)
//         }
//         else{
//             reject('Failed to featch data')
//         }
//     })
   
// }

// const getPromiseDataObject = async():Promise<DataType>=>{
//     const data  = await makePromiseObject();
//     return data;
// }



