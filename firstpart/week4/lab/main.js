// Topic : Conditional Operator
let someone = 'a' //empty
let who //undefined
let a = null //null **ต้องกำหนดว่าnullถึงจะเป็นnull
console.log(typeof someone) //String

let x = 5
let discount = 0
if (someone) {
  let x = 1
  who = 'member'
  discount = 0.1
} else {
  let x = 6
  who = 'guest'
  discount = 0.05
}

console.log(who)
console.log(discount)
console.log(x) //x=5

// Conditional Operator เหมาะกับcondition เดียว simpleๆ
who = someone ? 'member' : 'guest'
console.log(who)
