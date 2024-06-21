// script.js
document.getElementById('googleForm').addEventListener('submit', function(event) {
    document.getElementById('mensagem').textContent = 'Enviando...';
    setTimeout(function() {
      document.getElementById('mensagem').textContent = '';
    }, 2000); // Limpa a mensagem após 2 segundos
  });
  