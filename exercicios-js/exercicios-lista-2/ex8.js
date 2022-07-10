const multiplicar = (num1, num2) => {   
    if(num1 == 0 || num2 == 0) return 0

    for(let i = 1; i < num2; i++)
        num1 += num2
    return num1
}

console.log(multiplicar(5, 5))
console.log(multiplicar(0, 7))