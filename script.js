class Calc {
    constructor(historyText, currentText) {
        this.historyText = historyText;
        this.currentText = currentText;

    }

    clear() {
        this.currentString = '';
        this.previousString = '';
        this.operation = undefined;
    }

    delet() {

    }

    appendNumber(number) {
        if (this.currentString == undefined) {
            this.currentString = number;
        }
        else {
            this.currentString = this.currentString.toString() + number.toString();
        }

    }

    updateDisplay() {
        this.currentText.innerText = this.currentString;

    }

    chooseOperation(operation) {

    }

    compute() {

    }


}



const numberButtons = document.querySelectorAll("[number]");
const operatorButtons = document.querySelectorAll("[operator]");
const deleteButton = document.querySelector("[delete]");
const equalsButton = document.querySelector("[equals");
const allClear = document.querySelector("[clear]");
const historyText = document.querySelector("[previousText]");
const currentText = document.querySelector("[currentText]");

console.log(historyText);


const calc = new Calc(historyText, currentText);

numberButtons.forEach(item => {
    item.addEventListener("click", () => {
        calc.appendNumber(item.innerText);
        calc.updateDisplay();
    })
})