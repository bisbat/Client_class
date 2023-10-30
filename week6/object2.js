//constructor function
function Person(id,fn,ln){
    this.id=id
    this.firstname=fn
    this.lastname=ln
}
//2.create object by using constructor function
const p1=new Person(1001,'Baitong','Saekow')
const p2=new Person(1002,'Hendry','Style')
const p3=new Person(1003,'Taylor','Swift')
console.log(p1)
console.log(p2)
console.log(p3)
p1.email='admin@gmail.com'
console.log(p1)
//object prototype<-Person prototype<-p1
console.log(Object.prototype.isPrototypeOf(p1))
console.log(Person.prototype.isPrototypeOf(p1))

//3.create object by using Class
//javascript is a prototype base, not class based
//Syntactic sugar
class Circle{
    constructor(r){
        this.radius=r
    }
    //shared method among circle objects
    area(){
        return Math.PI*Math.pow(this.radius,2)
    }
    getRadius(){
        return this.radius
    }
}
const c1=new Circle(2)
const c2=new Circle(3)
const c3=new Circle(4)
console.log(c1.area())
console.log(c2.area())
console.log(c1.getRadius());
console.log(Object.prototype.isPrototypeOf(c1))
console.log(Circle.prototype.isPrototypeOf(c1))
// จากข้างบนทีสร้างไว้ const p1=new Person(1001,'Baitong','Sae-kow')
//4.create 
const pp1=Object.create(p1)
console.log(pp1)
console.log(pp1.id)
console.log(pp1.firstname)
console.log(pp1.lastname)
//อะไรที่p1เป็นpp1จะเป็นด้วย
console.log(Object.prototype.isPrototypeOf(pp1))//true
console.log(Circle.prototype.isPrototypeOf(pp1))//true
pp1.advisor='Tom Holland'
pp1.hobbies=['reading','football']
console.log(pp1)
console.log(Object.keys(pp1))
console.log(Object.values(pp1))
console.log(Object.entries(pp1))