const sumOfSquareDigits = n => {
    let store = String(n),
        result = 0,
        num;
    for (let i = 0; i < store.length; i++) {
        num = Number(store[i]);
        result += num ** 2;
    }
    return result;
}



const isHappyNumber = n => {
    let iter = 0,
        result = false,
        num = n;

    
    const loop = n => {
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