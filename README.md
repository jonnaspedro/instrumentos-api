# 🎵 Instrumentos API

API RESTful desenvolvida em **Node.js** e **Express** para o gerenciamento de instrumentos musicais.  
Permite realizar **CRUD completo**, **filtros personalizados**, **cadastro em lote** e **geração de estatísticas** sobre os instrumentos cadastrados.

---

## 🧾 Informações do Projeto

- **🧑‍💻 Desenvolvedor:** Jonnas Pedro  
- **🏫 Turma:** 2º Ano B — Curso Técnico em Desenvolvimento de Sistemas  
- **📚 Disciplina:** Programação Web  
- **🧩 Recurso Utilizado:** Instrumentos Musicais  
- **🧍‍♂️ Tipo de Projeto:** Individual  
- **💯 Valor da Atividade:** 4 pontos  

---

## 💡 Objetivo

Aplicar conceitos de **APIs RESTful** utilizando o framework **Express.js**, explorando **rotas**, **parâmetros**, **métodos HTTP** e **manipulação de dados em memória**.  
O projeto é claro, modular e fácil de entender, servindo como exemplo prático de **backend em JavaScript**.

---

## 🚀 Tecnologias Utilizadas

- Node.js  
- Express.js  
- JavaScript (ES6+)  
- JSON (como formato de dados)  
- CORS (para comunicação com o front-end)  
- Nodemon (para desenvolvimento)

---

## 🧭 Rotas Principais

| Método | Rota | Descrição |
|--------|------|-----------|
| **GET** | `/instrumentos` | Lista todos os instrumentos |
| **GET** | `/instrumentos/:id` | Retorna um instrumento específico |
| **POST** | `/instrumentos` | Cadastra um novo instrumento |
| **PUT** | `/instrumentos/:id` | Atualiza um instrumento existente |
| **DELETE** | `/instrumentos/:id` | Remove um instrumento |
| **GET** | `/instrumentos/filtro/:precoMax` | Filtra instrumentos por preço máximo |
| **GET** | `/instrumentos/quantidade` | Retorna o total de instrumentos cadastrados |
| **GET** | `/instrumentos/primeiro` | Retorna o primeiro instrumento cadastrado |
| **GET** | `/instrumentos/ultimo` | Retorna o último instrumento cadastrado |
| **POST** | `/instrumentos/lote` | Cadastra vários instrumentos de uma vez |
| **GET** | `/instrumentos/estatisticas` | Retorna estatísticas (média, menor e maior preço) |

---

## 🧰 Execução Local

### 1️⃣ Instalar Node.js e npm

```bash
node -v
npm -v
```
### 2️⃣ Clonar o projeto
```bash
git clone <https://github.com/jonnaspedro/instrumentos-api>
cd api-instrumentos
```
### 3️⃣ Inicializar o projeto (se necessário)
```bash
npm init -y
```
### 4️⃣ Instalar todas as dependências
Dependências da API
```bash
npm install express cors
```
Dependências de desenvolvimento
```bash
npm install --save-dev nodemon
```
### 5️⃣ Configurar scripts no package.json
```bash
{
  "name": "api-instrumentos",
  "version": "1.0.0",
  "description": "API para gerenciar instrumentos musicais. Desenvolvido por Jonnas Pedro.",
  "main": "index.js",
  "type": "module",
  "scripts": {
    "start": "node index.js"
  },
  "author": "Jonnas Pedro",
  "license": "ISC",
  "dependencies": {
    "cors": "^2.8.5",
    "express": "^4.21.2"
  },
  "devDependencies": {
    "nodemon": "^3.1.10"
  }
}
```
### 6️⃣ Rodar a API
Modo normal:
```bash
npm start
```
Modo desenvolvimento:
```bash
npm run dev
```
A API estará disponível em http://localhost:3000
### 7️⃣ Servir o Front-end (index.html)

Usando Live Server no VS Code
Ou:
```bash
npx serve .
```
Abrir navegador no endereço exibido, ex.: http://localhost:5000
