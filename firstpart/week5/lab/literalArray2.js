//1.create array by literal
//element are object data type
const students=[
    {id:65130500109,name:'Bi'},
    {id:65130500120,name:'Mg'},
    {id:65130500103,name:'Kan'}
]
console.log(students.length)
console.log(students[0])

const studentIds=[
    [1001,1002,1003],
    [15115,154152,1515],
    [153135,1188,5844],
    [1563]
]
console.log(studentIds.length)
console.log(studentIds[1])
console.log(studentIds[studentIds.length-1]) //last
console.log(studentIds[0][1])
