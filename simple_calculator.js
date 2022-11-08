function sRoot() {
    var SQRT = document.getElementById("screen").value;
    var result = Math.sqrt(SQRT);
    document.getElementById("screen").value = result;
}
function clean() {
    document.getElementById("screen").value = " ";
}
function C() {
    document.getElementById("screen").value = " ";
}
function remove() {
    var num = document.getElementById("screen").value;
    var number = num.slice(0, -1);
    document.getElementById("screen").value = number;
}
function SIN() {
    var sin = document.getElementById("screen").value;
    var sin = sin * (3.1416 / 180);
    var result = Math.sin(sin);
    document.getElementById("screen").value = result;
}
function COS() {
    var cos = document.getElementById("screen").value;
    var cos = cos * (3.1416 / 180);
    var result = Math.cos(cos);
    document.getElementById("screen").value = result;
}
function TAN() {
    var tan = document.getElementById("screen").value;
    var tan = tan * (3.1416 / 180);
    var result = Math.tan(tan);
    document.getElementById("screen").value = result;
}
function Square() {
    var num1 = document.getElementById("screen").value;
    var num2 = document.getElementById("screen").value;
    var num = Math.pow(num1, num2);
    document.getElementById("screen").value = num;
}
function number7() {
    document.getElementById("screen").value += '7';
}
function number8() {
    document.getElementById("screen").value += '8';
}
function number9() {
    document.getElementById("screen").value += '9';
}
function numberAdd() {
    document.getElementById("screen").value += '+';
}
function number4() {
    document.getElementById("screen").value += '4';
}
function number5() {
    document.getElementById("screen").value += '5';
}
function number6() {
    document.getElementById("screen").value += '6';
}
function numberSubs() {
    document.getElementById("screen").value += '-';
}
function number1() {
    document.getElementById("screen").value += '1';
}
function number2() {
    document.getElementById("screen").value += '2';
}
function number3() {
    document.getElementById("screen").value += '3';
}
function numberMulti() {
    document.getElementById("screen").value += '*';
}
function number0() {
    document.getElementById("screen").value += '0';
}
function numberDot() {
    document.getElementById("screen").value += '.';
}
function numberEqual() {
    var x = document.getElementById("screen").value;
    var y =  eval(x)
    document.getElementById("screen").value = y;
}
function numberDiv() {
    document.getElementById("screen").value += '/';
}