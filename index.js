const leituraLinha = require('node:readline');
const Person = require('./person.js').Person;

const terminal = leituraLinha.createInterface ({ //configurações
    input: process.stdin, // entrada no terminal
    output: process.stdout // saída no terminal
});

console.log('Olá ser humano!');
terminal.question('Qual é o seu nome? ', (respostaNome) => {
    // .trim() remove espaços antes e depois do texto
    if (!respostaNome.trim()) {
        console.log('Tem que digitar um nome válido, ser humano.');
        terminal.close();
        return;
    }

    const pessoa = new Person(respostaNome);
    // Chama o método sayName() da classe Person lá do outro arquivo e faz a coisa acontecer
    console.log(pessoa.sayName());   

    terminal.question('Qual é a sua idade? ', (resposta) => {
        console.log(`Que daora, você tem ${resposta} anos de idade.`);
        
        console.log(`Bem-vindo(a) ao nosso sistema operacional, ${respostaNome}!`);
        terminal.close();

    });
});
