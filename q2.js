// Função para verificar se um número é um quadrado perfeito
function ehQuadradoPerfeito(x) {
    return Number.isInteger(Math.sqrt(x));
}

// Função para verificar se um número pertence à sequência de Fibonacci
function ehFibonacci(numero) {
    return (
        ehQuadradoPerfeito(5 * numero * numero + 4) ||
        ehQuadradoPerfeito(5 * numero * numero - 4)
    );
}

// Lógica para capturar o clique do botão e verificar o número
document.getElementById("verificar").addEventListener("click", function () {
    const numero = parseInt(document.getElementById("numero").value);
    const resultado = document.getElementById("resultado");

    if (isNaN(numero)) {
        resultado.textContent = "Por favor, insira um número válido.";
        return;
    }

    if (ehFibonacci(numero)) {
        resultado.textContent = `O número ${numero} pertence à sequência de Fibonacci.`;
    } else {
        resultado.textContent = `O número ${numero} NÃO pertence à sequência de Fibonacci.`;
    }
});
