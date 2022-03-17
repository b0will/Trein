
let contador = 0
while (contador <= 99) {
    contador += 1
    if (contador % 3 == 0 && contador % 5 == 0) {
        console.log("FizzBuzz")
    } else if (contador % 3 == 0) {
        console.log("Fizz")
    } else if (contador % 5 == 0) {
        console.log("Buzz")
    } else
        console.log(contador)
}
