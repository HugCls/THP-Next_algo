function getHowManyBuildingsWithAViewToTheWest(numbersArray) {
console.log('\nPour la liste "[${numbersArray}]",');
let total = 0;
let maxIndex = numbersArray.length -1;
if (maxIndex >= 0) {
    total = 1;
}
if (maxIndex > 0) {
    let index1 = maxIndex;
    let index2 = index1 - 1;
    while (index1 > 0) {
        while (index1 > 00 && index2 >= 0 && numbersArray[index1] >= numbersArray[index2]) {
            index2--;
        }
        if (index2 >= 0) {
            total++;
        }
        index1 = index2;
        index2--
    }
}
return total;
}

console.log(`le résultat est : ${getHowManyBuildingsWithAViewToTheWest([3, 7, 8, 3, 6, 1])}`);
console.log(`le résultat est : ${getHowManyBuildingsWithAViewToTheWest([10, 9, 8, 3, 3, 7, 6, 4, 3, 2, 1])}`);
console.log(`le résultat est : ${getHowManyBuildingsWithAViewToTheWest([10, 9, 8, 3, 3, 7, 6, 5, 6, 3, 2, 1])}`);
console.log(`le résultat est : ${getHowManyBuildingsWithAViewToTheWest([1, 4, 5, 8])}`);
console.log(`le résultat est : ${getHowManyBuildingsWithAViewToTheWest([1, 4, 5, 8, 8])}`);
console.log(`le résultat est : ${getHowManyBuildingsWithAViewToTheWest([1])}`);
console.log(`le résultat est : ${getHowManyBuildingsWithAViewToTheWest([])}`);

