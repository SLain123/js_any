// Функция считает разницу между квадратом суммы и суммой квадратов чисел от 1 до n

const sumOfSquere = n => {
    let result = 0;

    for (let i = 1; i <= n; i++) {
        result += i ** 2;
    }
    return result;
}

const squereOfSum = n => {
    let result = 0;

    for (let i = 1; i <= n; i++) {
        result += i;
    }
    return result ** 2;
}

const sumSquereDifference = n => {
    return squereOfSum(n) - sumOfSquere(n);
}

console.log(sumSquereDifference(2));