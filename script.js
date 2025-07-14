const nomeJogadorInput = document.getElementById('nome-jogador');
const iniciarJogoButton = document.getElementById('iniciar-jogo');

iniciarJogoButton.addEventListener('click', () => {
  const nomeJogador = nomeJogadorInput.value.trim();
  if (nomeJogador !== '') {
    localStorage.setItem('nomeJogador', nomeJogador);
    window.location.href = 'jogo.html';
  } else {
    alert('Por favor, digite seu nome!');
  }
});