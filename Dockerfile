FROM node:13-alpine

WORKDIR /application

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app/package.json
RUN npm install --silent
RUN npm install react-scripts@3.3.1 -g --silent

# Inicializa a aplicação
CMD ["npm", "start"]