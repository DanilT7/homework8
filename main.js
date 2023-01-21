'use strict'

const userArr = [];
const lenght = Number(prompt('Укажите длину массива'));

for (let i = 0; i < lenght; i++) {
    userArr.push(Number(prompt(`Введите ${i+1}-ый элемент массива`)));
}

console.log(`Ваш масив - ${userArr}`);

for(let j = 0;j < lenght;j++) {
    for(let i = 0; i < lenght - 1;i++) {
        let currentElement = userArr[i];
        let nextElement = userArr[i+1];
        if(currentElement > nextElement) {
            let temp = currentElement;
            currentElement = nextElement;
            nextElement = temp;
        }
        userArr[i] = currentElement;
        userArr[i+1] = nextElement;
    }
}

console.log(`Відсортувати масив за зростанням. - ${userArr}`)

userArr.splice(1,3);
console.log(`Видалити елементи з масиву з 2 по 4 (включно!). - ${userArr};`);