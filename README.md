# Nodejs Remote Control
## Running
### Install
```bash
git checkout remote-control && npm i
```
### Start both backend and frontend in development mode: App served @ `http://localhost:8080` with nodemon
```bash
npm run start:dev
```
### Start both backend and frontend in production mode: App served @ `http://localhost:8080` without nodemon
```bash
npm run start
```
## Open frontend http://localhost:3000/
## Default backend port is `8080`. Default frontend port is `3000`.
### You can set ports in `.env` file. Rename `.env.default` to `.env` and edit it.
```bash
mv .env.default .env && code .env
```