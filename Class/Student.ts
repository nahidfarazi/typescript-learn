import {User} from './index'
class Student extends User{
    studentId: number;
    
    constructor(userName:string, age:number, studentId:number){
     super(userName, age);
     this.studentId = studentId
    }
    print():void{
     console.log(`username: ${this.userName}, age: ${this.age}, studentId: ${this.studentId}`);
    }
 }
 
 const student1 = new Student('Rafiq',19,12122438);
student1.print()