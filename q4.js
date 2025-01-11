// Dados de faturamento mensal por estado
const faturamentoPorEstado = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
};

// Calcular o total de faturamento
let totalFaturamento = 0;
for (let estado in faturamentoPorEstado) {
    totalFaturamento += faturamentoPorEstado[estado];
}
// Calcular o percentual de cada estado
const percentualPorEstado = {};
for (let estado in faturamentoPorEstado) {
    const faturamento = faturamentoPorEstado[estado];
    const percentual = ((faturamento / totalFaturamento) * 100).toFixed(2); // Limitando a 2 casas decimais
    percentualPorEstado[estado] = percentual;
}

// Exibir os resultados na página
document.getElementById('percentual-SP').textContent = `${percentualPorEstado['SP']}%`;
document.getElementById('percentual-RJ').textContent = `${percentualPorEstado['RJ']}%`;
document.getElementById('percentual-MG').textContent = `${percentualPorEstado['MG']}%`;
document.getElementById('percentual-ES').textContent = `${percentualPorEstado['ES']}%`;
document.getElementById('percentual-Outros').textContent = `${percentualPorEstado['Outros']}%`;