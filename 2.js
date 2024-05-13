function getEvenNumbers() {
    var arr = [1, 2, 3, 4, 5, 6]
    
    var v = arr.filter((val) => {
        if (val % 2 == 0) {
            return val
        }
    })
    return v
}

var add = getEvenNumbers() 
console.log(add)
