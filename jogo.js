let contador = 3;
let acertou = false;
while (contador >0 && !acertou) {
 // O jogador terá 3 tentativas
 
const numeroSecreto = Math.floor(Math.random() * 10) + 1;
console.log("o número secreto é:",numeroSecreto)
let palpite = prompt("Tente adivinhar um número entre 1 e 10. Tentativas:",contador);
palpite = Number(palpite)
console.log("--- Jogo de Adivinhação ---");

console.log("Seu palpite:", palpite);

if (isNaN(palpite) || palpite < 1 || palpite > 10) { // Validação de
entrada
 alert("Por favor, digite um número válido entre 1 e 10.");
 continue; // Pula para a próxima iteração do loop sem decrementar

 }
 if (palpite === numeroSecreto) {
 alert("Parabéns! Você acertou o número secreto: ",numeroSecreto
+ "!");
 acertou = true; // Define que acertou para sair do loop
 } else if (palpite < numeroSecreto) {
 alert("Seu palpite é muito baixo. Tente um número MAIOR.");
 } else {(palpite > numeroSecreto)
 alert("Seu palpite é muito alto. Tente um número MENOR.");
 }
 contador--;

} 
if (!acertou) { // Se saiu do loop e não acertou
 alert("Suas tentativas acabaram! O número secreto era: ",numeroSecreto);
}

// Faça suas comparações aqui e exiba mensagens no console
console.log("O palpite é igual ao número secreto?", palpite === numeroSecreto);
console.log("O palpite é menor que o número secreto?",palpite < numeroSecreto);
console.log("O palpite é maior que o número secreto?",palpite > numeroSecreto);
console.log("Tentativas restantes:", contador);
