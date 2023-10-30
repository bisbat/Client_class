//1.create object with object literal =ใช้ปีกกาในการสร้างobject
//disadventage=ต้องcopy code เรื่อยๆถ้าจะสร้างobjectที่เหมือนกัน แต่ก็ใช้งานง่าย
const st1={studentId:65130500109,firstname:'Somchai',lastname:'Sookjai'}
console.log(typeof(st1))
console.log(st1)

const st2={} //empty object === const st2=new Object()
console.log(typeof(st2))

console.log(Object.keys(st1))//array of property key
console.log(Object.values(st1))//array of property value

const st3={firstname:'Somchai',lastname:'Sookjai',studentId:65130500109} //order is not matter cuz we look on content

//2.composit object = object ซ้อน Object สามารถซ้อนได้เรื่อยๆเท่าไหร่ก็ได้
const st4={
    studentId:65130500109,
    firstname:'Somchai',
    lastname:'Sookjai',
    address:{province:'Krabi',country:'Thailand'}
}
console.log(st4)
//property value can store function
const st5={
    studentId:65130500109,
    firstname:'Baitong',
    lastname:'Sae-kow',
    // getFullname:function(){
    //     return `${this.firstname} ${this.lastname}`
    // }

    //remove :function สร้างได้2แบบ
    getFullname(){
        return `${this.firstname} ${this.lastname}`
    }
}
console.log(st5.getFullname())
//get property 1)objectname.propertykey 2)objectname['propertykey']
console.log(st4.firstname)
console.log(st4['lastname'])//ใช้กับloop,dynamic key
// dynamic property: add a new one, update or delete existing property
st4.email='bi@gmail.com' //add property
st4.firstname='Pornsak' //update
delete st4.email //delete
st4.getAddress=function(){
    //add a new property that store function
    return this.address
}
console.log(st4)
console.log(Object.prototype.isPrototypeOf(st4))
console.log(Date.prototype.isPrototypeOf(st4))

console.log(st4.address.country) //สามารถเรียกต่อมายาวๆได้เลย