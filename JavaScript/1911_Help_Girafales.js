var input = require("fs").readFileSync("./teste.txt", "utf8");
let lines = input.split('\n');

let chamadaParaComparar = new Map();

function main() {
    do {
        let caso_de_testes = lines.shift();

        //verifica se esta no fim do arquivo
        if (caso_de_testes == 0 && chamadaParaComparar.size == 0)
            return false;

        // se tem chamada para comprar ele compara
        if (chamadaParaComparar.size > 0) {
            let assinaturasFalsas = 0;

            for (let i = 0; i < caso_de_testes; i++) {
                let nomes = lines[i].split(' ');
                assinaturasFalsas += compararchamada(nomes);

            }
            console.log(assinaturasFalsas);
            chamadaParaComparar.clear();

        } else {
            for (let i = 0; i < caso_de_testes; i++) {
                let nomes = lines[i].split(' ');
                chamadaParaComparar.set(nomes[0], nomes[1]);
            }
        }
        // se não for encontrado um dia anterior para comparar ele armazena para comaprar com o proximo dia
        lines = lines.slice(caso_de_testes, lines.length);

    } while (true)
};

function compararchamada(nomesAComparar) {
    let nomeCerto = chamadaParaComparar.get(nomesAComparar[0]);
    // se nome certo for encontrado quer dizer que foi na aula no dia anterior, então compararemos com a assinatura do dia
    if (nomeCerto) {
        let assinado = nomesAComparar[1].split('');
        nomeCerto = nomeCerto.split('');

        let difencas = arr_diff(assinado, nomeCerto);

        if (difencas.length >= 2) {
            return 1;
        } else {
            return 0;
        }
    }

}

function arr_diff(a1, a2) {

    dif = [];
    for (let i = 0; i < a1.length; i++) {
        if (!(a1[i] === a2[i])) {
            dif.push(a2[i]);
        }
    }

    return dif;
}


main();