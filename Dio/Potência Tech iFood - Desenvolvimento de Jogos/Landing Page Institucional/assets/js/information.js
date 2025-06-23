const courseContentSection = document.getElementById('course-content');
const transformWorldSection = document.getElementById('transform-world');
const professionalChallengesSection = document.getElementById('professional-challenges');

const courseContentHTML = `
  <h2>O que vou aprender?</h2>
  <p>
    Temos 6 módulos recheados de conteúdos do básico ao avançado para que você aprenda a desenvolver sites profissionais utilizando somente HTML e CSS: sem nenhuma biblioteca ou framework a mais.
  </p>
  <ul class="modules-list">
    <li><span>Módulo 01:</span> primeiros passos com HTML</li>
    <li><span>Módulo 02:</span> trabalhando com elementos HTML</li>
    <li><span>Módulo 03:</span> refinando os estilos HTML das nossas páginas</li>
    <li><span>Módulo 03:</span> Conhecendo as tags</li>
    <li><span>Módulo 04:</span> Criando páginas com HTML</li>
    <li><span>Módulo 05:</span> Diferença de Id e Class</li>
    <li><span>Módulo 06:</span> Criando componentes com HTML</li>
  </ul>
`;

const transformWorldHTML = `
  <p>TRANSFORME O MUNDO COM A GENTE</p>
`;

const professionalChallengesHTML = `
  <h2>Evolua e encare novos desafios profissionais</h2>
  <img src="assets/images/professional-challenges.png" title="Homem lendo depoimentos em um tablet" alt="Homem lendo depoimentos em um tablet" />
  <p>
    Junte-se ao nosso ecossistema e transforme o mundo com a gente! Todos os dias dezenas de empresas acessam a nossa plataforma em busca dos talentos mais criativos, dinâmicos e colaborativos, além do conhecimento técnico. A nossa missão é te preparar para que você conecte-se com as melhores oportunidades.
  </p>
`;

courseContentSection.innerHTML = courseContentHTML;
transformWorldSection.innerHTML = transformWorldHTML;
professionalChallengesSection.innerHTML = professionalChallengesHTML;