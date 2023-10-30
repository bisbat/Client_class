// Topic :
// Array data type is an object

const a = [1, 2, 3] //เก็บค่า memory address
const b = [1, 2, 3] //เก็บค่า memory address
console.log(a === b) // false because memory address of a and b is inequal

const c = b //alias give memory address of b to c = have same memory address
console.log(c === b) //true

c[0] = 'A'
console.log(b) //['A',2,3]
console.log(c) //['A',2,3] have the same result cuz they are hold the same memory address

a[0] = 555
console.log(a)
console.log(b)
console.log(c)

// object data type is an object
const x = { id: 1, title: 'JS' }
const y = { id: 1, title: 'JS' }
const z=y //give memory address of y to z

console.log(x===y) //memory address of x === memory address of y //false
console.log(y===z) //true

y.id=888
console.log(x) //{ id: 1, title: 'JS' }
console.log(y) //{ id: 888, title: 'JS' }
console.log(z) //{ id: 888, title: 'JS' } 

//primitive
let m=5
let n=10
let o=n

m=999
o=1000

console.log(o===n)
console.log(m)
console.log(n)
console.log(o)
