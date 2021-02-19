#!/bin/bash
echo "Iniciando o container =D"
docker run -v ${PWD}:/application -p 3000:3000 --name google_photos_integration_container --rm google_photos_integration:dev npm start