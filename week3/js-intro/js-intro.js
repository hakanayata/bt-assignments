// UNI GRADE

function showLetterGrade() {
    const numberGrade = getNumberGrade()
    if (numberGrade >= 0 && numberGrade < 26) {
        window.alert("Your grade is => 'F'")
    } else if (numberGrade >= 26 && numberGrade < 46) {
        window.alert("Your grade is => 'D'")
    } else if (numberGrade >= 46 && numberGrade < 66) {
        window.alert("Your grade is => 'C'")
    } else if (numberGrade >= 76 && numberGrade < 91) {
        window.alert("Your grade is => 'B'")
    } else {
        window.alert("Your grade is => 'A'")
    }

}

function getNumberGrade() {
    let numberGrade;

    do {
        numberGrade = window.prompt("Please enter a score between 0-100: ").trim()
    } while (numberGrade === '' || isNaN(numberGrade) || Number(numberGrade) < 0 || Number(numberGrade) > 100);

    return Number(numberGrade);
}

// NTH MONTH
const months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december']

function monthNumber() {
    let monthName = getMonthName()
    switch (monthName) {
        case 'january':
            window.alert(`${monthName.charAt(0).toUpperCase() + monthName.slice(1)} is the '1st' month of the year.`)
            break;
        case 'february':
            window.alert(`${monthName.charAt(0).toUpperCase() + monthName.slice(1)} is the '2nd' month of the year.`)
            break;
        case 'march':
            window.alert(`${monthName.charAt(0).toUpperCase() + monthName.slice(1)} is the '3rd' month of the year.`)
            break;
        case 'april':
            window.alert(`${monthName.charAt(0).toUpperCase() + monthName.slice(1)} is the '4th' month of the year.`)
            break;
        case 'may':
            window.alert(`${monthName.charAt(0).toUpperCase() + monthName.slice(1)} is the '5th' month of the year.`)
            break;
        case 'june':
            window.alert(`${monthName.charAt(0).toUpperCase() + monthName.slice(1)} is the '6th' month of the year.`)
            break;
        case 'july':
            window.alert(`${monthName.charAt(0).toUpperCase() + monthName.slice(1)} is the '7th' month of the year.`)
            break;
        case 'august':
            window.alert(`${monthName.charAt(0).toUpperCase() + monthName.slice(1)} is the '8th' month of the year.`)
            break;
        case 'september':
            window.alert(`${monthName.charAt(0).toUpperCase() + monthName.slice(1)} is the '9th' month of the year.`)
            break;
        case 'october':
            window.alert(`${monthName.charAt(0).toUpperCase() + monthName.slice(1)} is the '10th' month of the year.`)
            break;
        case 'november':
            window.alert(`${monthName.charAt(0).toUpperCase() + monthName.slice(1)} is the '11th' month of the year.`)
            break;
        case 'december':
            window.alert(`${monthName.charAt(0).toUpperCase() + monthName.slice(1)} is the '12th' month of the year.`)
            break;
        default:
            window.alert(`Sorry, ${monthName} is not valid!`)

    }

}




function getMonthName() {
    let monthName;

    do {
        monthName = window.prompt("Please enter the name of a month: ").trim()
    } while (monthName === '' || typeof (monthName) !== 'string' || months.includes(monthName.toLowerCase().trim()) === false);

    return monthName.trim().toLowerCase();
}


// FEED ME SOME NUMBERS

function sumMultMinMaxOfNumbers() {
    let nums = getNumbers()

    let sum = nums.reduce((a, b) => a + b)
    let multiplication = nums.reduce((a, b) => a * b)
    let minNum = Math.min(...nums)
    let maxNum = Math.max(...nums)

    window.alert(`Numbers: ${nums} \nSum: ${sum} \nMultiplication: ${multiplication} \nMin: ${minNum} \nMax: ${maxNum}`)

}


function getNumbers() {

    let nums = [];
    let num;

    for (let i = 0; i < 3; i++) {

        do {
            num = window.prompt(`Please enter a value for number ${i + 1}: `).trim()
        } while (num === '' || isNaN(num));

        nums.push(Number(num))

    }

    return nums;
}

// ODD OR EVEN

function oddOrEven() {
    let num = getNumber()
    if (num % 2 === 0) {
        window.alert(`${num} is an even number.`)
    } else {
        window.alert(`${num} is an odd number.`)
    }
}


function getNumber() {

    let num;

    do {
        num = window.prompt("Please enter a number: ").trim()
    } while (num === '' || isNaN(num));

    return Number(num);
}

// FAHRENHEIT TO CELCIUS OR VICE VERSA

function celciusFahrenheit(degree) {
    const fahrenheit = (degree * 1.8) + 32
    window.alert(`${degree}°C is ${fahrenheit}°F`)
}

function fahrenheitCelcius(degree) {
    const celcius = (degree - 32) / 1.8
    window.alert(`${degree}°F is ${celcius}°C`)
}

function getTempUnit() {
    let units = ['c', 'f']
    let targetUnit;

    do {
        targetUnit = window.prompt("To which temperature unit do you want to convert? Type 'C' for Celcius or 'F' for Fahrenheit: ").trim().toLowerCase()
    } while (units.includes(targetUnit) === false)

    return targetUnit;
}

function getDegree(targetUnit) {

    let degree;
    let unit = `${targetUnit === 'c' ? 'F' : 'C'}`

    do {
        degree = window.prompt(`Please enter a degree in °${unit}: `).trim()
    } while (degree === '' || isNaN(degree));

    return Number(degree);
}

function tempConversion() {
    let targetUnit = getTempUnit()

    // function from previous task
    let degree = getDegree(targetUnit)

    if (targetUnit === 'c') {
        fahrenheitCelcius(degree)
    } else {
        celciusFahrenheit(degree)
    }
}

// Feed numbers until Q

function getNumbersUntilQ() {

    let nums = [];
    let num;

    let i = 0

    while (true) {

        do {
            num = window.prompt(`Please enter a value for number ${i + 1}, press 'q' or 'Q' to end: `).trim()
        } while (num === '' || (isNaN(num) === true && num.toLowerCase() !== 'q'));

        if (num.toLowerCase() === 'q') {
            break;
        }
        nums.push(Number(num));

        i++;

    }

    return nums;
}

function averageOfNumbers() {
    let numbers = getNumbersUntilQ()
    let sum = numbers.reduce((a, b) => a + b)
    let avr = sum / numbers.length
    window.alert(`Numbers: ${numbers} \nAverage: ${avr}`)
}

