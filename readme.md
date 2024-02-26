# :butterfly: Teste Técnico!

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/CinPi7/Franq-Teste?color=pink">

  <a href="https://www.linkedin.com/in/cinthiapissetti/" target="_blank" rel="noopener noreferrer">
    <img alt="Made by" src="https://img.shields.io/badge/made%20by-cinthia%20pissetti-pink">
  </a>

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/CinPi7/Franq-Teste?color=pink">

  <a href="https://github.com/oDevBR/rgb-mixin/commits/main">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/CinPi7/Franq-Teste?color=pink">
  </a>
</p>

Tecnologias utilizadas: Vite + React, TypeScript, com PNPM, TailwindCSS, entre outras tecnologias front-end para visualização de dados financeiros, como moedas :moneybag:.

## :open_file_folder: Sobre o Projeto

1. A UI possui tela inicial de login e registro de novo usuário, contendo campos de email e senha, com persistência destes em local storage. Os erros estão sendo tratados, de modo a deixar visível a ação desejada do usuário. Para melhorias, seria interessante armazenar os dados de maneira segura, evitando vulnerabilidades como XSS (Cross-Site Scripting) e outros tipos de ataques, além de melhorias com "lembrar senha" e outros possíveis erros.

2. Foi feita a comunicação com a API https://hgbrasil.com/status/finance, porém para evitar problemas com CORS em ambiente de desenvolvimento, foi utilizado o server json como servidor local. Os dados, dessa forma, foram simulados para deixar o ambiente preparado para receber os verdadeiros dados da API citada.

3. Os dados foram apresentados por meio de uma tabela, definindo moeda, nome, compra, venda, variação e ações (que no momento não foi possível desenvolver).

4. As variações estão devidamente com suas cores, verde se positiva, e vermelho se negativa.

5. A interface é responsiva na web.

6. O deploy foi realizado na Vercel, utlizando o raw da API no GitHub, devido a persistência de problemas com acesso a API de modo seguro (CORS).

### :rocket: Tecnologias

- [Vite](https://vitejs.dev/)
- [ReactJS](https://reactjs.org/)
- [TailwindCSS](https://tailwindcss.com/)

### :fountain: Começar Local

**Clone o projeto para acessá-lo:**

```bash
$ git clone git@github.com:CinPi7/Franq-Teste.git && pnpm run dev && pnpm run server
```

### :globe_with_meridians: Deploy com a Vercel (clique no foguete)!

<p align="center">
 <a target="_blank" rel="noopener noreferrer" href="https://franq-teste.vercel.app/login"><img width="50" height="50" src='https://cdn-icons-png.flaticon.com/512/4334/4334058.png' alt="Logo" /></a>
</p>
