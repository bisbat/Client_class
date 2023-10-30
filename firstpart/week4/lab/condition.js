// if-else
let score=-5
//<40 => 'F', 40-71=>'B',71-100=>'A'
let grade
if(score<0 || score>100){
    grade='invalided score'
}else if(score<=40){
    grade='F'
}else if(score<=71){
    grade='B'
}else{
    grade='A'
}
// console.log(grade)

// switch
//1.break

//2.no break
let ch = 'p'
let isVowel = false
switch (ch) {  
    case 'A':  
    case 'a':  
    case 'E':  
    case 'e':  
    case 'I':  
    case 'i':  
    case 'O':  
    case 'o':  
    case 'U':  
    case 'u':    
    isVowel = true
}
console.log(isVowel)


//Topic : For
let nums = [10, 20, 30]

//for of (use with array or iterable object)
for (const num of nums) { 
     console.log(num)
}
for (let index = 0; index < nums.length; index++) {
      console.log(nums[index])
}

//for in (use with object data type)
let obj = { id: 1, title: 'JS' }
for (const key in obj) {  
console.log(`${key}:${obj[key]}`)
}
