FROM node:16

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . /src

EXPOSE 1337
CMD ["npm", "run", "dev"]