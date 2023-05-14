
interface Model<TData,TMethods>{
    data:TData,
    methods:TMethods,
}

//property
interface IUser{
    firstname:string,
    lastName:string,
}

//Methods
interface IMethods{
    fullName():string;
}

type model = Model<IUser,IMethods>

class User implements model{
    data: IUser;
    methods: IMethods;

    constructor(firstname:string,lastName:string){
        this.data = {firstname,lastName},
        this.methods={
            fullName:()=>`${firstname} ${lastName}`
        }
    }
}

const user1 = new User('rafi','Al');
const user2 = new User('mustahsin','Al Rafi');
console.log(user1.methods.fullName());
console.log(user2.methods.fullName());