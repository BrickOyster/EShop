FROM node:16

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY product* ./

EXPOSE 13371
CMD ["node", "productService.js"]