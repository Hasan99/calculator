function clearField() {
    document.getElementById("result").value = "";
}

function setValue(value) {
    var field = document.getElementById("result");
    field.value = field.value + value;
}

function showAnswer() {
    var field = document.getElementById("result");
    field.value = eval(field.value);
}

function square() {
    var field = document.getElementById("result");
    field.value = eval(field.value ** 2);
}