function getHowManyBuildingsWithAViewToTheWest(numbersArray) {
    console.log(`\nPour la liste "[${numbersArray}]",`);
    let total = 0
    let maxIndex = numbersArray.length -1;
    let index = maxIndex - 1;
    let maxValue = 0;
    if (maxIndex >= 0) {
        total = 1;
        maxValue = numbersArray[maxIndex];
    }
    while (index >= 0) {
        let newValue = numbersArray[index];
        if (newValue > maxValue) {
            total++;
            maxValue = newValue;
        }
        index--;
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