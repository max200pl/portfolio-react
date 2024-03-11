FROM node:lts-alpine

ENV SERVER_PORT=8000
ENV CLIENT_PORT=3000

WORKDIR /app

RUN apk update && apk add supervisor

# Создание директории для логов supervisord
RUN mkdir -p /var/log/supervisor

# Копирование конфигурационного файла supervisord в контейнер
COPY supervisord.conf /etc/supervisord.conf

RUN npm install --global git

# Копирование всех *.json файлов в контейнер
COPY package*.json ./

COPY client/package*.json client/
WORKDIR /app/client
RUN npm install --omit=dev
RUN mkdir node_modules/.cache && chmod -R 777 node_modules/.cache
WORKDIR /app

COPY server/package*.json server/
WORKDIR /app/server
RUN npm install --omit=dev
WORKDIR /app

COPY client/ client/
COPY server/ server/

USER node

CMD ["/usr/bin/supervisord"]

EXPOSE $SERVER_PORT $CLIENT_PORT