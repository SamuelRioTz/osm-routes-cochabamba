FROM node:12.8.0-slim as build

WORKDIR /app

COPY package.json /app/package.json

RUN npm install

RUN npm install -g @angular/cli@8.2.1 --unsafe

COPY . /app

RUN ng build --prod --output-path=dist

FROM nginx:1.16.0-alpine

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]