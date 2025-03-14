function input(num) {
    var number = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = number + num;
}

function clean() {
    document.getElementById('result').innerHTML = "";
}

function backspace() {
    var resultado = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = resultado.substring(0, resultado.length -1);
}

function squareRoot() {
    var squareRoot = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = Math.sqrt(squareRoot);
}

function result() {
    var respostaFinal = document.getElementById('result').innerHTML;
    respostaFinal = respostaFinal.replace('^', '**');
    if (respostaFinal) {
        console.log(respostaFinal);
        document.getElementById('result').innerHTML = eval(respostaFinal);
    } else {
        document.getElementById('result').innerHTML = "";
    }
}

document.addEventListener('keydown', function(event) {
    const key = event.key;

    if (key === "Shift" || key === "Control" || key === "Alt") return;

    if ((key >= '0' && key <= '9') || key === '.') {
        input(key);
    } else if (key === '+' || key === '-' || key === '*' || key === '/' || key === '^') {
        input(key);
    } else if (key === '(' || key === ')') {
        input(key);
    } else if (key === 'Backspace') {
        backspace();
    } else if (key === 'Enter') {
        result();
    } else if (key === 'c' || key === 'C') {
        clean();
    } else if (key === 'r' || key === 'R') {
        squareRoot();
    }
});
