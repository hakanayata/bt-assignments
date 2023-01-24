const body = document.body;
const par = document.getElementById("par")
const text = document.getElementById("text")
const btn = document.getElementsByTagName("button")

const hexNumbers = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
];


function switchColor() {
    function getRandomNumber() {
        return Math.floor(Math.random() * 16)
    }


    function hexGenerator() {
        let hex = '#'
        for (let i = 0; i < 6; i++) {
            hex += hexNumbers[getRandomNumber()]
        }
        return hex
    }

    let hex = hexGenerator()
    // let hexTextBG = hexGenerator()
    body.style.backgroundColor = `${hex}`;
    text.textContent = `${hex}`;
    // par.style.backgroundColor = `${hexTextBG}`
    // par.style.color = hex

}
