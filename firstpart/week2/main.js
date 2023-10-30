console.log('Good morning')
setTimeout(() => {
  console.log('Task1 :a complex task was done')
}, 10000)
//callback function
// setTimeout is example of higher order function
console.log('My name is Baitong Sae-kow')

setTimeout(
  () => {
    console.log('Task2 :a complex task was done')
  },
  2000 //1000ms=1second
)

console.log('Good bye')

if ('2' == 2) console.log('compare only value')
if ('2' === 2) console.log('compare value and datatype')

let str = 'hello'
str = str.toUpperCase()
// console.log(str.toUpperCase)
console.log(str)

/*
let name = 'Mermaid'
console.log(name)
const age = 20
name = 100
console.log(name)
console.log(greeting('Goose goose'))

const obj = { id: 1001}
const std = { id: 65130500109, name: 'Baitong' } //object is a collection of properties
// first property is ID and second is name
//one property contain key and value (key:value)

console.log(std)
const nums = [5, 10, 15, 20] //array
console.log(nums)
 */
