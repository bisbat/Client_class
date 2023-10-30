//1.create object with object literal
const st1={
    studentId:61530500120,
    firstname:'Mg',
    lastname:'magrood'
}
const st3={
    studentId:61530500103,
    firstname:'Kan',
    lastname:'Jarean'
}
const st4={
    studentId:61530500103,
    firstname:'Kan',
    lastname:'Jarean'
}
const st2=st1
console.log(st1===st3)
console.log(st1===st2)
console.log(st3===st4)

//create compare function to compare two students
function compareStudent(st1,st2){
    return st1.studentId===st2.studentId
}

console.log(compareStudent(st1, st2)) //true
console.log(compareStudent(st3, st4)) //true
console.log(compareStudent(st1, st3)) //false
