# Projeto API com NodeJS, TypeScript, Prisma e SQLite

Este projeto implementa uma API utilizando NodeJS com TypeScript, Prisma como ORM para gerenciamento de banco de dados SQLite. A aplicação segue o padrão arquitetural MVC (Model-View-Controller) e inclui modelos para `User`, `Post` e `Comment`, onde um `Post` possui vários `Comentários` e cada `Comentário` pertence a um `Post`. Além disso, um `Usuário` pode fazer `Comentários`.

Projeto desenvolvido como parte da avaliação C2 da disciplina de Desenvolvimento de Aplicações Web II, ministrada pelo professor Otávio Lube na Faculdade Faesa.

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
│   │   ├── commentController.ts
│   │   ├── postController.ts
│   │   └── userController.ts
│   ├── models/
│   │   ├── commentModel.ts
│   │   ├── postModel.ts
│   │   └── userModel.ts
│   ├── routes/
│   │   ├── commentRoutes.ts
│   │   ├── postRoutes.ts
│   │   └── userRoutes.ts
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

   - O arquivo `prisma/schema.prisma` define a estrutura do banco de dados SQLite.

4. **Gerar os arquivos do Prisma:**

   ```bash
   npx prisma generate
   ```

## Funcionalidades Implementadas

### Modelos Prisma

- `User`: Define um usuário com relação com `Post` e `Comment`.
- `Post`: Define um post com relação com `User` e `Comment`.
- `Comment`: Define um comentário com relação com `User` e `Post`.

### Controladores (Controllers)

- `userController.ts`: Controladores para operações CRUD de usuários.
- `postController.ts`: Controladores para operações CRUD de posts.
- `commentController.ts`: Controladores para operações CRUD de comentários.

### Rotas (Routes)

- `userRoutes.ts`: Rotas para endpoints relacionados a usuários.
- `postRoutes.ts`: Rotas para endpoints relacionados a posts.
- `commentRoutes.ts`: Rotas para endpoints relacionados a comentários.

### Configuração do Express

- `app.ts`: Configuração do servidor Express para usar as rotas.

### Contêinerização com Docker

- `Dockerfile`: Arquivo para construir a imagem Docker da aplicação.
- `docker-compose.yml`: Arquivo para definir o serviço da aplicação com Docker Compose.

## Executando a Aplicação

### Sem Docker

```bash
npm start
```

### Com Docker

```bash
docker-compose up --build
```

A aplicação estará disponível em `http://localhost:3000`.

## Contribuição

Sinta-se à vontade para contribuir com melhorias, reportar problemas ou sugerir novas funcionalidades através das issues e pull requests.

