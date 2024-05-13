function areAllPositive() {
    var arr = [1, 2, 3, 4, 5]
    
    var v = arr.every((val) => {
        if (val > 0) {
            return true
        }else if (val < 0) {
            return false
        }
    })
    return v
}

var add = areAllPositive()
console.log(add);