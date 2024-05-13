function printSquare() {
    var arr = [1, 2, 3, 4];

    var v = arr.forEach((val) => {
        if (val <=4) {
            return val * val
        }
    })
    return v
}

var add = printSquare();
console.log(add);