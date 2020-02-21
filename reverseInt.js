// Делает инверсию числа и возвращает перевернутое число

const reverseInt = num => {
 let str = String(num),
     store = '';

 
 for (let i = (str.length - 1); i >= 0 ; i--) {
  store += str[i];
 }
 
 store = Number(store);
 return store;
}

console.log(reverseInt(1234588990123));

