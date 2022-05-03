console.log("connecté");
//Je sélectionne et je stocke
const btn = document.getElementById("btn");
let result = "";
const resultContainer = document.getElementById("result");
//Je soumets ces éléments à un évènement "click"
btn.addEventListener("click", function(){
    const firstValue = parseInt(document.getElementById("firstValue").value);
    const secondValue = parseInt(document.getElementById("secondValue").value);
    const operator = document.getElementById("operator").value;
    
    switch(operator) {
        case "+":
            result = firstValue + secondValue
            break;
        case "-":
            result = firstValue - secondValue;
            break;
        case "/":
            result = firstValue / secondValue;
            break;
        case "*":
            result = firstValue * secondValue;
            break;
        default:
            console.log("Invalid Operator");
    }
    resultContainer.innerHTML = result;
})