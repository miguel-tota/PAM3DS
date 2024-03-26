alert("Esta é uma informação qualquer!"); 
function minhaFuncao() {
    // corpo da função
}
    
function soma(a, b) {
    return a + b;
}

var minhaFuncao = new Function("x", "y", "return x * y");

var minhaFuncao = function() {
    // corpo da função
};



var clickCount = 0;
var clickButton = document.getElementById('clickButton');
var clickCountDisplay = document.getElementById('clickCount');

clickButton.addEventListener('click', function() {
    clickCount++;
    clickCountDisplay.textContent = clickCount;
});


function converterParaMaiusculo(string) {
    return string.toUpperCase();
}

console.log(converterParaMaiusculo("hello")); // Saída: "HELLO"
console.log(converterParaMaiusculo("JavaScript")); // Saída: "JAVASCRIPT"


function soma(a, b) {
    return a + b;
}

console.log(soma(5, 3)); // Saída: 8
console.log(soma(-10, 20)); // Saída: 10


