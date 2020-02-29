const deepEqual = (obj1, obj2) => {
  let result = true;
                              // Проверка для строк и цифр
  for (let i in obj1) {       // перебор свойств в первом объекте
    let resIn = false;        // хранилище для временного значения проверки, истонно ли сравнение значений для каждого
                              // из свойств первого объекта
    for (let j in obj2) {     // перебор свойств второго объекта
      if (obj1[i] == obj2[j]) { // сравнение свойств
        resIn = true;         // если свойство первого объекта равно хотя бы одному свойству второго обекта то менять на истину
      }
    }
    
    if (resIn == false) {     // если хотя бы одно свойство обекта 1 не равно ни одному св-ву обекта 2 то меняем 
      result = false;         // временно значение на false, обекты УЖЕ НЕ РАВНЫ
    }
  }

  return result;
}


var objA = {
  prop1: 'value1',
  prop2: 'value2',
  prop3: 'value3',
  prop4: 123,
  prop5: 1000,
  
};

var objB = {
  prop5: 1000,
  prop3: 'value3',
  prop1: 'value1',
  prop2: 'value2',
  prop4: 123,
};

console.log(deepEqual(objA, objB));

