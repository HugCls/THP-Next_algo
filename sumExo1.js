function isKEqualsToSumOfTwoNumbers(numbersArray, k) {
    console.log(`\nPous la liste "[${numbersArray}]" et la valeur ${k},`);
    for (let i = 0; i < numbersArray.length - 1; i++) {
        for (let j = i + 1; j < numbersArray.length; j++) {
            if (numbersArray[i] + numbersArray[j] === k) {
                console.log(`comme nous trouvons "${numbersArray[i]} + ${numbersArray[j]} === ${k}",`);
                return true;
            }
        }
    }
    return false;
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