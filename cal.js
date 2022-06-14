let output = document.getElementById('output');

function display(num) {



    output.value += num;

}

function calculate() {
    try {
        output.value = eval(output.value);

    } catch (error) {
        alert("invalid selection");

    }
}

function del() {
    output.value = output.value.slice(0, -1);
}

function clearAll() {
    output.value = "";

}

function change() {
    output.value = output.value * -1;
}

// function chkrepeate() {

//     var last = output.value.charAt(output.value.length - 1);
//     if (last == '.') {
//         document.getElementById("decimal").disabled = true;
//     } 

//     else if (last != '.') {
//         document.getElementById("decimal").ena = true;
//     }



// }