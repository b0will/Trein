import * as Readline from "node:readline/promises";
import * as FS from "node:fs/promises";
import { stdin as input, stdout as output } from "node:process";

const readline = Readline.createInterface({ input, output });

const nome = await readline.question("Qual seu nome?");
const altura = await readline.question("Qual sua altura? ");
const peso = await readline.question("Qual seu peso? ");
const frequencia = await readline.question("Quantas vezes pretende treinar? ");
const experiencia = await readline.question("Se somar tudo, quanto tempo você tem de treino? ");

let pesoN = Number(peso)
let alturaN = Number(altura)

let imc = (pesoN) / (alturaN * alturaN);

const usuario = { nome, altura, peso, frequencia, experiencia, imc }
console.log(usuario)

const usuarioJson = JSON.stringify(usuario) // vem pronto para salvar, formato usado para enviar coisas.
console.log(usuarioJson) // se usar JSON.parse volta a ser objeto, o de cima é uma string

try {
  await FS.appendFile(nome + '.json', usuarioJson); // primeiro é o nome do arquivo, e segundo o que quer salvar no arquivo

  console.log('Deu bom');
} catch (error) {
  console.error(error);
}

readline.close();

// adicionar validações, como se altura for um número ou não.