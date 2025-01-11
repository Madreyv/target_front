// Função para inverter os caracteres de uma string sem usar funções prontas
function inverterString(str) {
    let resultado = '';
    for (let i = str.length - 1; i >= 0; i--) {
        resultado += str[i];
    }
    return resultado;
}

// Função chamada ao clicar no botão "Inverter"
document.getElementById('inverter').addEventListener('click', function() {
    const inputString = document.getElementById('input-string').value;
    const resultadoInvertido = inverterString(inputString);
    document.getElementById('resultado-invertido').textContent = `Resultado invertido: ${resultadoInvertido}`;
});
