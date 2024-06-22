---

# Projeto de API com Node.js, TypeScript, Prisma e SQLite

Este projeto implementa uma API utilizando Node.js com TypeScript, Prisma como ORM para gerenciamento de banco de dados SQLite. A aplicação segue o padrão arquitetural MVC (Model-View-Controller) e inclui modelos para `User`, `Post` e `Comment`, onde um `Post` possui vários `Comentários` e cada `Comentário` pertence a um `Post`. Além disso, um `Usuário` pode fazer `Comentários`.

Desenvolvido como parte da avaliação C2 da disciplina de Desenvolvimento de Aplicações Web II, ministrada pelo professor Otávio Lube na Faculdade Faesa.

## Requisitos

- Node.js (v14 ou superior)
- Docker (opcional, para contêinerização)

## Estrutura do Projeto

```
my-prisma-app/
├── docker-compose.yml
├── Dockerfile
├── node_modules/
├── package.json
├── package-lock.json
├── prisma/
│   ├── migrations/
│   └── schema.prisma
├── src/
│   ├── app.ts
│   ├── controllers/
│   │   ├── authController.ts
│   │   ├── commentController.ts
│   │   ├── postController.ts
│   │   ├── userController.ts
│   │   └── middleware/
│   │       └── authMiddleware.ts
│   ├── routes/
│   │   ├── authRoutes.ts
│   │   ├── commentRoutes.ts
│   │   ├── postRoutes.ts
│   │   └── userRoutes.ts
│   └── models/
│       ├── commentModel.ts
│       ├── postModel.ts
│       └── userModel.ts
└── tsconfig.json
```

## Configuração

1. **Clonar o repositório:**

   ```bash
   git clone https://github.com/seu-usuario/my-prisma-app.git
   cd my-prisma-app
   ```

2. **Instalar as dependências:**

   ```bash
   npm install
   ```

3. **Configurar o banco de dados SQLite:**

   O arquivo `prisma/schema.prisma` define a estrutura do banco de dados SQLite.

4. **Executar as migrações do Prisma:**

   ```bash
   npx prisma migrate dev --name init
   ```

5. **Gerar o cliente Prisma:**

   ```bash
   npx prisma generate
   ```

## Funcionalidades Implementadas

### Modelos Prisma

- **User:** Define um usuário com relação com `Post` e `Comment`.
- **Post:** Define um post com relação com `User` e `Comment`.
- **Comment:** Define um comentário com relação com `User` e `Post`.

### Controladores (Controllers)

#### authController.ts

Controladores para autenticação de usuários.

- `register:` Registra um novo usuário.
- `login:` Autentica um usuário e gera um token JWT.

#### userController.ts

Controladores para operações CRUD de usuários.

- `getUsers:` Lista todos os usuários.
- `getUserById:` Obtém um usuário pelo ID.
- `updateUser:` Atualiza um usuário pelo ID.
- `deleteUser:` Deleta um usuário pelo ID.

#### postController.ts

Controladores para operações CRUD de posts.

- `getPosts:` Lista todos os posts.
- `getPostById:` Obtém um post pelo ID.
- `createPost:` Cria um novo post.
- `updatePost:` Atualiza um post pelo ID.
- `deletePost:` Deleta um post pelo ID.

#### commentController.ts

Controladores para operações CRUD de comentários.

- `getComments:` Lista todos os comentários.
- `getCommentById:` Obtém um comentário pelo ID.
- `createComment:` Cria um novo comentário.
- `updateComment:` Atualiza um comentário pelo ID.
- `deleteComment:` Deleta um comentário pelo ID.

### Middleware

#### authMiddleware.ts

Middleware para autenticação de tokens JWT.

- `authenticateToken:` Middleware que verifica a presença e validade do token JWT nos cabeçalhos das requisições.

### Rotas (Routes)

#### authRoutes.ts

Rotas para endpoints de autenticação.

- `POST /register:` Rota para registrar um novo usuário.
- `POST /login:` Rota para autenticar um usuário e gerar um token JWT.

#### userRoutes.ts

Rotas para endpoints relacionados a usuários.

- `GET /users:` Rota para listar todos os usuários.
- `GET /users/:id:` Rota para obter um usuário pelo ID.
- `PUT /users/:id:` Rota para atualizar um usuário pelo ID.
- `DELETE /users/:id:` Rota para deletar um usuário pelo ID.

#### postRoutes.ts

Rotas para endpoints relacionados a posts.

- `GET /posts:` Rota para listar todos os posts.
- `GET /posts/:id:` Rota para obter um post pelo ID.
- `POST /posts:` Rota para criar um novo post.
- `PUT /posts/:id:` Rota para atualizar um post pelo ID.
- `DELETE /posts/:id:` Rota para deletar um post pelo ID.

#### commentRoutes.ts

Rotas para endpoints relacionados a comentários.

- `GET /comments:` Rota para listar todos os comentários.
- `GET /comments/:id:` Rota para obter um comentário pelo ID.
- `POST /comments:` Rota para criar um novo comentário.
- `PUT /comments/:id:` Rota para atualizar um comentário pelo ID.
- `DELETE /comments/:id:` Rota para deletar um comentário pelo ID.

### Autenticação com JWT

A autenticação é realizada utilizando tokens JWT (JSON Web Token) para garantir a segurança das operações. O token é gerado durante o login e deve ser enviado no cabeçalho `Authorization` das requisições que exigem autenticação.

#### Registrando um novo usuário

```http
POST /register
Content-Type: application/json

{
  "email": "email@exemplo.com",
  "name": "Nome do Usuário",
  "password": "senha123"
}
```

#### Fazendo login

```http
POST /login
Content-Type: application/json

{
  "email": "email@exemplo.com",
  "password": "senha123"
}
```

#### Usando o token JWT

Após fazer login, você receberá um token JWT que deve ser incluído no cabeçalho `Authorization` das requisições que requerem autenticação.

```http
Authorization: Bearer seu_token_jwt_aqui
```

## Executando a Aplicação

### Sem Docker

```bash
npm start
```

### Com Docker

```bash
docker-compose up --build
```

A aplicação estará disponível em http://localhost:3000.

## Usando a API

### Endpoints para Usuários

#### Listar todos os usuários

```http
GET /users
Authorization: Bearer seu_token_jwt_aqui
```

#### Obter um usuário pelo ID

```http
GET /users/:id
Authorization: Bearer seu_token_jwt_aqui
```

#### Criar um novo usuário

```http
POST /register
Content-Type: application/json

{
  "email": "email@exemplo.com",
  "name": "Nome do Usuário",
  "password": "senha123"
}
```

#### Atualizar um usuário pelo ID

```http
PUT /users/:id
Content-Type: application/json
Authorization: Bearer seu_token_jwt_aqui

{
  "email": "novoemail@exemplo.com",
  "name": "Novo Nome do Usuário"
}
```

#### Deletar um usuário pelo ID

```http
DELETE /users/:id
Authorization: Bearer seu_token_jwt_aqui
```

### Endpoints para Posts

#### Listar todos os posts

```http
GET /posts
```

#### Obter um post pelo ID

```http
GET /posts/:id
```

#### Criar um novo post

```http
POST /posts
Content-Type: application/json
Authorization: Bearer seu_token_jwt_aqui

{
  "title": "Título do Post",
  "content": "Conteúdo do Post",
  "authorId": 1
}
```

#### Atualizar um post pelo ID

```http
PUT /posts/:id
Content-Type: application/json
Authorization: Bearer seu_token_jwt_aqui

{
  "title": "Novo Título do Post",
  "content": "Novo Conteúdo do Post",
  "published": true
}
```

#### Deletar um post pelo ID

```http
DELETE /posts/:id
Authorization: Bearer seu_token_jwt_aqui
```

### Endpoints para Comentários

#### Listar todos os comentários

```http
GET /comments
```

#### Obter um comentário pelo ID

```http
GET /comments/:id
```

#### Criar um novo comentário

```http
POST /comments
Content-Type:

 application/json
Authorization: Bearer seu_token_jwt_aqui

{
  "content": "Conteúdo do Comentário",
  "postId": 1,
  "userId": 1
}
```

#### Atualizar um comentário pelo ID

```http
PUT /comments/:id
Content-Type: application/json
Authorization: Bearer seu_token_jwt_aqui

{
  "content": "Novo Conteúdo do Comentário"
}
```

#### Deletar um comentário pelo ID

```http
DELETE /comments/:id
Authorization: Bearer seu_token_jwt_aqui
```

## Tratamento de Exceções

O tratamento de exceções é realizado nos controladores (`controllers`) para garantir que respostas apropriadas sejam retornadas ao cliente em caso de erros, como recurso não encontrado ou falha na operação do banco de dados.