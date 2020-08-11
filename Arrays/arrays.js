(function() {
    var numbersArray = [1, 2, 3, 5, 6, 8, 4, 9, 11, 10, 7];

    console.log("Отсортированный массив по убыванию: " + numbersArray.sort(descendingSort).toString());
    console.log("Первые пять элементов массива: " + numbersArray.slice(0, 5).toString());
    console.log("Последние пять элементов массива: " + numbersArray.slice(-5).toString());

    console.log("Сумма четных элементов массива: " + numbersArray
        .filter(isEvenNumber)
        .reduce(getSum, 0)
        .toString());

    numbersArray = setArray(100);

    console.log("Список квадратов четных чисел массива от 1 до 100:");
    console.log(numbersArray
        .filter(isEvenNumber)
        .map(element => element * element)
        .toString());

    function descendingSort(a, b) {
        return (a - b) * (-1);
    }

    function isEvenNumber(num) {
        return (num % 2 === 0);
    }

    function getSum(a, b) {
        return a + b;
    }

    function setArray(n) {
        var array = [];
        for (var i = 1; i <= n; i++) {
            array.push(i);
        }

        return array;
    }
})();
