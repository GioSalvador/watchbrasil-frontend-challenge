# Watch Brasil — Frontend Challenge

Este projeto foi desenvolvido como parte de um desafio técnico para a vaga de Frontend Developer Jr.
O objetivo é construir uma interface mobile-first para uma plataforma de streaming utilizando o conceito de Server-Driven UI (SDUI).

A interface foi desenvolvida com foco em mobile-first, priorizando a experiência em dispositivos móveis, conforme proposto no desafio.

A versão desktop está funcional, porém ainda possui pontos de melhoria em termos de layout e aproveitamento de espaço, podendo ser refinada em uma evolução futura do projeto.

Link da demonstração
[AQUI](https://watchbrasil-frontend-challenge.vercel.app/)

![preview](https://github.com/user-attachments/assets/f3113409-c17f-4b7d-a816-18b2fae41185)

## 1- Como instalar e rodar o projeto

clonar o repositório
```bash
git clone https://github.com/GioSalvador/watchbrasil-frontend-challenge
```
entrar na pasta do projeto
```bash
cd watchbrasil-frontend-challenge
```
instalar dependências
```bash
npm install
```
rodar em ambiente de desenvolvimento
```bash
npm run dev
```
A aplicação estará disponível em:
```bash
http://localhost:3000
```
Observações:

Caso a API esteja inativa, pode levar alguns segundos para responder (cold start)
Não é necessário configurar variáveis de ambiente para rodar o projeto

## 2- Visão Geral

A aplicação consome uma API que define dinamicamente a estrutura da página através de shelves (seções), onde cada uma possui um tipo de layout e uma lista de conteúdos.

O frontend atua como um renderizador dinâmico, interpretando esses dados e montando a interface em tempo de execução.

## 3- Conceito Principal — SDUI

A ideia de SDUI (Server-Driven UI) é permitir que o backend controle:

1. Estrutura da página
2. Ordem dos componentes
3. Tipos de layout (Banner, Carousel, List)

Isso permite:

1. Alterações sem deploy no frontend
2. Maior flexibilidade de produto
3. Evolução mais rápida da interface

## Stack utilizada
- React + Next.js (App Router)
- TypeScript
- Tailwind CSS
- React Icons

## 4- Arquitetura
Fluxo de dados:
```bash
API → Service → Renderer → Componentes → UI
```
Estrutura principal:
- services/ → comunicação com API
- types/ → tipagem dos dados
- components/ → componentes visuais
- renderer/ → lógica dinâmica de renderização (SDUI)

Como funciona a renderização:

A API retorna uma lista de shelves com o seguinte formato:

- layout: tipo do componente (Banner, Carousel, List)
- items: conteúdos a serem exibidos
- position: ordem na página

O renderer mapeia o layout para um componente React:
```bash
const componentMap = {
  Banner,
  Carousel,
  List,
};
```
E renderiza dinamicamente com base no retorno da API.

## 5- Considerações Finais
A solução proposta busca equilibrar simplicidade e escalabilidade, servindo como base para evolução futura da plataforma.
O MVP desenvolvido demonstra o conceito de SDUI de forma prática, sendo suficiente para demonstrar a ideia e orientar os próximos passos do produto.
