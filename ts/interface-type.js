var Student = [];
var user1 = {
    id: 1,
    name: 'nahid',
    age: 19
};
var user2 = {
    id: 2,
    name: 'Rafiq',
    age: 18
};
Student.push(user1);
Student.push(user2);
var printUserInfo = function (user) {
    console.log("Id:".concat(user.id, ", name:").concat(user.name, ", age:").concat(user.age));
};
Student.forEach(function (user) { return printUserInfo(user); });
