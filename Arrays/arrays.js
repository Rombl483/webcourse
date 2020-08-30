(function () {
    var numbersArray = [1, 2, 3, 5, 6, 8, 4, 9, 11, 10, 7];

    numbersArray = numbersArray.sort(function (a, b) {
        return b - a;
    });

    console.log("Отсортированный массив по убыванию: " + numbersArray.toString());
    console.log("Первые пять элементов массива: " + numbersArray.slice(0, 5).toString());
    console.log("Последние пять элементов массива: " + numbersArray.slice(-5).toString());

    console.log("Сумма четных элементов массива: " + numbersArray
        .filter(isEvenNumber)
        .reduce(function (evenNumbersSum, evenNumber) {
            return evenNumbersSum + evenNumber;
        }, 0)
        .toString());

    var array = createNumbersArray(100);

    console.log("Список квадратов четных чисел массива от 1 до 100:");
    console.log(array
        .filter(isEvenNumber)
        .map(function (element) {
            return element * element;
        })
        .toString());

    function isEvenNumber(num) {
        return num % 2 === 0;
    }

    function createNumbersArray(n) {
        var array = [];

        for (var i = 1; i <= n; i++) {
            array.push(i);
        }

        return array;
    }
})();
