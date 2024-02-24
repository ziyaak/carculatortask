let calculatorButtons = document.querySelectorAll(".calc-btn");
let resultBoxEl = document.getElementById("result");
let result = "";
let oldResult = 0;
let operation = "";

function calculate() {
    if (operation == "+") {
        resultBoxEl.value = oldResult + +result;
    } else if (operation == "-") {
        resultBoxEl.value = oldResult - +result;
    } else if (operation == "*") {
        resultBoxEl.value = oldResult * +result;
    } else if (operation == "/") {
        resultBoxEl.value = oldResult / +result;
    }
}

for (let i = 0; i < calculatorButtons.length; i++) {
    let calculatorBtn = calculatorButtons[i];

    calculatorBtn.addEventListener("click", function () {
        let userValue = calculatorBtn.value;

        if (userValue == "=") {
            calculate();
            return;
        }

        if (isNaN(userValue)) {
            operation = userValue;
            oldResult = +result;
            result = "";
            return;
        }

        result += userValue;
        resultBoxEl.value = result;
    });
}