// Saudação dinâmica
const saudacaoDinamicaElemento = document.getElementById('saudacao-dinamica');
// Cria um laço de repetição simples (executa apenas uma vez neste caso)
for (let i = 0; i < 1; i++) {
  // Pega a hora atual
  const agora = new Date();
  const hora = agora.getHours();
  let mensagemSaudacao = '';

  // Define a saudação conforme o horário
  if (hora >= 5 && hora < 12) {
    mensagemSaudacao = 'Bom dia!';
  } else if (hora >= 12 && hora < 18) {
    mensagemSaudacao = 'Boa tarde!';
  } else {
    mensagemSaudacao = 'Boa noite!';
  }

  // Exibe a saudação na página
  saudacaoDinamicaElemento.textContent = mensagemSaudacao;
}

// Seletores
const intro = document.querySelector('.introducao');
const meuTitulo = document.querySelector('#titulo-principal');

const todosOsParagrafos = document.querySelectorAll('p');
const itensDeLista = document.querySelectorAll('.item-lista');

itensDeLista.forEach(item => {
  console.log(item.textContent);
});

// Conteúdo dinâmico

// Estilo via JS
const meuBotao = document.getElementById('meuBotao');
meuBotao.style.backgroundColor = 'blue';
meuBotao.style.color = 'white';
meuBotao.style.padding = '10px 20px';
meuBotao.style.borderRadius = '5px';

// Classes CSS
const meuParagrafo = document.getElementById('meuParagrafo');
meuParagrafo.classList.add('destaque');

// Eventos
const botaoAlerta = document.getElementById('botaoAlerta');
botaoAlerta.addEventListener('click', function() {
  alert('You are so beautifull!');
});

function mostrarMensagem() {
  console.log('Botão clicado!');
}
botaoAlerta.addEventListener('click', mostrarMensagem);

// Entrada de texto
const campoTexto = document.getElementById('campoTexto');
const exibirTextoBotao = document.getElementById('exibirTextoBotao');
const textoExibido = document.getElementById('textoExibido');

exibirTextoBotao.addEventListener('click', function() {
  textoExibido.textContent = "Você digitou: " + campoTexto.value;
  campoTexto.value = ''; // limpa o campo
});
