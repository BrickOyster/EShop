FROM node:16

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY img ./img
COPY js ./js
COPY *.html ./
COPY app.js ./
COPY *.css ./

EXPOSE 1337
CMD ["node", "app.js"]