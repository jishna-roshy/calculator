//1.display number in textbox
var screen = document.getElementById('screen');


function displayNumber(num) {
    screen.value += num;
}

function clearScreen() {
    screen.value = "";
}

function evaluateExpression() {
    expression = sreen.value;
    screen.value = (expression);
    screen.value = output;
}


//remove


function removeLastItem() {
    currentExpression = screen.value;
    screen.value = currentExpression.slice(0, -1);

}