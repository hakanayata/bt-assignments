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


function getNumber(message = "Please enter a number: ") {

    let num;

    do {
        num = window.prompt(`${message}`).trim()
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

// GUESS NUMBER
function getRandomNumber() {
    return Math.round(Math.random() * 100 + 1)
}

function getUserNumber() {
    let userNumber;

    do {
        userNumber = window.prompt("Please enter a number between 0 - 100: ").trim()
    } while (userNumber === '' || isNaN(userNumber) || Number(userNumber) < 0 || Number(userNumber) > 100);

    return Number(userNumber);
}

function oneMoreGame() {
    let playMore;

    do {
        playMore = window.prompt("Do you want to play one more game? Press 'Y' for yes and 'N' for no...").trim().toLowerCase()
    } while (playMore !== 'y' && playMore !== 'n')

    return playMore

}

function guessNumber() {
    let randomNumber = getRandomNumber();
    console.log(randomNumber);
    let userNumber;
    let lives = 7;

    do {
        userNumber = getUserNumber()
        if (userNumber > randomNumber) {
            lives--;
            window.alert(`That's too high! \Lives: ${lives}`)
        } else if (userNumber < randomNumber) {
            lives--;
            window.alert(`That's too low! \Lives: ${lives}`)
        }
    } while (randomNumber !== userNumber && lives !== 0)

    if (randomNumber === userNumber) {
        window.alert("You won!")
        if (oneMoreGame() === 'y') {
            guessNumber()
        }
    } else {
        window.alert("You lost!")
        if (oneMoreGame() === 'y') {
            guessNumber()
        }
    }

}

// AREA OF A TRIANGLE
function areaTriangle() {
    let base = getNumber("Please enter the base length: ")
    let height = getNumber("Please enter the height: ")
    let area = base * height / 2

    window.alert(`The area of your triangle is: ${area}`)
}

function isLeapYear() {

    let year = getNumber("Please enter a year: ")

    if (year % 4 === 0) {

        if (year % 100 === 0) {
            if (year % 400 === 0) {
                window.alert(`${year} is a leap year!`)
            } else {
                window.alert(`${year} is not a leap year!`)
            }
        } else {
            window.alert(`${year} is a leap year!`)
        }

    } else {
        window.alert(`${year} is not a leap year!`)
    }

}