FROM node:lts-alpine

WORKDIR /app

# Установка supervisord
FROM node:lts-alpine

# Создание директории для логов supervisord
RUN mkdir -p /var/log/supervisor

# Копирование конфигурационного файла supervisord в контейнер
COPY supervisord.conf /etc/supervisor/conf.d/supervisord.conf

# Копирование всех .json файлов в контейнер
COPY package*.json ./

COPY client/package*.json client/
RUN npm run install-client --omit=dev

COPY server/package*.json server/
RUN npm run install-server --omit=dev

COPY client/ client/
COPY server/ server/

USER node

CMD ["/usr/bin/supervisord"]

EXPOSE 8000