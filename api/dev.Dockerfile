FROM node:12.16.3-buster

COPY ["package.json", "package-lock.json", "/api/"]

WORKDIR /api

RUN npm install

COPY [".", "/api/"]

EXPOSE 1337

CMD bash -c "npm run develop"