async function processarFaturamento() {
    try {
        // Ler dados do arquivo JSON
        const resposta = await fetch('dados/dados.json');
        const faturamentoMensal = await resposta.json();

        // Filtrar dias válidos (com faturamento > 0)
        const diasComFaturamento = faturamentoMensal.filter(dia => dia.valor > 0);

        // Calcular menor e maior valor de faturamento
        const menorFaturamento = Math.min(...diasComFaturamento.map(dia => dia.valor));
        const maiorFaturamento = Math.max(...diasComFaturamento.map(dia => dia.valor));

        // Calcular a média mensal (considerando apenas dias com faturamento)
        const somaFaturamento = diasComFaturamento.reduce((soma, dia) => soma + dia.valor, 0);
        const mediaMensal = somaFaturamento / diasComFaturamento.length;

        // Contar dias com faturamento acima da média
        const diasAcimaDaMedia = diasComFaturamento.filter(dia => dia.valor > mediaMensal).length;

        // Exibir resultados na página
        document.getElementById('menor-faturamento').innerText = menorFaturamento.toFixed(2);
        document.getElementById('maior-faturamento').innerText = maiorFaturamento.toFixed(2);
        document.getElementById('dias-acima-media').innerText = diasAcimaDaMedia;

    } catch (erro) {
        console.error('Erro ao processar os dados:', erro);
    }
}

// Executar a função ao carregar a página
window.onload = processarFaturamento;
