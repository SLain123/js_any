// Функция которая принимает на вход количество минут (прошедших с начала суток)
// и возвращает строку, являющуюся временем в формате чч:мм.

const formattedTime = num => {
 let time = 0;

 if (num < 10) {
  time = `00:0${num}`;
 }
 else if (num < 60) {
  time = `00:${num}`;
 }
 else {
  let hour = Math.floor(num / 60),
      min = num % 60;
      if (hour < 10) {
       hour = `0${hour}`;
      }
      if (min < 10) {
       min = `0${min}`;
      }
  
  time = `${hour}:${min}`;
 }

 return time;
}

console.log(formattedTime(600));