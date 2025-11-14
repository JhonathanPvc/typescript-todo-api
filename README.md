# 📌 ts-task-api

API RESTful para gerenciamento de tarefas, desenvolvida em **Node.js + TypeScript**, com foco em boas práticas de arquitetura, testes automatizados e escalabilidade.

---

## 🚀 Tecnologias utilizadas
- **Node.js** + **Express**
- **TypeScript**
- **Prisma / TypeORM** (ORM para banco de dados)
- **PostgreSQL** (pode ser substituído por MySQL)
- **JWT** para autenticação
- **Jest** para testes automatizados
- **Docker** para containerização
- **Swagger** para documentação da API

---

## 📂 Estrutura do projeto
```
/src
  /controllers
  /services
  /models
  /routes
  /middlewares
/tests
```

---

## ⚙️ Instalação e execução

### 1. Clone o repositório
```bash
git clone https://github.com/JhonathanPvc/typescript-todo-api.git
cd ts-task-api
```

### 2. Instale as dependências
```bash
npm install
```

### 3. Configure variáveis de ambiente
Crie um arquivo `.env` com:
```
DATABASE_URL=postgresql://usuario:senha@localhost:5432/tasks
JWT_SECRET=sua_chave_secreta
```

### 4. Execute a aplicação
```bash
npm run dev
```

---

## 📖 Endpoints principais
- `POST /auth/register` → Criar usuário  
- `POST /auth/login` → Login e geração de token  
- `GET /tasks` → Listar tarefas  
- `POST /tasks` → Criar nova tarefa  
- `PUT /tasks/:id` → Atualizar tarefa  
- `DELETE /tasks/:id` → Remover tarefa  

---

## 🧪 Testes
```bash
npm run test
```