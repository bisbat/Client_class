const names = ['Alice', 'John', 'Bob', 'Ann']
// 1.Is every name is start with A (insensitive case)
let isStartWithA = names.every((name)=>
name.toLowerCase().startsWith('a'))
console.log(isStartWithA)
// 2.Is some element start with A (insensitive case)
let isSomeStartWithA = names.some((name) => name.toLowerCase().startsWith('a'))
console.log(isSomeStartWithA)

//or
let isStart=true
names.forEach((name) => {
  if (name.toLowerCase().charAt(0) == 'a') {
    isStart = true
  }else{
    isStar = false
  }
   return isStart
})
console.log(isStartWithA)
