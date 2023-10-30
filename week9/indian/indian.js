const users = [
    { firstName: "elon", lastName: 'mask', age: 50 },
    { firstName: "Mark", lastName: 'Zuckerberg', age: 26 },
    { firstName: "Jeff", lastName: 'Bezos', age: 75 },
    { firstName: "Warren", lastName: 'Buffett', age: 26 }
];

//{26:2,75:1,50:1}
const output=users.reduce((acc,curr)=>{
    if(acc[curr.age]){
        acc[curr.age]=++acc[curr.age]
    }else{
        acc[curr.age]=1
    }
    return acc
},{})

console.log(output)



  
  