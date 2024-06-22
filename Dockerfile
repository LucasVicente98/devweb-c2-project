FROM node:14

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

RUN npm install

COPY . .

RUN npx prisma generate

COPY .env .env

EXPOSE 3000

CMD ["npx", "ts-node", "src/app.ts"]
