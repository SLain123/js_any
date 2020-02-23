const reverse = str => {
    let n = str.length - 1,
        result = '';

    const count = (str, n) => {
        result += str[n];
        if (n == 0) {
        return result;
        }
        else {
            count(str, n - 1);
        }
    }

    count(str, n);
    return result;
}

console.log(reverse('TESTtest and again'));