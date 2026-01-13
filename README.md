# Dashboard Administrativo – React

Este projeto é um **painel administrativo (Admin Dashboard)** desenvolvido com **React.js**, focado em demonstrar organização de layout, navegação entre páginas e estrutura de um sistema real de gestão.

O objetivo do projeto é **apresentação de portfólio**, mostrando domínio de conceitos fundamentais de Front-end moderno.

---

## 🛠️ Tecnologias Utilizadas

- **React.js** – Construção da interface
- **React Router DOM** – Gerenciamento de rotas
- **Context API** – Gerenciamento de estado global
- **CSS Moderno (Vanilla CSS)** – Estilização sem bibliotecas externas
- **Vite** – Ambiente de desenvolvimento rápido

---

## 📋 Funcionalidades

- **Layout Administrativo Completo**
  - Sidebar fixa para navegação
  - Header superior com menu de usuário e dropdown

- **Navegação por Rotas**
  - Dashboard (Home)
  - Usuários
  - Tarefas / Ordens de Serviço

- **Gestão de Ordens de Serviço (OS)**
  - Estado centralizado via Context API
  - Estrutura preparada para integração com API futuramente

- **Interface Limpa e Responsiva**
  - Cards de métricas (KPIs)
  - Tabelas organizadas
  - Lista de tarefas com status
  - Componentes reutilizáveis

---

## 📁 Estrutura do Projeto

# Dashboard Administrativo – React

Este projeto é um **painel administrativo (Admin Dashboard)** desenvolvido com **React.js**, focado em demonstrar organização de layout, navegação entre páginas e estrutura de um sistema real de gestão.

O objetivo do projeto é **apresentação de portfólio**, mostrando domínio de conceitos fundamentais de Front-end moderno.

---

## 🛠️ Tecnologias Utilizadas

- **React.js** – Construção da interface
- **React Router DOM** – Gerenciamento de rotas
- **Context API** – Gerenciamento de estado global
- **CSS Moderno (Vanilla CSS)** – Estilização sem bibliotecas externas
- **Vite** – Ambiente de desenvolvimento rápido

---

## 📋 Funcionalidades

- **Layout Administrativo Completo**
  - Sidebar fixa para navegação
  - Header superior com menu de usuário e dropdown

- **Navegação por Rotas**
  - Dashboard (Home)
  - Usuários
  - Tarefas / Ordens de Serviço

- **Gestão de Ordens de Serviço (OS)**
  - Estado centralizado via Context API
  - Estrutura preparada para integração com API futuramente

- **Interface Limpa e Responsiva**
  - Cards de métricas (KPIs)
  - Tabelas organizadas
  - Lista de tarefas com status
  - Componentes reutilizáveis

---

## 📁 Estrutura do Projeto
├── components/ # Componentes reutilizáveis (Header, Sidebar)
├── context/ # Context API (OSContext)
├── pages/ # Páginas principais (Home, Users, Tasks)
├── styles/ # Estilos globais e específicos
├── App.jsx # Layout principal e rotas
└── main.jsx # Ponto de entrada da aplicação


---

## 🔌 Dados e Estado

Atualmente, o projeto utiliza **dados locais em memória**, simulando o comportamento de uma aplicação real.

A estrutura já está preparada para integração futura com uma API, por exemplo:

- `GET /api/os` – Listagem de ordens de serviço  
- `GET /api/users` – Listagem de usuários  

---

## 🚀 Como rodar o projeto

Clone o repositório:

git clone https://github.com/DougPlZ/dashboard-admin.git


Instale as dependências:

npm install


Inicie o servidor de desenvolvimento:

npm run dev


A aplicação estará disponível em:

http://localhost:5173



Observações

Este projeto foi desenvolvido com foco em boas práticas, clareza de código e organização, servindo como base para sistemas administrativos mais complexos.

👨‍💻 Autor
Douglas Platiz Granvilla
Projeto desenvolvido para fins de estudo e portfólio.
