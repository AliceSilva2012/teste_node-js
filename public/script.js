// Isso é pro Node.js e o Express.js rodarem o terminal no navegador, e não no terminal do VS Code.

const input = document.getElementById('terminal-input');
const saida = document.getElementById('terminal-saida');
const terminalBody = document.getElementById('terminal-body');

let etapa = 'nome';
let nomeSalvo = '';

// Funciona como o console.log, mas escreve dentro da tela do navegador
function escreverNoTerminal(texto, ehUsuario) {
    const p = document.createElement('p');

    if (ehUsuario === true) {
        p.textContent = 'alice@dev:~$ ' + texto;
    } else {
        p.textContent = texto;
    }

    saida.appendChild(p);
    terminalBody.scrollTop = terminalBody.scrollHeight;
}

// Fica escutando quando o usuário aperta uma tecla no input
input.addEventListener('keydown', async function (evento) {
    // Só executa se a tecla apertada for Enter
    if (evento.key === 'Enter') {
        const valor = input.value;
        escreverNoTerminal(valor, true);
        input.value = '';

        // 1 ETAPA: Perguntando o nome
        if (etapa === 'nome') {
            const resposta = await fetch('/api/nome', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ nome: valor })
            });

            const dados = await resposta.json();

            if (dados.erro === true) {
                escreverNoTerminal(dados.mensagem, false);
                escreverNoTerminal('(Sessão encerrada. Digite "reiniciar" para tentar novamente)', false);
                etapa = 'encerrado';
            } else {
                nomeSalvo = valor.trim();
                escreverNoTerminal(dados.saudacao, false);
                escreverNoTerminal(dados.pergunta, false);
                etapa = 'idade';
            }

        // 2 ETAPA: Perguntando a idade
        } else if (etapa === 'idade') {
            const resposta = await fetch('/api/idade', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ nome: nomeSalvo, idade: valor })
            });

            const dados = await resposta.json();

            if (dados.erro === true) {
                escreverNoTerminal(dados.mensagem, false);
                escreverNoTerminal('(Sessão encerrada. Digite "reiniciar" para tentar novamente)', false);
                etapa = 'encerrado';
            } else {
                // Mostra cada mensagem final que voltou do servidor
                for (let i = 0; i < dados.mensagens.length; i++) {
                    escreverNoTerminal(dados.mensagens[i], false);
                }

                escreverNoTerminal('(Sessão encerrada. Digite "reiniciar" para rodar de novo)', false);
                etapa = 'encerrado';
            }

        // 3 ETAPA: Se já terminou e a pessoa digitar "reiniciar"
        } else if (etapa === 'encerrado') {
            if (valor.trim().toLowerCase() === 'reiniciar') {
                saida.innerHTML = '';
                nomeSalvo = '';
                etapa = 'nome';
                escreverNoTerminal('Olá ser humano!', false);
                escreverNoTerminal('Qual é o seu nome?', false);
            }
        }
    }
});