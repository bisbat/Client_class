const nums = [5, 2, 3, 4, 7]
const total = nums.reduce((sum, num) => sum + num, 0) //0 คือ initail value ไม่ใส่ก็ได้
console.log(total)

const names=['Alice','Bob','Ann','Cath'] //ABAC
const str=names.reduce((letter,name)=>letter+name.charAt(0),'')
console.log(str)

const buyProducts=[
    {price:50,quantity:2},
    {price:299,quantity:10},
    {price:15,quantity:5}
]
const total2=buyProducts.reduce((sum,sumproduct)=>sum+sumproduct.price*sumproduct.quantity,0)
console.log(total2)