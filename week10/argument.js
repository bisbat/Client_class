//Topic : Arguments
function ops(n1,n2,...n3){ //formal parameters
    //use rest[...] สำหรับเวลาใส่input argumenttsเกินแล้วก็ให้เหมาไปเลยที่ตัวนี้
    //ops(n1,n2,...n3) ต้องไว้ที่ตัวสุดท้ายเท่านั้น
    //arguments[0]=n1,arguments[1]=n2,arguments[2]=n3
    console.log('arguments length : ',arguments.length)//3

    arguments[0]=555 //n1
    console.log(n1);
    console.log(n3)

    for(const argu of arguments){
        console.log(argu);//1,true,xyz
    }
}

ops(1,true,'xyz',10.5,100)