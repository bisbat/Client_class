class Person{
    constructor(firstname,lastname,dateBirth){
        this.firstname=firstname
        this.lastname=lastname
        this.dateBirth=dateBirth
    }
    getFullName(){
        return `${this.firstname} ${this.lastname}`
    }
    isEqual(anotherPerson){
        return (
            this.firstname.toLowerCase()===anotherPerson.firstname.toLowerCase()&&
            this.lastname.toLowerCase()===anotherPerson.lastname.toLowerCase()
        )
    }
    toString(){
        return `${this.getFullName()},${this.dateBirth}`
    }
    //return age by calculating from dateOfBirth
  getAge() {
    //returns the number of milliseconds
    const currentDateMilli = Date.now()
    const birthDateMilli = this.dateOfBirth.getTime()
    const diffMilli = currentDateMilli - birthDateMilli
    console.log(currentDateMilli, birthDateMilli, diffMilli)
    const diffDate = new Date(diffMilli)
    return diffDate.getFullYear() - 1970
  }
}

const p1=new Person('Baitong','Sae-kow',new Date(2003,10,8))
const p2=new Person('Katy','Perry',new Date(1987,1,1))
console.log(p1.getFullName())
console.log(p1.isEqual(p2))
console.log(p1.isEqual(p1))