// Функция которая проверяет является ли число совершенным

const isPerfect = n => {
    let store = 0;

    for (let i = 1; i < n; i++) {
        if (n % i == 0) {
            store += i;
        }
    }
    if (store == n) return true;
    else return false;
}

console.log(isPerfect(33550336));