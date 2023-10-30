function totalPages(arrayItems, rowsPerPage) {
    let result
    if (arrayItems?.length === 0 || arrayItems === undefined||arrayItems===null) {
      result = undefined
    } else if (
      rowsPerPage === null ||
      rowsPerPage === undefined ||
      rowsPerPage === 0
    ) {
      result = 1
    } else {
      result = Math.ceil(arrayItems?.length / rowsPerPage)
    }
    return result
  }

let arr=[]
console.log(typeof arr)