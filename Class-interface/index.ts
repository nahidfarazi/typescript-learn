interface IUserFormatter {
    formateUser:() => string | number

}
class User implements IUserFormatter{
    constructor(private fullName:string, private age:number){}
    formateUser = () => {
        return `name:${this.fullName}, age:${this.age}`;
    }
}

let user1 = new User('nahid', 19)
console.log(user1.formateUser());