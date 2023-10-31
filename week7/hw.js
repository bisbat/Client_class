const persons = [
  { id: 1, fullname: 'Susan Jo' },
  { id: 3, fullname: 'John Lee' },
  { id: 2, fullname: 'ann Smith' }
]
//return sorted array by fullname (ascending order and ignore case)
//[ { id: 2, fullname: 'ann Smith' },   { id: 3, fullname: 'John Lee' }, { id: 1, fullname: 'Susan Jo' },]

persons.sort((p1,p2)=>{
    const nameA=p1.fullname.toLowerCase()
    const nameB=p2.fullname.toLowerCase()

    if(nameA<nameB){
      return -1
    }else if(nameA>nameB){
      return 1
    }else{
      return 0
    }
  }
)
console.log(persons);
