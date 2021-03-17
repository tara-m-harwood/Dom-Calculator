console.log('dom calc')

const $screen = document.getElementById('screen')
const $spans = document.querySelectorAll('span')

$spans.forEach((span) => {
    span.addEventListener('click', processButtonPress)
    })

function processButtonPress() {
    let buttonValue = this.textContent
    let screenValue = $screen.textContent
    if (buttonValue ==='C') {
        $screen.textContent = ''
    }
    else if (screenValue === "ERROR") {
        return
    } else if (buttonValue === "=") {
        performCalc()
    } else {
        addToDisplay(buttonValue)
    }}


function addToDisplay(buttonValue) {
    console.log(buttonValue)
    $screen.textContent += buttonValue
}

function performCalc() {
    userInput = $screen.innerText
    userInput = userInput.replace("x", "*")
    userInput = userInput.replace("÷", "/")
    console.log(userInput)
    try {
        (new Function('return '+userInput)())
    } catch (e) {
        console.error(e instanceof SyntaxError);
        $screen.innerText = "ERROR"
    }
    const calc = (new Function('return '+userInput)())
    $screen.innerText = calc
}    

