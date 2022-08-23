var input = require('fs').readFileSync('./teste.txt', 'utf8');
var lines = input.split('\n');

function main() {
    for (let i = 1; i <= lines[0]; i++) {
        ordernar_frase(lines[i]);
    }
}

function ordernar_frase(frase) {
    frase = frase.split(' ');
    for (let i = 0; i < frase.length - 1; i++) {
        for (let j = 0; j < frase.length - i - 1; j++) {
            if (frase[j].length < frase[j + 1].length) {
                let aux = frase[j];
                frase[j] = frase[j + 1];
                frase[j + 1] = aux;
            }
        }
    }
    console.log(frase.join(' '));
}

main();