const studentScores = [
  { name: 'Alice', score: 85 },
  { name: 'Bob', score: 92 },
  { name: 'Charlie', score: 68 },
  { name: 'David', score: 55 },
  { name: 'Eve', score: 78 }
]
const getPassingNames = (studentarr) => {
  const studentPass = []
  studentarr.forEach((element) => {
    if (element.score >= 70) {
      studentPass.push(element.name.toUpperCase())
    }
  })
  return studentPass
}

const passingNames = getPassingNames(studentScores)
console.log(passingNames)
