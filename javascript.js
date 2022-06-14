var buttons = document.getElementsByClassName("button");
var display = document.getElementById("display");
var operant1 = 0;
var operant2 = null;
var operator = null;

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {

        var value = this.getAttribute('data-value');

        if (value == '+') {

            operator = '+';
            operant1 = parseFloat(display.textContent);
            display.innerText = "";


        } else if (value == '-') {
            operator = '-';
            operant1 = parseFloat(display.textContent);
            display.innerText = "";
        } else if (value == '*') {
            operator = '*';
            operant1 = parseFloat(display.textContent);
            display.innerText = "";
        } else if (value == '/') {
            operator = '/';
            operant1 = parseFloat(display.textContent);
            display.innerText = "";
        } else if (value == '%') {
            operator = '%';
            operant1 = parseFloat(display.textContent);
            display.innerText = "";
        } else if (value == '=') {


            operant2 = parseFloat(display.textContent);
            console.log(operant1 + " " + " " + operant2);
            var result = eval(operant1 + " " + operator + " " + operant2);
            display.innerText = result;


        } else if (value == 'ac') {
            display.innerText = "";
        } else if (value == 'cut') {

            var backspace = display.textContent;
            backspace = backspace.slice(0, backspace.length - 1);

            display.innerText = backspace;
        } else if (value == 'change') {
            var change = parseFloat(display.innerText);
            change = change * -1;
            display.innerText = change;
        } else {
            display.innerText += value;
        }

    })

}