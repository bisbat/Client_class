//Topic : Closure **nested ธรรมดาไม่เป็น closure
//closureต้องเป็นNested function
//outer ต้องreturn closureออก

function counter(){
    let count=1

    function increment(){
        return ++count
    }

    function decrement(){
        return --count
    }
}
