const x=[1,3,5]
const y=[2,4,6,8,9,7,1]

//destructing array
const [a]=x //a=x[0]
const [m,n]=y //m=y[0],n=y[1]
const [k1,j,...h1]=y //k=y[0],j=y[1],h=[y[2],y[3],y[4],y[5],y[y.length-1]]
console.log(a)
console.log(m)
console.log(n)
//...in front of x is spread operator
const z=[...x,2,4,...x]
console.log(z)

//destructuring with skip element
const[,e]=x //e=3 skip 1 by using ,(comma)
console.log(e)
const[k,,l,,...h]=y
console.log(k)
console.log(l)
console.log(h)