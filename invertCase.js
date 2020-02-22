// Конвертирует большие буквы в маленькие и наоборот

let words = 'example: I loVe JS';

const checkToLower = sym => {
 let store;

 if (sym.toLowerCase() == sym) {
  store = true;
 }
 else {
  store = false;
 }
 return store;
}


const invertCase = string => {
 let storeOfWords = '';

 for(let i = 0; i < string.length; i++) {
  let check = checkToLower(string[i]);

  if (check == true) {
   storeOfWords = storeOfWords + string[i].toUpperCase();
  }
  else {
   storeOfWords = storeOfWords + string[i].toLowerCase();
  }
 }

 return storeOfWords;
}


console.log(invertCase(words));
