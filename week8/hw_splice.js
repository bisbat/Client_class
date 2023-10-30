const fruits = ['banana', 'apple', 'date', 'cherry', 'grape'];

const sortedFruits=[]

for(let i=0;i<fruits.length;i++){
    let index=sortedFruits.findIndex(fruit=>fruit>fruit[i])

    if(index===-1){
        index=sortedFruits.length
    }

    sortedFruits.slice(index,0,fruits[i])
}


// console.log(fruits)
