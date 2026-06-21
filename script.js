

// Declarando e atribuindo valores a variáveis
let meuNome = "Carlos Henrique";
let minhaIdade = 90;
const PI = 3.14159;
let estaAtivo = true;
// Reatribuindo um valor a uma variável 'let'
minhaIdade = minhaIdade + 1; // Agora minhaIdade é 26
// Você pode ver os valores no console do navegador (F12 > Console)
console.log(meuNome); // Saída: Carlos
console.log(minhaIdade); // Saída: 26
console.log(PI); // Saída: 3.14159
console.log(estaAtivo); // Saída: true
let num1 = 10;
let num2 = 5;
let soma = num1 + num2; // 15
let subtracao = num1 - num2; // 5
let multiplicacao = num1 * num2; // 50
let divisao = num1 / num2; // 2
let resto = num1 % num2; // 0 (10 dividido por 5 não deixa resto)
let potencia = num1 ** 2; // 100 (10 elevado a 2)
console.log("Soma:", soma);
console.log("Divisão:", divisao);
console.log("multiplicação:",multiplicacao)
// Cuidado com a concatenação de strings com +
let texto1 = "Olá ";
let texto2 = "Mundo!";
let saudacao = texto1 + texto2;
console.log(saudacao)

// 1. Declare uma constante para o seu nome
const meuNomeCompleto = "Seu Nome Completo";
// 2. Declare uma variável para sua idade e atribua um valor numérico
let minhaIdade1 = 30;
// 3. Declare uma variável booleana que indique se você gosta de programar
let gostoDeProgramar = true;
// 4. Declare um array com 3 de suas comidas favoritas
let comidasFavoritas = ["Pizza", "Sushi", "Chocolate"];
let souTrinta = minhaIdade === 30;
// 5. Declare um objeto com informações sobre um animal de estimação

let meuPet = {
 nome: "Rex",
 tipo: "Cachorro",
 idade: 5
};
// --- Exercício de Operadores ---
// 6. Use o operador de adição para calcular sua idade daqui a 5 anos
let idadeDaqui5Anos = minhaIdade1 + 5;
// 7. Use o operador de comparação estrita (===) para verificar se sua
let jovemProgramador = gostoDeProgramar && minhaIdade < 30;
console.log("--- Informações Pessoais ---");
console.log("Meu nome é:", meuNomeCompleto);
console.log("Minha idade é:", minhaIdade1);
console.log("Gosto de programar?", gostoDeProgramar);
console.log("Minhas comidas favoritas:", comidasFavoritas);
console.log("Meu pet:", meuPet.nome, "é um", meuPet.tipo, "e tem",
meuPet.idade, "anos.");
console.log("\n--- Cálculos e Comparações ---");
console.log("Minha idade daqui a 5 anos será:", idadeDaqui5Anos);
console.log("Minha idade é exatamente 30?", souTrinta);
console.log("Sou um jovem programador apaixonado?", jovemProgramador);
