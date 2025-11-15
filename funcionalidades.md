## ⚙️ Funcionalidades principais

### 👤 **Autenticação e Usuários**
- Cadastro de usuários (`POST /auth/register`)
- Login com geração de **JWT** (`POST /auth/login`)
- Middleware para proteger rotas privadas
- Recuperação de senha (opcional)

### ✅ **Gerenciamento de Tarefas**
- Criar nova tarefa (`POST /tasks`)
- Listar todas as tarefas do usuário (`GET /tasks`)
- Buscar tarefa específica (`GET /tasks/:id`)
- Atualizar tarefa (`PUT /tasks/:id`)
- Excluir tarefa (`DELETE /tasks/:id`)

### 📌 **Recursos extras para destacar**
- Marcar tarefa como **concluída** ou **pendente**
- Definir **prioridade** (alta, média, baixa)
- Adicionar **data de vencimento**
- Filtro de tarefas por status ou prioridade (`GET /tasks?status=done&priority=high`)

### 🧪 **Qualidade e testes**
- Testes unitários e de integração com **Jest**
- Cobertura de código visível no GitHub Actions
- Documentação automática com **Swagger**

### ☁️ **Infraestrutura**
- Configuração com **Docker** para rodar facilmente
- Deploy em serviços gratuitos como **Railway** ou **Render**

---

## 🎯 Diferenciais que chamam atenção
- **Boas práticas de arquitetura** (controllers, services, models, routes, middlewares).
- **CI/CD** com GitHub Actions para rodar testes a cada commit.
- **README completo** com instruções e exemplos de requisição.
- **Swagger UI** para explorar os endpoints.

---