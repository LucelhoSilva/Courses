document.addEventListener('DOMContentLoaded', function() {

  function trocarTema(theme) {
    document.documentElement.className = `html ${theme}-theme`;
  }

  function obterNomePagina() {
    const caminho = window.location.pathname;
    const partesCaminho = caminho.split('/');
    const nomePagina = partesCaminho[partesCaminho.length - 1];
    return nomePagina;
  }

  function trocarConteudoHeader(pagina) {
    const bannerContent = document.querySelector('.banner-content');
    const logo = document.querySelector('.logo img');
    const h1 = document.querySelector('h1');
    const p = document.querySelector('p');
    
    const button = document.createElement('button');
    const a = document.createElement('a');
    a.href = 'https://dio.me';
    a.target = '_blank';
    a.textContent = 'Quero me inscrever';
    button.appendChild(a);
    
    const i = document.createElement('i');
    i.id = 'seta-baixo';
    i.className = 'fas fa-arrow-down';
    
    bannerContent.appendChild(p);
    bannerContent.appendChild(button);
    bannerContent.appendChild(i);
  
    if (pagina === 'html') {
      logo.src = './assets/images/dio-logo-html.png';
      logo.title = 'Logotipo Trilha de HTML DIO';
      logo.alt = 'Logotipo Trilha de HTML DIO';
      h1.textContent = 'Trilha de HTML da DIO';
      p.textContent = 'A nova Trilha de HTML da DIO está disponível. Acesse já e aprenda do zero como desenvolver sites profissionais.';
    }
    else if (pagina === 'css') {
      logo.src = './assets/images/dio-logo-css.png';
      logo.title = 'Logotipo Trilha de CSS DIO';
      logo.alt = 'Logotipo Trilha de CSS DIO';
      h1.textContent = 'Trilha de CSS da DIO';
      p.textContent = 'A nova Trilha de CSS da DIO está disponível. Acesse já e aprenda do zero como desenvolver sites profissionais.';
    }
    else if (pagina === 'index') {
      logo.src = './assets/images/dio-logo-js.png';
      logo.title = 'Logotipo Trilha de JS DIO';
      logo.alt = 'Logotipo Trilha de JS DIO';
      h1.textContent = 'Trilha de JavaScript da DIO';
      p.textContent = 'A nova Trilha de JavaScript da DIO está disponível. Acesse já e aprenda do zero como desenvolver sites profissionais.';
    }
  }


  const nomePagina = obterNomePagina();

  if (nomePagina === 'index.html') {
    trocarConteudoHeader('index');
    trocarConteudoFooter('index');
    trocarTema('default'); 
  } else if (nomePagina === 'css.html') {
    trocarConteudoHeader('css');
    trocarConteudoFooter('css');
    trocarTema('css'); 
  } else if (nomePagina === 'html.html') {
    trocarConteudoHeader('html');
    trocarConteudoFooter('html');
    trocarTema('html'); 
  }

});
