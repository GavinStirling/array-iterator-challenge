const capitalNames = (array) => {
    return array.map((name) => {
        return name[0].toUpperCase() + name.slice(1);
    });
};

// console.log(capitalNames(["charlie", "rob"]));

const removeVowels = (array) => {
    vowels = ["a", "e", "i", "o", "u"];
    return array.filter((letter) => {
        return vowels.indexOf(letter) === -1;
    });
};

// console.log(removeVowels(["a", "c", "r", "a"]));

const meanCoaches = (array) => {
    return (
        array.reduce((previousNum, currentNum) => (previousNum += currentNum)) /
        array.length
    );
};

// console.log(meanCoaches([25, 50, 175, 50]));

const longerThanFive = (array) => {
    return array.filter((word) => {
        return word.length > 5;
    })
}

// console.log(longerThanFive(["spray", "limit", "disco", "exuberant", "destruction", "present"]))

const discoShoes = (array) => {
    const arr = array.map ((string) => {
        const splitString = string.split(" ");
        splitString[1] = splitString[1][0].toUpperCase() + splitString[1].slice(1)
        return splitString.join('');
        
    })
    return arr;
}

// console.log(discoShoes(["please camel", "join casing", "these disco", "with shoes"]));

const scrabbleScore = (array) => {
    return array.reduce((total, object) => total + object.value, 0);
}

// console.log(scrabbleScore([{ letter: "a", value: 1}, { letter: "k", value: 5}, { letter: "c", value: 3}]));

const milesToKm = (array) => {
    const convertedToKm = array.map(miles => miles * 1.609344);

    const total = [...convertedToKm].reduce((previousNum, currentNum) => (previousNum += currentNum));

    return {
        convertedKM: convertedToKm,
        totalKM: total
    }
}

// console.log(milesToKm([10, 5]));

