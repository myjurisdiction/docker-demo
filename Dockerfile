FROM node:15-alpine

WORKDIR /app

COPY package.json ./app

RUN npm install

COPY . .

EXPOSE 4000

CMD ["npm", "start"]