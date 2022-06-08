/* Desafio 1 */

interface Employee {
    code: number
    name: string
}


let employee2: Employee = {
    code: 10,
    name: "John"
}



/* Desafio 2 */

enum profissao {
    "Atriz",
    "Padeiro"
}

interface Pessoa {
    nome: string
    idade: number
    profissao: profissao

}

let pessoa1: Pessoa = {
    nome: "Maria",
    idade: 29,
    profissao: profissao.Atriz
};

let pessoa2: Pessoa = {
    nome: "Roberto",
    idade: 19,
    profissao: profissao.Padeiro

}

let pessoa3: Pessoa = {
    nome: "Laura",
    idade: 32,
    profissao: profissao.Atriz
};

let pessoa4: Pessoa = {
    nome: "Carlos",
    idade: 19,
    profissao: profissao.Padeiro
}

/* Desafio 3 */

let botaoAtualizar = document.getElementById('atualizar-saldo') as HTMLButtonElement;
let botaoLimpar = document.getElementById('limpar-saldo') as HTMLButtonElement;
let soma = document.getElementById('soma') as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo') as HTMLSpanElement;

campoSaldo.innerHTML = "0"

function somarAoSaldo(soma: string): void {
    campoSaldo.innerHTML += soma;
}

function limparSaldo(): void {
    campoSaldo.innerHTML = '';
}

botaoAtualizar.addEventListener('click', function () {
    somarAoSaldo(soma.value);
});

botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});
