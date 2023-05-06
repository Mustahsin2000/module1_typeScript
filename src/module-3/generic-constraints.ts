type MyInfoTypes={
    name:string,
    age:number,
    salary:number,
    other1:boolean,
    other2:null,
}

const myInfo = {
    name:'rafi',
    age:58,
    salary:12000,
    other1:false,
    other2:null,
}

interface MandatoryInfo {
    name:string,
    age:number,
    salary:number,
}

const addInmycrushMind = <T extends MandatoryInfo>(myInfo:T)=>{
    const crush = 'sunny';
    const newData = {...myInfo,crush};
    return newData;
}

const result5 = addInmycrushMind(myInfo);