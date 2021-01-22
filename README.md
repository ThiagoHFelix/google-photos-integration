# *GPI* - Google Photos Integration
------------------------------------------------
### **Sobre**
GPI é um sistema simples feito em react para gerenciar uma conta do google photos servindo como base para integração do google photos em qualquer tipo de sistema com o React.

### **Ferramentas**
Para o desenvolvimento da plataforma foi utilizado ferramentas gratuitas de preferência Open-Source. Abaixo estão listadas as ferramentas utilizadas:

 - Linguagem de Programação **Javascript** 
 - *CSS Framework* **Material UI** | Version : ^4.11.2
 - *Javascript Library* **React** | Version: ^17.0.1
 - **Docker** | Version: 20.10.2

### **Desenvolvedores**

Thiago Henrique Felix
- Github | github.com/thiagohfelix
- Email | thiagoacdc12@gmail.com
	

### **Status do Projeto**

 - Em desenvolvimento

### **Licença**
GPI é uma *Applicação* *Open-Source* licenciado através da [GNU General Public License version 3.](https://opensource.org/licenses/GPL-3.0)

### **Imagens da Applicação**

![HomePage](https://i.ibb.co/3SRtJgg/image.png)

# Passo a Passo para rodar a aplicação 
### Primeiro passo é fazer o build da imagem
docker build -t google_photos_integration:dev .

### Instalar os pacotes pelo npm e rodar a aplicação se for a primeira vez
docker run -v ${PWD}:/application --name google_photos_integration_container -p 3000:3000 --rm google_photos_integration:dev npm install && npm start

### Se já estiver instado basta rodar direto
docker run -v ${PWD}:/application -p 3000:3000 --name google_photos_integration_container --rm google_photos_integration:dev npm start

