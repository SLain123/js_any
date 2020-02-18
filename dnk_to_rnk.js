const convertor = (str) => {
    let store = [];
    if (str == undefined) {
        return store.join('');
    }
    
    for (let i = 0; i < str.length; i++) {
        if (str[i] == 'G') {
            store[i] = 'C';
        }
        else if (str[i] == 'C') {
            store[i] = 'G';
        }
        else if (str[i] == 'T') {
            store[i] = 'A';
        }
        else if (str[i] == 'A') {
            store[i] = 'U';
        }
        else {
            return null;
        }
    }
    return store.join('');
}

console.log(convertor('ACGTGGTCTTAA')); // UGCACCAGAAUU
console.log(convertor());
console.log(convertor('ACGTGHTRE'));