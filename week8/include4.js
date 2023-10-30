const nums=[-5,-6,7,8,9,-1,0]
//replace negative numbers to zero
//วิธีที่1
for(let i=0;i<nums.length;i++){
    if(nums[i]<0){
        nums[i]=0
    }
}
console.log(nums)

//วิธีที่2 ใช้map
const replaceNumber=nums.map((num)=>{
    return num<0?0:num
})
console.log(replaceNumber)

// Topic : includes()
const msg='Today is a present'
console.log(msg.includes('re'))
console.log(msg.includes('Re'))
console.log(msg.includes('day'))

// Topic : split()
const newMsg=msg.split(' ')
console.log(newMsg) //[ 'Today', 'is', 'a', 'present' ]
console.log(newMsg.includes('re'))

//reverse original 
arrayconst nums = [-5, -6, 7, 77, 8, 9, -1, 0]
console.log('before', nums)
nums.reverse()
console.log('after', nums) //[  0, -1,  9, 8,  7, -6, -5]
const numString = nums.join('*')
console.log(numString)
console.log(nums.sort()) //[  -1, -5, -6, 0,  7, 77,  8, 9] default sorting by 
stringnums.sort((num1, num2) => num1 - num2) //[-6, -5, -1,  0, 7,  8,  9, 77] ascending number 
sortingconsole.log(nums)nums.sort((num1, num2) => num2 - num1) //[ 77,  9,  8,  7, 0, -1, -5, -6 ]descending number 
sortingconsole.log(nums)
