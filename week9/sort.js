const students=[
    {id:1,name:'John lee'},
    {id:10,name:'Adam Smith'},
    {id:100,name:'Ann Smith'},
    {id:2,name:'Julia Smith'}
]

console.log(students.sort((student1,student2)=>student1.id-student2.id))
console.log(students.sort((student1,student2)=>student2.id-student1.id))

console.log(students.sort((student1,student2)=>{
    const name1=student1.name.toLocaleLowerCase()
    const name2=student2.name.toLocaleLowerCase()

    if(name1>name2) return -1
    else if (name1<name2) return 1
    else return 0

}
    
))

const str1='ann'
const str2='Boy'
const str3='Ann'

console.log(str1<str3)//A>a
console.log(str1===str3)//B>A
console.log(str1>str2)
console.log(str2>str3)