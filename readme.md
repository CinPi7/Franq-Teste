# :butterfly: Teste Técnico!

➜ Tecnologias utilizadas: Vite + React, com PNPM, TailwindCSS, entre outras para visualização de dados financeiros, como moedas.

1. A UI possui tela inicial de login e registro de novo usuário, contendo campos de email e senha, com persistência destes em local storage. Os erros estão sendo tratados, de modo a deixar visível a ação desejada do usuário. Para melhorias, seria interessante armazenar os dados de maneira segura, evitando vulnerabilidades como XSS (Cross-Site Scripting) e outros tipos de ataques, além de melhorias com "lembrar senha" e outros possíveis erros.

2. Foi feita a comunicação com a API https://hgbrasil.com/status/finance, porém para evitar problemas com CORS em ambiente de desenvolvimento, foi utilizado o server json como servidor local. Os dados, dessa forma, foram simulados para deixar o ambiente preparado para receber os verdadeiros dados da API citada.

3. Os dados foram apresentados por meio de uma tabela, definindo moeda, nome, compra, venda, variação e ações (que no momento não foi possível desenvolver).

4. As variações estão devidamente com suas cores, verde se positiva, e vermelho se negativa.

5. A interface é responsiva na web.

6. O deploy foi realizado na Vercel, utlizando o raw da API no GitHub, devido a persistência de problemas com acesso a API de modo seguro (CORS).

### :anchor: Caso queira baixar o projeto:

Para rodar o projeto, basta utilizar o `pnpm run dev` e `pnpm run server` e ajustar a URL.

---

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/oDevBR/rgb-mixin?color=green">

  <a href="https://www.linkedin.com/in/joao-aquino/" target="_blank" rel="noopener noreferrer">
    <img alt="Made by" src="https://img.shields.io/badge/made%20by-joao%20aquino-green">
  </a>

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/oDevBR/rgb-mixin?color=green">

  <a href="https://github.com/oDevBR/rgb-mixin/commits/main">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/oDevBR/rgb-mixin?color=green">
  </a>

  <a href="https://github.com/oDevBR/moveit/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/oDevBR/rgb-mixin?color=green">
  </a>

  <img alt="GitHub" src="https://img.shields.io/github/license/oDevBR/rgb-mixin?color=green">
</p>
