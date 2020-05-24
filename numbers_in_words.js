const greatNumArr = [
    ['ноль', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять'],
    ['десять', 'одинадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'],
    ['', '', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семдесят', 'восемдесят', 'девяносто'],
    ['', 'сто', 'двести', 'тристо', 'четыресто', 'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот'],
    ['тысяч', 'одна тысяча', 'две тысячи', 'три тысячи', 'четыре тысячи', 'пять тысяч', 'шесть тысяч', 'семь тысяч', 'восемь тысяч', 'девять тысяч']
];

// Main func=======================================================================================================================

function propis(num) {
   let mainArr = String(num).split(''),
        result;

    if(mainArr.length == 1) {
        result = greatNumArr[0][num];
    }
    else if(mainArr.length == 2) {
        result = genDec(mainArr[0], mainArr[1]);
    }
    else if(mainArr.length == 3) {
        result = genHun(mainArr[0], mainArr[1], mainArr[2]);
    }
    else if(mainArr.length == 4) {
        result = genThous(mainArr[0], mainArr[1], mainArr[2], mainArr[3]);
    }
    else if(mainArr.length == 5) {
        result = genThousPlus(mainArr[0], mainArr[1], mainArr[2], mainArr[3], mainArr[4]);
    }
    else if(mainArr.length == 6) {
        result = genAlmostBillion(mainArr[0], mainArr[1], mainArr[2], mainArr[3], mainArr[4], mainArr[5]);
    }
    else result = 'Число превышено';
   return result;
}

// Sub funcs =============================================================================================
// Decade

function genDec(num1, num2) {
    let res,
        commonStr = String(num1) + String(num2),
        commonNum = Number(commonStr);
    if(num1 == 0) {
        return greatNumArr[0][num2];
    }
    else {
        if(commonNum < 20) {
            res = greatNumArr[1][commonNum - 10];
        }
        else {
            let variable;
            if(num2 == 0) {
                variable = '';
            }
            else {
                variable = greatNumArr[0][num2];
            }
            res = `${greatNumArr[2][num1]} ${variable}`;
        }
        return res;
    }
}

// Hundred

function genHun(num1, num2, num3) {
    let dec = genDec(num2, num3);

        if(dec == 'ноль') {
            dec = '';
        }
        let res = `${greatNumArr[3][num1]} ${dec}`;
    return res;
}

// Thousand 1-9k

function genThous(num1, num2, num3, num4) {
    let res;

        if(num2 == 0 && num3 == 0 && num4 == 0) {
            res = greatNumArr[4][num1];
        }
        else {
            res = `${greatNumArr[4][num1]} ${genHun(num2, num3, num4)}`;
        }
    return res;
}

// Thousands > 10k

function genThousPlus(num1, num2, num3, num4, num5) {
    let res;

    if(num1 < 2) {
        res = `${greatNumArr[1][num2]} тысяч ${genHun(num3, num4, num5)}`;
    }
    else {
        res = `${greatNumArr[2][num1]} ${genThous(num2, num3, num4, num5)}`;
    }
    return res;
}

// Thousands >> 100k

function genAlmostBillion(num1, num2, num3, num4, num5, num6) {
    let res;

    if(num2 < 1 && num3 > 0) {
        res = `${greatNumArr[3][num1]} ${genThous(num3, num4, num5, num6)}`;
    }
    else if(num3 > 0) {
        res = `${greatNumArr[3][num1]} ${genThousPlus(num2, num3, num4, num5, num6)}`;
    }
    else res = `${greatNumArr[3][num1]} ${genDec(num2, num3)} тысяч ${genHun(num4, num5, num6)}`;
    return res;
}

// Funcs for test ===========================================================================================
// Generate random number

function randomInteger(min, max) {

    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }

// Launch test with random number

function test() {
    let num = randomInteger(1, 999999);
    result = `${num}: ${propis(num)}`;

    return result;
}

console.log(test());