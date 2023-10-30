//Topic : dataType
const $a = 10
const _b1c = 10
console.log(_b1c)

let x = 1
console.log(typeof x)
x = 'A'
console.log(typeof x)
x = true
console.log(typeof x)
console.log(typeof null)
console.log(typeof undefined)

let nums = [1, 4, 3, 5] //array use []
console.log(typeof nums)

const obj = { id: 1, title: 'JS' } //object use {},(propertykey:propertyvalue)
console.log(typeof obj)

nums = obj
console.log(nums)
nums.id = 655
obj.id = 88
console.log(nums)

const ids = [101, 105, 110, 120]
ids[0] = 1
ids[ids.length] = 121 //เพิ่มต่อท้าย แต่ถ้าอยากเปลี่ยนตัวสุดท้ายก็-1 เพราะarrayเริ่มที่0
console.log(ids)

let m,n,p=10,q=null,k=undefined

if (typeof q === 'object') console.log(`typeof q === 'object'`)
if (typeof k === 'undefined') console.log(`typeof k ==='undefined'`)

// Topic : Function
function doSomething(activity){
    return activity
}
console.log(doSomething('online learning'))



// Topic : Scope
function a(){ //If we put parameter in here. It's in function scope
    let a=2 //function scope
    const y=1
}
//If we call function a 10time , the result will be not the same a and y is gonna be different
let c='c' //global scope
{
    const q=45 //block scope
}