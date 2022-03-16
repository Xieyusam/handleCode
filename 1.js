function create(obj){
    function F(){}
    F.prototype = obj
    return new F()
}

// test

let obj = { a:1 }
let obj2 = create(obj)
console.log(obj2.__proto__)