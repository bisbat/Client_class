//1.function declaration
function concat(str1, str2) {
  return str1 + str2
}

//calling function,execute function
console.log(concat('hello', 'HELL'))
// **function concat() and toLower() is not Higher order function

//2.function expression
const toLower = function (str) {
  return str.toLowerCase()
}
//calling function, execute function
console.log(toLower('BAITONG'))

const doSomething = toLower
console.log(doSomething('THAILAND'))
console.log(typeof doSomething)//function
const y=toLower('Hey')
console.log(y)
console.log(typeof y)//String


const doIt=function(op,sttr1,str2){
    //parameter passing
    //op=concat,str1='good',str2='morning'
    return op(str1,str2)
}
console.log(doIt(concat,'good','morning'))
console.log(doIt(toLower,'GOOD','MORNING'))//good เพราะรับได้แค่parameterเดียวก็จะออกมาอันเดียว

function a(){
    return toLower
}
const m=a()
console.log(m('ABC'))
