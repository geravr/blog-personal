FROM node:12.16.3-buster

COPY ["package.json", "package-lock.json", "/api/"]

WORKDIR /api

RUN npm install

COPY [".", "/api/"]

# RUN npm run build

EXPOSE 1337

CMD bash -c "npm run develop"