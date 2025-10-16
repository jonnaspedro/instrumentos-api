# 🎵 Instrumentos API

API RESTful desenvolvida em **Node.js** e **Express** para o gerenciamento de **instrumentos musicais**.  
O sistema permite realizar operações completas de **CRUD**, além de filtros personalizados, cadastro em lote e geração de estatísticas sobre os instrumentos cadastrados.

## 🧾 Informações do Projeto

- 🧑‍💻 **Desenvolvedor:** Jonnas Pedro  
- 🏫 **Turma:** 2º Ano B — Curso Técnico em Desenvolvimento de Sistemas  
- 📚 **Disciplina:** Programação Web  
- 🧩 **Recurso Utilizado:** Instrumentos Musicais  
- 🧍‍♂️ **Tipo de Projeto:** Individual  
- 💯 **Valor da Atividade:** 4 pontos  

## 💡 Objetivo

Este projeto tem como objetivo aplicar os conceitos de **APIs RESTful** utilizando o framework **Express.js**, explorando rotas, parâmetros, métodos HTTP e manipulação de dados em memória.

A API foi projetada para ser clara, modular e de fácil entendimento, servindo como exemplo prático de backend em JavaScript.

## 🚀 Tecnologias Utilizadas

- **Node.js**
- **Express.js**
- **JavaScript (ES6+)**
- **JSON como formato de dados**
- **HTML5**
- **CSS**

## 🧭 Rotas Principais

| Método | Rota | Descrição |
|--------|------|-----------|
| `GET` | `/instrumentos` | Lista todos os instrumentos |
| `GET` | `/instrumentos/:id` | Retorna um instrumento específico |
| `POST` | `/instrumentos` | Cadastra um novo instrumento |
| `PUT` | `/instrumentos/:id` | Atualiza um instrumento existente |
| `DELETE` | `/instrumentos/:id` | Remove um instrumento |
| `GET` | `/instrumentos/filtro/:precoMax` | Filtra instrumentos por preço máximo |
| `GET` | `/instrumentos/quantidade` | Retorna o total de instrumentos cadastrados |
| `GET` | `/instrumentos/primeiro` | Retorna o primeiro instrumento cadastrado |
| `GET` | `/instrumentos/ultimo` | Retorna o último instrumento cadastrado |
| `POST` | `/instrumentos/lote` | Cadastra vários instrumentos de uma vez |
| `GET` | `/instrumentos/estatisticas` | Retorna estatísticas (como média de preço) |

### 1️⃣ Instalar dependências
```bash
npm install express

