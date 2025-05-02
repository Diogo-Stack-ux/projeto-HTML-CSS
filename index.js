
  const toggleButton = document.getElementById('toggle-dark-mode');
  const body = document.body;

  // Carregar preferência do modo escuro do localStorage
  if (localStorage.getItem('darkMode') === 'true') {
    body.classList.add('dark-mode');
    toggleButton.textContent = '☀️ Modo Claro';
  }

  toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const darkModeAtivo = body.classList.contains('dark-mode');
    toggleButton.textContent = darkModeAtivo ? '☀️ Modo Claro' : '🌙 Modo Escuro';
    localStorage.setItem('darkMode', darkModeAtivo);


  });
  
  const form = document.getElementById('form-contato');
  const nomeInput = document.getElementById('nome');
  const emailInput = document.getElementById('email');
  const mensagemInput = document.getElementById('mensagem');
  const statusDiv = document.getElementById('mensagem-status');

  const erroNome = document.getElementById('erro-nome');
  const erroEmail = document.getElementById('erro-email');
  const erroMensagem = document.getElementById('erro-mensagem');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    
    // Reset mensagens
    erroNome.textContent = '';
    erroEmail.textContent = '';
    erroMensagem.textContent = '';
    statusDiv.textContent = '';
    statusDiv.className = '';

    const nome = nomeInput.value.trim();
    const email = emailInput.value.trim();
    const mensagem = mensagemInput.value.trim();
    let temErro = false;

    if (!nome) {
      erroNome.textContent = 'Por favor, informe seu nome.';
      temErro = true;
    }

    if (!email) {
      erroEmail.textContent = 'Por favor, informe seu e-mail.';
      temErro = true;
    } else {
      const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      if (!emailValido) {
        erroEmail.textContent = 'E-mail inválido.';
        temErro = true;
      }
    }

    if (!mensagem) {
      erroMensagem.textContent = 'Por favor, digite sua mensagem.';
      temErro = true;
    }

    if (temErro) {
      statusDiv.textContent = 'Preencha corretamente os campos abaixo.';
      statusDiv.classList.add('erro');
      return;
    }

    // Tudo certo!
    statusDiv.textContent = 'Mensagem enviada com sucesso!';
    statusDiv.classList.add('sucesso');
    form.reset();
  }
);
