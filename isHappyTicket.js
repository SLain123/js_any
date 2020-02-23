// Функция делить четное количество цифр на две части и суммирует каждую из них, 
// затем проверяет на совпадение сумм (аналог счастливого билета)

const isHappyTicket = str => {
    let halfLength = str.length / 2,
        halfOne = 0,
        halfTwo = 0;
    
    for (let i = 0; i < halfLength; i++) {
        halfOne += Number(str[i]);
    }

    for (let i = halfLength; i < str.length; i++) {
        halfTwo += Number(str[i]);
    }
    if (halfOne == halfTwo) {
        return true;
    }
    else return false;
}

console. log(isHappyTicket('3333522445'));