function isKEqualsToSumOfTwoNumbers(numbersArray, k) {
    console.log(`\nPous la liste "[${numbersArray}]" et la valeur ${k},`);
    let isFound = false;
    let minIndex = 0;
    let maxIndex = numbersArray.length -1;
    let i = minIndex + 1
    while (minIndex < maxIndex && i <= maxIndex && !isFound) {
        if (numbersArray[minIndex] + numbersArray[i] === k) {
            console.log(`comme nous trouvons "${numbersArray[minIndex]} + ${numbersArray[i]} === ${k}",`);
            isFound = true;
            break;
        }
        if (i < maxIndex && !isFound) {
            i++;
        } else {
            minIndex++;
            i = minIndex + 1;
        }
    }
    return isFound;
}


console.log(`le résultat du test est : ${isKEqualsToSumOfTwoNumbers([10, 15, 3, 7], 17)}`);
console.log(`le résultat du test est : ${isKEqualsToSumOfTwoNumbers([1, 8, 10, 21], 19)}`);
console.log(`le résultat du test est : ${isKEqualsToSumOfTwoNumbers([1, 3], 4)}`);
console.log(`le résultat du test est : ${isKEqualsToSumOfTwoNumbers([1, 2, 3, 4, 5, 6], 4)}`);
console.log(`le résultat du test est : ${isKEqualsToSumOfTwoNumbers([-1, -2, -3, 4, 5, 6], 4)}`);
console.log(`le résultat du test est : ${isKEqualsToSumOfTwoNumbers([6, 5, 4, 3, -2, 1], 4)}`);
console.log(`le résultat du test est : ${isKEqualsToSumOfTwoNumbers([6, 5, -4, -3, -2,-1], -4)}`);
console.log(`le résultat du test est : ${isKEqualsToSumOfTwoNumbers([6, 5, 4, 3, 2, 1], 4)}`);
console.log(`le résultat du test est : ${isKEqualsToSumOfTwoNumbers([1], 1)}`);
console.log(`le résultat du test est : ${isKEqualsToSumOfTwoNumbers([], 1)}`);