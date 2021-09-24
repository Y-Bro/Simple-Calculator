class Calc {
    constructor(historyText, currentText) {
        this.historyText = historyText;
        this.currentText = currentText;
        this.previousString = '';
    }

    clear() {
        this.currentString = '';
        this.previousString = '';
        this.operation = undefined;
    }

    delete() {
        this.currentString = this.currentString.toString().slice(0,-1);

    }

    appendNumber(number) {
        if (this.currentString == undefined) {
            this.currentString = number;
        }
        else {

            if (number === "." && this.currentString.includes(".")) {
                return;
            }
            else {

                this.currentString = this.currentString.toString() + number.toString();
            }
        }

    }

    updateDisplay() {
        this.currentText.innerText = this.currentString;
        this.historyText.innerText = this.previousString;

    }

    chooseOperation(operation) {
        if (this.currentString === "") return;

        //auto compute whenever previous string is not null using the operation given
        if (this.previousString !== "") {
            this.compute();
        }
        this.operation = operation;
        console.log(this.operation);
        this.previousString = this.currentString + operation;
        this.currentString = "";
    }

    compute() {
        let res;
        const prev = parseFloat(this.previousString);
        const curr = parseFloat(this.currentString);

        //if an operation is given instead of a number, then just ignore it 
        if (isNaN(prev) || isNaN(curr)) return;

        switch (this.operation) {
            case "+":
                res = prev + curr;
                break;


            case "-":
                res = prev - curr;
                break;

            case "/":
                res = prev / curr;
                break;

            case "*":
                res = prev * curr;
                break;

            default:
                return;
        }

        this.currentString = res;
        this.operation = undefined;
        this.previousString = "";
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

operatorButtons.forEach((item) => {
    item.addEventListener("click", () => {
        calc.chooseOperation(item.innerText);
        calc.updateDisplay();
    })
})


equalsButton.addEventListener('click', () => {
    calc.compute();
    calc.updateDisplay();
})

allClear.addEventListener('click', () => {
    calc.clear();
    calc.updateDisplay();
})

deleteButton.addEventListener('click', () => {
    calc.delete();
    calc.updateDisplay();
})