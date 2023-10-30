// Function types
//1.inner function= outer function can call inner function เพื่อใช้งานได้

// function addSquare(a,b){
//     function sqr(x){
//         return x*x
//     }
//     return sqr(a)+sqr(b)
// }

//*innerสามารถเข้าถึงตัวเอง parentตัวเองและสิ่งที่parentเข้าถึงได้

let a = 1
let b = 2
function doSometing() {
  let b = 5
  let result = a + b
  console.log(result)

  function doIt() {
    let c = 100
    console.log(c)
    result += c
    console.log(result)
  }
  console.log(c) //can not access outside function doIt

  doIt() //เรียกได้

}
doSomething()
doIt() //เรียกไม่ได้

a = 100
console.log(a) //100
console.log(b) //10

