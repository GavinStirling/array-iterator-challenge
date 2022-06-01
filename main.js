const capitalNames = (array) => {
    return array.map((name) => {
        return name[0].toUpperCase() + name.slice(1);
    });
};

// console.log(capitalNames(["charlie", "rob"]));

const removeVowels = (array) => {
    return array.filter((letter) => {
        return (
            letter.toLowerCase() != "a" ||
            letter.toLowerCase() != "e" ||
            letter.toLowerCase() != "i" ||
            letter.toLowerCase() != "o" ||
            letter.toLowerCase() != "u"
        );
    });
};

console.log(removeVowels(["a", "c", "r", "a"]));

const meanCoaches = (array) => {
    return (
        array.reduce((previousNum, currentNum) => (previousNum += currentNum)) /
        array.length
    );
};

// console.log(meanCoaches([25, 50, 175, 50]));
