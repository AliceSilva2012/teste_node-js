const express = require('express'); //caminho do express
const path = require('path'); //caminho do path
const { Person } = require('./person.js'); //caminha da classe Person que ta dentro daquele arquivo person.js

const app = express();
const PORT = 3000; //a porta que o servidor vai rodar

app.use(express.json()); //middleware para interpretar o corpo das requisições como JSON (ja que o terminal do vscode é diferente de um feito no navegador)
app.use(express.static(path.join(__dirname, '../public')));

// Rota que valida o nome e chama pessoa.sayName()
app.post('/api/nome', (req, res) => {
    const respostaNome = req.body.nome || '';

    if (!respostaNome.trim()) {
        return res.json({
            erro: true,
            mensagem: 'Tem que digitar um nome válido, ser humano.'
        });
    }

    const pessoa = new Person(respostaNome.trim()); //cria uma nova instância da classe Person com o nome fornecido
    return res.json({
        erro: false,
        saudacao: pessoa.sayName(),
        pergunta: 'Qual é a sua idade? '
    });
});

// Rota que valida a idade e retorna suas mensagens finais
app.post('/api/idade', (req, res) => {
    const { nome, idade } = req.body;
    const idadeNumero = String(idade || '').replace(/\D/g, '');

    if (!idadeNumero) {
        return res.json({
            erro: true,
            mensagem: 'Não consegui encontrar nenhum número na sua resposta, ser humano.'
        });
    }
    return res.json({ //se nao for um erro, retorna as respostas 
        erro: false,
        mensagens: [
            `Que daora, você tem ${idadeNumero} anos de idade.`,
            `Bem-vindo(a) ao nosso sistema operacional, ${nome.trim()}!`
        ]});
});

app.listen(PORT, () => {
    console.log(`Terminal rodando em http://localhost:${PORT}`);
});