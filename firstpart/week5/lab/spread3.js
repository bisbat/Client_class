const x=[1,9,11]
const y=[3,5,7]
//usign  spread operator[...] to copy element of x and y
const z=[...x,...y]
console.log(z)

const a=[1,...y,11]
console.log(a)

const str='Hello world'
const callstr=[...str]
//console.log(callstr)//แตกstringออกมาเป็นcharecter 

for(const ch of callstr){
    console.log(ch)
}