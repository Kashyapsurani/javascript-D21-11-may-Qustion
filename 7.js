function hasAnyEvenNumber() {
    var arr = [1, 3, 5, 7, 8]
    
    var v = arr.some((val) => {
        if (val %2 != 0) {
            return true
        }else if (val % 2 != 0) {
            return false
        }
    })
    return v
}

var add = hasAnyEvenNumber()
console.log(add);