# Этап сборки
FROM node:18-alpine AS build

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем файлы зависимостей
COPY package.json package-lock.json /app/

# Устанавливаем зависимости
RUN npm install

# Копируем весь проект
COPY ../ /app/

# Сборка приложения
RUN npm run build

# Этап продакшена
FROM nginx:alpine

# Удаляем дефолтную конфигурацию Nginx
RUN rm /etc/nginx/conf.d/default.conf

# Копируем вашу конфигурацию Nginx
COPY ../nginx/nginx.conf /etc/nginx/conf.d

# Копируем сгенерированные файлы из этапа сборки
COPY --from=build /app/build /usr/share/nginx/html

# Открываем порт 80
EXPOSE 80

# Запускаем Nginx
CMD ["nginx", "-g", "daemon off;"]
