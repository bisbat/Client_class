//5.create array with Array.from()
let x=[1,2,4,8,16,32]
let y=Array.from(x)
console.log(x)
console.log(y)
console.log(y.length)

// memory address of x not equal to y
if(x===y){
    console.log('x===y')
}else{
    console.log('x!==y')
}
y=x //now memory address of x equal to y
