// Topic : Optional chaining
let str = null
//console.log(str.toLowerCase()) //error
//วิธีแก้คือการใส่ Optional chaining เพื่อให้โปรแกรมรันไปต่อได้โดยไม่หยุดกลางคัน แค่แจ้งว่าundefinedแล้วไปต่อ Userที่ใช้งานจะได้ไม่งง
let str2 = null
console.log(str2?.toLowerCase()) //undefined

let nums
console.log(nums?.[0]) //undefined

let a = 'guest'
console.log(a.toUpperCase())


// Topic : Nullish Coalescing (??)
let arr=null
let numss=undefined
arr=numss??[1,2,3]
console.log(arr)

//Topic : Math

//random Dice faceValue in a range1-6
let rand = Math.floor(Math.random()*6)+1
console.log(rand)
// formula : (Math.floor(Math.random()*(max-min+1))+min

function random_num(min,max){
    return Math.floor(Math.random()*(max-min+1))+min
}

let rand2=random_num(70,100) //70-100
console.log(rand2)


//Topic : Conversions and Equality
if(undefined===null){
    console.log('undefined===null')
}else{
    console.log('undefined!==null')
}
// recommend to use === for equality and !== for inequality
// avoid to use == and !=







