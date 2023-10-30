//Topic : variable scope
let x=1; //x is a global scope
console.log(x)

{
    let x=5 //Js allow to create the same name but it's must not in the same scope
    console.log(x)
}
x=10
console.log(x)

function doIt(){
    if(1){
        let x=555
        console.log(x)
    }else{
        console.log('not 1')
    }
    console.log('Hi '+x)
}
doIt();

console.log(x) //global x=10

function doSmt(){
    let x='A'
    console.log(x) //function scope
}
doSmt()
console.log(x) //global scope


// Explicit
let z=1
console.log(typeof z)