FROM node:14.15.3-buster-slim

COPY ["package.json", "package-lock.json", "/client/"]

WORKDIR /client

RUN npm install

COPY [".", "/client/"]

EXPOSE 3008