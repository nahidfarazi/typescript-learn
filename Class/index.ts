export class User{
    userName : string;
    age : number;
    constructor(userName:string, age:number){
        this.userName = userName;
        this.age = age
    }

    display ():void {
        console.log(`my name is: ${this.userName} & my age is : ${this.age}`);
    }
}



// let user1 =new User('Nahid', 19)
// user1.display()
