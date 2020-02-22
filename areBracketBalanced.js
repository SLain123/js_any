// Функция сравнивает количество открытых скобок с количеством закрытых, если совпадает то выводит истину
// Также учитывается порядок.

const areBracketBalanced = str => {
    let open = 0,
        close = 0;
    
    for (let i = 0; i < str.length; i++) {
        if (str[i] == ')' && str[i + 1] == '(') {
            return false;
        }
        if (str[i] == '(') {
            open++;
        }
        if (str[i] == ')') {
            close++;
        }
    }
    if (open == close) {
        return true;
    }
    else 
    return false;
}

console.log(areBracketBalanced('(()))'));