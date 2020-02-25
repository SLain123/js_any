// // Проверяет является ли число счастливым, Назовем счастливыми числами те,
//  которые в результате ряда преобразований вида "сумма квадратов цифр" 
//  превратятся в единицу. Например:

// 7   => 7^2 = 49,
// 49  => 4^2 + 9^2 = 16 + 81 = 97,
// 97  => 9^2 + 7^2 = 81 + 49 = 130,
// 130 => 1^2 + 3^2 + 0^2 = 10,
// 10  => 1^2 + 0^2 = 1.

// Вывод: исходное число 7 - счастливое.

const sumOfSquareDigits = n => {            //Находит сумму квадратов числа 49 = 4 ** 2 + 9 ** 2;
    let store = String(n),
        result = 0,
        num;
    for (let i = 0; i < store.length; i++) {
        num = Number(store[i]);
        result += num ** 2;
    }
    return result;
}



const isHappyNumber = n => {          // Основная функция, хранитель результатов и количества итераций
    let iter = 0,
        result = false,
        num = n;

    
    const loop = n => {           // Функция которая проверяет основное условие и количество итераций
        num = sumOfSquareDigits(num);
        iter++;
        
        if (num == 1) {
            result = true;
            return result;
        }
        else if (iter < 10) {
            loop(num);
        }
    }

    loop(num);

    return result;
    
}

console.log(isHappyNumber(7));