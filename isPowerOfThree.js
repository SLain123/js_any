// Функция проверяет является ли переданное число натуральной степенью 3.

const isPowerOfThree = n => {
    let result = false;

    for (let i = 0; i < n; i++) {
        if (3 ** i == n) {
            result = true;
        }
    }
    return result;
}

console.log(isPowerOfThree(3));