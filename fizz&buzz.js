// Если число делится без остатка на 3, то вместо него выводится слово Fizz
// Если число делится без остатка на 5, то вместо него выводится слово Buzz
// Если число делится без остатка и на 3, и на 5, то вместо числа выводится слово FizzBuzz
// В остальных случаях выводится само число


const fizzBuzz = (start, end) => {
    if ( start > end) {
        console.log('');
    }
    else {
        for (let i = start; i <= end; i++) {
            if (i % 5 == 0 && i % 3 ==0) {
                console.log('FizzBuzz');
            }
            else if (i % 5 == 0) {
                console.log('Buzz');
            }
            else if (i % 3 == 0) {
                console.log('Fizz');
            }
            else {
                console.log(i);
            }
        }
    }
}

fizzBuzz(1, 100);