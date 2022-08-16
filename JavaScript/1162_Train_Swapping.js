const arquivo = require('fs').readFileSync('./input.txt', 'utf8');
const linhas = arquivo.split('\n');

function main() {
    const nr_testes = parseInt(linhas[0]);
    for (let i = 1; i <= nr_testes; i++) {
        const qtd_trocas = contar_trocas(linhas[i * 2].split(' '));
        console.log(`Optimal train swapping takes ${qtd_trocas} swaps.`);
    }
}

function contar_trocas(vagoes) {
    let quantidade_de_trocas = 0;
    const quantidade_de_vagoes = vagoes.length;
    for (let i = 0; i < quantidade_de_vagoes; i++) {
        for (let j = 0; j < quantidade_de_vagoes - 1; j++) {
            let vagao_atual = parseInt(vagoes[j]);
            let prox_vagao = parseInt(vagoes[j + 1]);
            if (vagao_atual > prox_vagao) {
                let auxilar = vagao_atual;
                vagoes[j] = prox_vagao;
                vagoes[j + 1] = auxilar;
                quantidade_de_trocas++
            }
        }
    }
    return quantidade_de_trocas;
}

main()