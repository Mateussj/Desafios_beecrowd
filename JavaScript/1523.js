var input = require('fs').readFileSync('./teste.txt', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

function main() {
    do {
        const linha = lines.shift();
        if (linha == "0 0")
            break;

        let quantidade_de_testes = parseInt(linha.split(' ')[0]);
        let teste = parseInt(lines[0].split(' ')[0]);
        console.log(checar_organizacao(lines.splice(0, quantidade_de_testes), linha.split(' ')[1], teste));
    } while (true);
}

function checar_organizacao(input, tamanho, horaIncial) {

    let pilha = [], horas = 0, saidas = 0;
    let funcionamento = input;

    while (funcionamento.length > 0) {

        for (let i = 0; i < input.length; i++) {

            let horarios = input[i].split(' ');

            if (parseInt(horarios[0]) === horas) {

                if (pilha.length >= tamanho)
                    return "Não";

                pilha.push(input[i].split(' '));

            }

            if (parseInt(horarios[1]) === horas) {

                let ultimoDoEstacionamento = pilha.pop();
                saidas++;
                let saindo = input[i].split(' ');

                if (ultimoDoEstacionamento[0] == saindo[0] && ultimoDoEstacionamento[1] == saindo[1]) {
                    if (input.length === saidas) {
                        funcionamento.length = 0;
                        return "Sim";
                    }
                } else {
                    funcionamento.length = 0;
                    return "Não";
                }
            }
        }
        horas++;
    }
}

main();