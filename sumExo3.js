function isKEqualsToSumOfTwoNumbers(numbersArray, k) {
    console.log(`\nPous la liste "[${numbersArray}]" et la valeur ${k},`);
    let isFound = false;
    let maxIndex = numbersArray.length -1;
    let remainsArray = [];
    let index = 0;
    while (index <= maxIndex && !isFound) {
        let newValue = numbersArray[index];
        if (index > 0 && remainsArray.includes(newValue)) {
            isFound = true;
            console.log(`comme nous trouvons "${k - newValue} + ${newValue} === ${k}",`);
            break;
        }
        remainsArray.push(k - newValue);
        index++;
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