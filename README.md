

# Primeiro passo é fazer o build da imagem
docker build -t google_photos_integration:dev .

# Instalar os pacotes pelo npm
docker run -v ${PWD}:/application -v ${PWD}/node_modules:/application/node_modules -p 3005:3000 --rm google_photos_integration:dev npm install

# Agora é criar o container para rodar a applicação
docker run -v ${PWD}:/application -v ${PWD}/node_modules:/application/node_modules -p 3005:3000 --rm google_photos_integration:dev npm start