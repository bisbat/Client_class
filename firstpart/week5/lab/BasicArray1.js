// Topic : Array
// array can contain different data type in one array
const x = [1, true, 'A'] //สร้าง array แบบ literal
console.log(x)
console.log(x.length) //length is size of array
console.log(x[0]) //get the first element of array
console.log(x[x.length - 1]) // get the last element of array
//array size can grow dynamically = เพิ่มได้เรื่อยๆไม่ต้องสนใจขนาดเริ่มต้น
x[1] = false //[]เอาไว้รองรับค่าindex
x[x.length] = 5 // append a new element
x.push(888) //push() เป็นฟังชั่นที่เอาไว้เพิ่มค่าarrayต่อท้ายได้เลย
console.log(x)

const y = [] // y is an empty array
let z //undefined

console.log(typeof z)
console.log(typeof y)

if (y.length === 0) {
  console.log('y is empty array')
} else {
  console.log('y is not empty array')
}

if (z?.length === 0) {
  //optional chaining เพื่อให้ไม่error
  console.log('z is empty array')
} else {
  console.log('z is not empty array')
}
