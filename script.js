// ! ДЗ № 8 Сумма факториалов

// Ввести с клавиатуры a и b, где а меньше b (проверку написать кодом).
// Запустить цикл перебора от a до b с шагом h(ввод с клавиатуры).
// Посчитать сумму факториалов * чисел которые попадаются во время перебора.



// debugger;

firstNumber = parseInt(prompt("Введите первое число"));
while (isNaN(firstNumber)) {
    alert("Это не число")

    firstNumber = parseInt(prompt("Введите первое число"));
}
alert(`Вы ввели ${firstNumber}`)

secondNumber = parseInt(prompt("Введите второе число"));
while (isNaN(secondNumber) || firstNumber >= secondNumber) {

    if (isNaN(secondNumber)) {
        alert("Это не число");
    } else if (firstNumber >= secondNumber) {
        alert(`Первое число обязательно должно быть меньше второго, первое вы ввели "${firstNumber}"`);
    }
    secondNumber = parseInt(prompt("Введите второе число"));
}

alert(`Вы ввели ${secondNumber}`);


minStep = secondNumber - firstNumber;

step = parseInt(prompt("Введите шаг"));
while (isNaN(step) || step > minStep) {
    if (isNaN(step)) {
        alert("Это не число");
    } else if (step > minStep) {
        alert(`Шаг должен быть меньше раницы между вторым и первым числом.
        Вы ввели:
        первое число "${firstNumber}"
        второе число "${secondNumber}"
        шаг должен быть не более "${minStep}"`);
    }
    step = parseInt(prompt("Введите шаг"));
}


sum = 0;
for (i = firstNumber; i <= secondNumber; i = i + step) {
    factorial = 1;
    console.log(`Итерация числа ${i}`);

     for (j = 1; j <= i; j++) {
         factorial = factorial * j;
     }

    console.log(`Факториал равен ${factorial}`);

    sum = sum + factorial;
}
console.log(`Сумма факториалов равна ${sum}`);
alert(`Сумма факториалов равна ${sum}`);
