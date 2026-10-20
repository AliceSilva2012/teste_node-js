const leituraLinha = require('node:readline');

const terminal = leituraLinha.createInterface ({ //configurações
    input: process.stdin, // entrada no terminal
    output: process.stdout // saída no terminal
});

terminal.question('Qual é o seu nome? ', (respostaNome) => {
    console.log(`Olá, ${respostaNome}!`);


    terminal.question('Qual é a de hoje? ', (resposta) => {
        console.log(`Bem-vindo(a) ao nosso sistema, ${respostaNome}!`);
        terminal.close();
    });

});