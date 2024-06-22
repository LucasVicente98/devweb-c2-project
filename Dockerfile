FROM node:18

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./
RUN npm install

COPY . .

RUN npx prisma generate

COPY .env .env

EXPOSE 3000

CMD ["npm", "start"]
