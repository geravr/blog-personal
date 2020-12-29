FROM node:12.16.3-buster

COPY ["package.json", "package-lock.json", "/client/"]

WORKDIR /client

RUN npm install --silent

COPY [".", "/client/"]

EXPOSE 3000

CMD bash -c "npm run build && npm run start"