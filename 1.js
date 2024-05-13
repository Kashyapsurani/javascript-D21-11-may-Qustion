function doubleNumbers(a) {
    var arr = [1, 2, 3, 4]
    
    var v = arr.map((val) => {
       return  val * 2
    })
    return v
}

var add = doubleNumbers();
console.log(add);