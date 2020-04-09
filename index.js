const answer1 = document.querySelector('#answer1');
const answer2 = document.querySelector('#answer2');
const answer3 = document.querySelector('#answer3');
const answer4 = document.querySelector('#answer4');
const answer5 = document.querySelector('#answer5');
const answer6 = document.querySelector('#answer6');
const answer7 = document.querySelector('#answer7');

const yourString = document.querySelector('#your-string');

const getNumberOfChars = (name) => name.length;

const getNumberOfCharacters = (name) => name.length;

const getFirstChar = (name) => name[0];

const getLastChar = (name) => name[name.length-1];

const getLower = (name) => name.toLowerCase();

const getUpper = (name) => name.toUpperCase();

const getCapitalized = (name) => name[0].toUpperCase() + name.substring(1).toLowerCase();

const getClean = (name) => name.trim();

yourString.addEventListener("keyup", () => {
    const value = yourString.value;

    answer1.textContent = getNumberOfCharacters(value);
    answer2.textContent = getFirstChar(value);
    answer3.textContent = getLastChar(value);
    answer4.textContent = getLower(value);
    answer5.textContent = getUpper(value);
    if (value) {
        answer6.textContent = getCapitalized(value);
    } else {
        answer6.textContent = "";
    }
    answer7.textContent = getClean(value);
})

