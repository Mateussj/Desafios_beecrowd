var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let ranking = new Map();
let mortos = new Map();

function main() {
    console.log("HALL OF MURDERERS");
    for (let i = 0; i < lines.length - 1; i++) {
        atualizar_ranking(lines[i].split(" "));
    }

    ranking = new Map([...ranking].sort());

    for (const [key, value] of ranking.entries()) {
        console.log(`${key} ${value}`);
    }
}

function atualizar_ranking(linha) {
    let assassino = linha[0];
    let assasinado = linha[1];

    if (!mortos.get(assassino)) {
        let a = ranking.get(assassino);
        if (a) {
            ranking.set(assassino, a + 1);
        } else {
            ranking.set(assassino, 1);
        }
    }
    matar(assasinado);
}

function matar(nome) {
    if (!mortos.get(nome)) {
        mortos.set(nome, nome);
        ranking.delete(nome);
    }
}

main();
