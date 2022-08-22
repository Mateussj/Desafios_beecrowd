var input = require('fs').readFileSync('./teste.txt', 'utf8');
var lines = input.split('\n');
let ganhador = "Carlos";

async function main() {
    let i = 0;
    while (lines[i] != 0) {
        await definir_ganhador(lines[i].split(' '));
        console.log(ganhador);
        ganhador = "Carlos";
        i++;
    }
}

async function definir_ganhador(numero_do_jogo) {
    let aux;

    for (let i = 1; i < numero_do_jogo[0]; i++) {
        if (numero_do_jogo[i] > numero_do_jogo[i + 1]) {
            //console.log(`${ganhador} trocou ${numero_do_jogo[i]} por ${numero_do_jogo[i + 1]} da sequencia ${numero_do_jogo}`);
            aux = numero_do_jogo[i];
            numero_do_jogo[i] = numero_do_jogo[i + 1];
            numero_do_jogo[i + 1] = aux;
            i++;
            await trocar_vez_ganhador();
        }
    }

    if (await checar_se_esta_ordenado(numero_do_jogo)) {
        return true;
    } else {
        await definir_ganhador(numero_do_jogo);
    }
}

async function checar_se_esta_ordenado(numero_do_jogo) {
    for (let i = 1; i < numero_do_jogo[0]; i++) {
        if (numero_do_jogo[i] > numero_do_jogo[i + 1]) {
            return false;
        }
    }
    return true;
}

async function trocar_vez_ganhador() {
    if (ganhador == "Marcelo") {
        ganhador = "Carlos";
    } else {
        ganhador = "Marcelo";
    }
}

main();