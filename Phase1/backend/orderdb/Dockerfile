FROM node:16

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY order* ./

EXPOSE 13373
CMD ["node", "orderService.js"]