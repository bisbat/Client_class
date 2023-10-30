function ops(n1='F',n2='false',n3='unknown'){//เป็นการตั้งค่าdefaultว่าถ้าไม่ส่งมาให้เป็นค่านี้
    return {n1,n2,n3}
}

console.log(ops());
console.log(ops('A'));
console.log(ops(undefined,undefined,undefined));//ถ้าparameterนั้นเป้นundefinedให้ใช้ค่าdefault
console.log(ops(null,null,null));
console.log(ops());//อันไหนไม่อยากใส่ให้set undefinedจะได้เรียกdefault