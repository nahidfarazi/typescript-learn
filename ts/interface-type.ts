interface IUser  {
    id:number;
    name:string;
    age:number;
}
let Student:IUser[] =[]

let user1 : IUser = {
    id : 1,
    name: 'nahid',
    age: 19
}
let user2 : IUser = {
    id : 2,
    name: 'Rafiq',
    age: 18
}
Student.push(user1)
Student.push(user2)
console.log(Student);