var input = require('fs').readFileSync('./diamantes.txt', 'utf8');
var lines = input.split('\n');
let diamantes_encontrados = 0;

async function main() {
    const nr_testes = lines[0];
    for (let i = 1; i <= nr_testes; i++) {
        await procurar_diamantes(lines[i]);
        console.log(diamantes_encontrados);
        diamantes_encontrados = 0;
    }
}

async function procurar_diamantes(mina) {
    let auxiliarInicio = -1;
    let auxiliarFinal = -1;

    if (mina.indexOf('>') != -1) {
        for (let i = 0; i < mina.length; i++) {
            if (mina[i] == '<') {
                auxiliarInicio = i;
            }

            if (auxiliarInicio != -1 && mina[i] == '>') {
                auxiliarFinal = i;
                diamantes_encontrados++;
                i = mina.length;
            }
        }

        if (auxiliarInicio != -1 && auxiliarFinal != -1) {
            return procurar_diamantes(mina.replace(mina.substring(auxiliarInicio, auxiliarFinal + 1), ''));
        }

    }
}

main();
