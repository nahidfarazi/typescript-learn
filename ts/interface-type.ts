let Student:{
    id:number;
    name:string;
    age:number;
}[] =[]

let user1 : {
    id: number;
    name: string;
    age: number;
} = {
    id : 1,
    name: 'nahid',
    age: 19
}
let user2 : {
    id: number;
    name: string;
    age: number;
} = {
    id : 2,
    name: 'Rafiq',
    age: 18
}
Student.push(user1)
Student.push(user2)
console.log(Student);