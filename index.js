const sum1 = (...numbers) => {
    return numbers.reduce((prev, current) => {
        return prev + current;
    })

}

console.log(sum1(3, 4, 5, 6));

const sum2 = (num1, num2, num3) => {
    return num1 + num2 + num3

}

const nums = [1, 2, 3]

console.log(sum2(...nums))