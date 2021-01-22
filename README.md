# google-photos-integration


# Primeiro passo é fazer o build da imagem
docker build -t google_photos_integration:dev .

# Instalar os pacotes pelo npm
docker run -v ${PWD}:/application --name google_photos_integration_container -p 3000:3000 --rm google_photos_integration:dev npm install

# Agora é criar o container para rodar a applicação
docker run -v ${PWD}:/application -p 3005:3000 --name google_photos_integration_container --rm google_photos_integration:dev npm start