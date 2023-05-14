class Parent{
    name:string;
    age:number;
    address:string;

    constructor(name:string,
        age:number,
        address:string,){
            this.name = name;
            this.age = age;
            this.address = address;
        }
        makesleep(hours:number):string{
            return`This ${this.name} sleep ${hours}`
        }
}

//parent class gulo common .tay shegulo
//inherit hobe children class a
class student extends Parent{
    constructor(name:string,age:number,address:string,){
            super(name,age,address)
           
        }

    //     makesleep(hours:number):string{
    //         return`This ${this.name} sleep ${hours}`
    //     }
}

const student1 = new student('Mr.',15,'uganda'); 

class Teacher extends Parent{
    designation:string;

    constructor(name:string,
        age:number,
        address:string,
        designation:string,){
            super(name,age,address)
            this.designation = designation;
        }

        takeClasses(classes:number):string{
            return `This ${this.name} will take ${classes} classes`
        }

}

const teacher1 = new Teacher('Mr.',15,'uganda','teacher')