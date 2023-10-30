function isPasswordValid(password) {
  if (password === null || password === undefined) {
    return false
  }
  let myArr = [...password]
  let upper = [...password.toUpperCase()]
  let lower = [...password.toLowerCase()]
  let digit = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  let specialChar = ['@', '#', '$', '%', '^', '&', '*', '!', '-']

  if (myArr.length < 8) {
    return false
  } else if (password) {
    for (let i = 0; i < myArr.length; i++) {
      if (myArr[i] === upper[i]) {
        if (myArr[i] === lower[i]) {
          if (myArr[i] === digit[i]) {
            if (myArr[i] === specialChar[i]) {
              return true
            }
          }
        }
      }
      return false
    }
  }
}

console.log(isPasswordValid('ASDsfff@@888'))
