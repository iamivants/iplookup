FROM node:16-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["node", "dist/main"]
