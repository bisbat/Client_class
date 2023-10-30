const users = [
    { firstName: "elon", lastName: 'mask', age: 50 },
    { firstName: "Mark", lastName: 'Zuckerberg', age: 26 },
    { firstName: "Jeff", lastName: 'Bezos', age: 75 },
    { firstName: "Warren", lastName: 'Buffett', age: 26 }
];

const younger=users.filter((user)=>user.age<30).map((user)=>user.firstName)
console.log(younger)