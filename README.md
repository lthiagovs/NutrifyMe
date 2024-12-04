# 🌱 **NutrifyMe - Site de Consultas Nutricionais**

Bem-vindo ao **NutrifyMe**, um aplicativo web projetado para gerenciar consultas nutricionais. Neste projeto, os usuários podem agendar consultas com nutricionistas, gerenciar seus perfis e muito mais. O projeto é composto por um **frontend** e uma **API backend**, ambos rodando dentro de contêineres Docker.

---

## 🚀 **Configuração do Projeto**

Para começar com o projeto, siga os passos abaixo para rodar tanto o **backend** (API) quanto o **frontend** (Interface Web).

### 📥 **1. Baixar a Imagem do MongoDB**

Primeiro, você precisará baixar a imagem mais recente do MongoDB para rodar o contêiner do banco de dados:

```bash
docker pull mongo:latest
```

## 🛠️ 2. Rodar o Contêiner MongoDB
Após baixar a imagem, rode o contêiner do MongoDB na sua máquina local:

```bash
Copiar código
docker run --name mongo_container -p 27018:27017 -d mongo
```

Isso irá iniciar o contêiner do MongoDB em modo destacado (-d), mapeando a porta 27017 dentro do contêiner para a porta 27018 na sua máquina.

## 🖥️ 3. Rodar a API (Backend)
Agora, você precisa rodar o contêiner da API. Primeiro, verifique o IP do contêiner MongoDB para conectar a API com o banco de dados.

```bash
Copiar código
docker ps
docker inspect <mongo_container_id>
Exemplo de resultado (o IP será semelhante a este):
"IPAddress": "172.17.0.2"
```
Agora, rode o contêiner da API com a string de conexão do MongoDB (não se esqueça de substituir 172.17.0.2 pelo IP real do seu contêiner MongoDB):

```bash
Copiar código
docker run -e DATABASE_URL=mongodb://172.17.0.2:27017/nutrifyme -p 3000:3000 api-nutrifyme
```
Isso irá iniciar o contêiner API e mapear o backend para a porta 3000 na sua máquina local.

## 🌐 4. Rodar o Frontend (Interface Web)
Por fim, rode o contêiner do frontend para lançar a interface web:

```bash
Copiar código
docker run -p 5173:5173 web-nutrifyme
```
Agora, o frontend estará acessível em http://localhost:5173 no seu navegador.

## 🛠️ Visão Geral dos Dockerfiles
Tanto a API quanto o Frontend possuem seus respectivos Dockerfile que configuram o ambiente necessário para cada serviço. O contêiner MongoDB roda como banco de dados para a API.

Dockerfile da API: Localizado no diretório do projeto api-nutrifyme.
Dockerfile do Frontend: Localizado no diretório do projeto web-nutrifyme.

## 💡 Dica: Para construir manualmente as imagens Docker, execute os seguintes comandos dentro dos diretórios dos projetos:
Para a imagem Docker da API:

```bash
Copiar código
docker build -t api-nutrifyme .
```
Para a imagem Docker do Frontend:

```bash
Copiar código
docker build -t web-nutrifyme .`
```
