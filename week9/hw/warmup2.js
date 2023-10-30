const students = [
    {
      name: 'Sophia',
      attendance: [true, true, false, true, true],
      testScores: [88, 92, 85, 78, 90]
    },
    {
      name: 'Mason',
      attendance: [true, true, true, true, false],
      testScores: [70, 82, 88, 75, 62]
    },
    {
      name: 'Isabella',
      attendance: [true, false, false, true, true],
      testScores: [68, 71, 70, 60, 78]
    },
    {
      name: 'Liam',
      attendance: [true, true, true, true, true],
      testScores: [90, 87, 92, 88, 95]
    },
    {
      name: 'Olivia',
      attendance: [true, true, true, true, false],
      testScores: [72, 78, 75, 80, 62]
    }
]

function getAttendanceRate(student){
    const attend= student.attendance.filter((attend)=>attend===true)
    return (attend.length/student.attendance.length)*100
}

function getAvgScore(student){
    const totalScore=student.testScores.reduce((total,current)=>total+current,0)
    return totalScore/student.testScores.length
}

function underPerformStudents(students){
    const pass=students.filter((student)=>getAttendanceRate(student)<80 && getAvgScore(student)<70)
    const result=pass.map((student)=>{
        return{
            name:student.name,
            attendanceRate:getAttendanceRate(student),
            avgScore:getAvgScore(student)
        }
    })
    return result
}

// console.log(getAttendanceRate(students[0]));
// console.log(getAvgScore(students[1]));
console.log(underPerformStudents(students));