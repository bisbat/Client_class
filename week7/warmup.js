const a = [9, 8, 11, 4,2]
function numbers(arr) {
  //min,max,sum,avg
  if (arr === null || arr === undefined) {
    return {}
  }
  let min = arr[0],
    max = arr[0],
    sum = 0
  for (let index = 0; index < arr.length; index++) {
    sum += arr[index]
    if (max < arr[index]) {
      max = arr[index]
    }
    if(min>arr[index]){
        min=arr[index]
    }
  }

  return { sum: sum, avg: sum / arr.length, max: max ,min:min}
}
console.log(numbers(a))
